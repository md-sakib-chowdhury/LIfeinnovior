import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Common/Sidebar';
import { getAppointments } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { FiCalendar, FiClock, FiSearch, FiVideo } from 'react-icons/fi';

const STATUS_BADGE = { pending: 'badge-warning', confirmed: 'badge-success', cancelled: 'badge-danger', completed: 'badge-gray' };

export default function PatientDashboard() {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAppointments({ limit: 5 }).then(r => setAppointments(r.data.appointments || [])).finally(() => setLoading(false));
    }, []);

    const upcoming = appointments.filter(a => ['pending', 'confirmed'].includes(a.status));
    const completed = appointments.filter(a => a.status === 'completed');

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Hello, {user?.name?.split(' ')[0]}! 👋</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Your mental wellness journey</p>
                    </div>
                    <Link to="/find-psychologist" className="btn btn-primary btn-sm"><FiSearch size={14} /> Find Psychologist</Link>
                </div>
                <div className="page-content">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#EEF2FF' }}><FiCalendar color="#4F46E5" size={20} /></div>
                            <div><div className="stat-value">{upcoming.length}</div><div className="stat-label">Upcoming Sessions</div></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#ECFDF5' }}><FiClock color="#10B981" size={20} /></div>
                            <div><div className="stat-value">{completed.length}</div><div className="stat-label">Completed Sessions</div></div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 20 }}>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">My Appointments</h3>
                                <Link to="/patient/appointments" style={{ fontSize: 13, color: 'var(--primary)', textDecoration: 'none' }}>View all</Link>
                            </div>
                            {loading ? (
                                <div style={{ textAlign: 'center', padding: 30 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                            ) : appointments.length === 0 ? (
                                <div className="empty-state">
                                    <div className="empty-icon">📅</div>
                                    <p>No appointments yet</p>
                                    <Link to="/find-psychologist" className="btn btn-primary btn-sm" style={{ marginTop: 12 }}>Book Your First Session</Link>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                    {appointments.map(apt => (
                                        <div key={apt._id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                                            <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{apt.psychologist?.name?.charAt(0)}</div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. {apt.psychologist?.name}</div>
                                                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{new Date(apt.date).toLocaleDateString()} at {apt.startTime}</div>
                                            </div>
                                            <span className={`badge ${STATUS_BADGE[apt.status]}`}>{apt.status}</span>
                                            {apt.status === 'confirmed' && apt.type === 'video' && (
                                                <Link to={`/video/${apt._id}`} className="btn btn-primary btn-sm"><FiVideo size={13} /> Join</Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <h3 className="card-title" style={{ marginBottom: 14 }}>Quick Actions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {[
                                    { to: '/find-psychologist', icon: '🔍', label: 'Find Psychologist' },
                                    { to: '/patient/appointments', icon: '📅', label: 'My Appointments' },
                                    { to: '/patient/sessions', icon: '📋', label: 'Session History' },
                                    { to: '/blog', icon: '📖', label: 'Read Articles' },
                                ].map(a => (
                                    <Link key={a.to} to={a.to} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, background: 'var(--bg)', color: 'var(--text-primary)', fontSize: 14, transition: 'background 0.15s' }}
                                        onMouseOver={e => e.currentTarget.style.background = 'var(--primary-light)'}
                                        onMouseOut={e => e.currentTarget.style.background = 'var(--bg)'}>
                                        <span>{a.icon}</span>{a.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}