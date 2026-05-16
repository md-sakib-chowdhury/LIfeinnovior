import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Common/Sidebar';
import { getAppointments, getMyPatients } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { FiCalendar, FiUsers, FiFileText, FiClock, FiAlertCircle, FiVideo } from 'react-icons/fi';

const STATUS_BADGE = { pending: 'badge-warning', confirmed: 'badge-success', cancelled: 'badge-danger', completed: 'badge-gray' };

export default function PsychologistDashboard() {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([getAppointments({ limit: 5 }), getMyPatients()])
            .then(([a, p]) => { setAppointments(a.data.appointments || []); setPatients(p.data.patients || []); })
            .finally(() => setLoading(false));
    }, []);

    const sub = user?.psychologistProfile?.subscription;
    const isTrialing = sub?.status === 'trial';
    const trialDaysLeft = isTrialing && sub?.trialEndsAt
        ? Math.max(0, Math.ceil((new Date(sub.trialEndsAt) - Date.now()) / (1000 * 60 * 60 * 24))) : 0;

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Welcome back, Dr. {user?.name?.split(' ')[0]}!</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Here's your practice overview</p>
                    </div>
                    <Link to="/psychologist/appointments" className="btn btn-primary btn-sm"><FiCalendar size={14} /> View Appointments</Link>
                </div>
                <div className="page-content">
                    {isTrialing && (
                        <div style={{ background: '#FFFBEB', border: '1px solid #FCD34D', borderRadius: 12, padding: '14px 18px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
                            <FiAlertCircle color="#D97706" size={18} />
                            <div style={{ flex: 1 }}>
                                <strong style={{ color: '#92400E' }}>Trial Period:</strong>
                                <span style={{ color: '#92400E', fontSize: 13, marginLeft: 6 }}>{trialDaysLeft} days remaining. Upgrade to continue.</span>
                            </div>
                            <Link to="/pricing" className="btn btn-sm" style={{ background: '#F59E0B', color: '#fff' }}>Upgrade Now</Link>
                        </div>
                    )}

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#EEF2FF' }}><FiCalendar color="#4F46E5" size={20} /></div>
                            <div><div className="stat-value">{appointments.filter(a => a.status === 'confirmed').length}</div><div className="stat-label">Upcoming Sessions</div></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#ECFDF5' }}><FiUsers color="#10B981" size={20} /></div>
                            <div><div className="stat-value">{patients.length}</div><div className="stat-label">Total Patients</div></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#F5F3FF' }}><FiFileText color="#7C3AED" size={20} /></div>
                            <div><div className="stat-value">{appointments.filter(a => a.status === 'completed').length}</div><div className="stat-label">Completed Sessions</div></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon" style={{ background: '#FFFBEB' }}><FiClock color="#F59E0B" size={20} /></div>
                            <div><div className="stat-value">{appointments.filter(a => a.status === 'pending').length}</div><div className="stat-label">Pending Requests</div></div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Recent Appointments</h3>
                                <Link to="/psychologist/appointments" style={{ fontSize: 13, color: 'var(--primary)', textDecoration: 'none' }}>View all</Link>
                            </div>
                            {loading ? (
                                <div style={{ textAlign: 'center', padding: 30 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                            ) : appointments.length === 0 ? (
                                <div className="empty-state"><div className="empty-icon">📅</div><p>No appointments yet</p></div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {appointments.map(apt => (
                                        <div key={apt._id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                                            <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{apt.patient?.name?.charAt(0)?.toUpperCase()}</div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: 600, fontSize: 13 }}>{apt.patient?.name}</div>
                                                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{new Date(apt.date).toLocaleDateString()} at {apt.startTime}</div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                {apt.type === 'video' && <FiVideo size={14} color="var(--text-muted)" />}
                                                <span className={`badge ${STATUS_BADGE[apt.status]}`}>{apt.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">My Patients</h3>
                                <Link to="/psychologist/patients" style={{ fontSize: 13, color: 'var(--primary)', textDecoration: 'none' }}>View all</Link>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {patients.slice(0, 6).map(p => (
                                    <div key={p._id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <div className="user-avatar" style={{ background: '#ECFEFF', color: '#06B6D4' }}>{p.name?.charAt(0)?.toUpperCase()}</div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: 13 }}>{p.name}</div>
                                            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.email}</div>
                                        </div>
                                    </div>
                                ))}
                                {patients.length === 0 && !loading && (
                                    <div className="empty-state" style={{ padding: '20px 0' }}><p style={{ fontSize: 13 }}>No patients yet</p></div>
                                )}
                            </div>
                        </div>
                    </div>

                    {!user?.psychologistProfile?.bio && (
                        <div style={{ marginTop: 20, background: '#EEF2FF', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                            <div style={{ fontSize: 28 }}>📝</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 600, color: '#3730A3' }}>Complete your profile</div>
                                <div style={{ fontSize: 13, color: '#4F46E5' }}>Add your bio, specializations, and session fee to attract patients.</div>
                            </div>
                            <Link to="/psychologist/profile" className="btn btn-primary btn-sm">Complete Profile</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}