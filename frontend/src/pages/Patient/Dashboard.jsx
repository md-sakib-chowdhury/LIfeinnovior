// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Sidebar from '../../components/Common/Sidebar';
// import { getAppointments } from '../../utils/api';
// import { useAuth } from '../../context/AuthContext';
// import { FiCalendar, FiClock, FiSearch, FiVideo } from 'react-icons/fi';

// const STATUS_BADGE = { pending: 'badge-warning', confirmed: 'badge-success', cancelled: 'badge-danger', completed: 'badge-gray' };

// export default function PatientDashboard() {
//     const { user } = useAuth();
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getAppointments({ limit: 5 }).then(r => setAppointments(r.data.appointments || [])).finally(() => setLoading(false));
//     }, []);

//     const upcoming = appointments.filter(a => ['pending', 'confirmed'].includes(a.status));
//     const completed = appointments.filter(a => a.status === 'completed');

//     return (
//         <div className="dashboard-layout">
//             <Sidebar />
//             <div className="main-content">
//                 <div className="page-header">
//                     <div>
//                         <h1 style={{ fontSize: 20, fontWeight: 700 }}>Hello, {user?.name?.split(' ')[0]}! 👋</h1>
//                         <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Your mental wellness journey</p>
//                     </div>
//                     <Link to="/find-psychologist" className="btn btn-primary btn-sm"><FiSearch size={14} /> Find Psychologist</Link>
//                 </div>
//                 <div className="page-content">
//                     <div className="stats-grid">
//                         <div className="stat-card">
//                             <div className="stat-icon" style={{ background: '#EEF2FF' }}><FiCalendar color="#4F46E5" size={20} /></div>
//                             <div><div className="stat-value">{upcoming.length}</div><div className="stat-label">Upcoming Sessions</div></div>
//                         </div>
//                         <div className="stat-card">
//                             <div className="stat-icon" style={{ background: '#ECFDF5' }}><FiClock color="#10B981" size={20} /></div>
//                             <div><div className="stat-value">{completed.length}</div><div className="stat-label">Completed Sessions</div></div>
//                         </div>
//                     </div>

//                     <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 20 }}>
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">My Appointments</h3>
//                                 <Link to="/patient/appointments" style={{ fontSize: 13, color: 'var(--primary)', textDecoration: 'none' }}>View all</Link>
//                             </div>
//                             {loading ? (
//                                 <div style={{ textAlign: 'center', padding: 30 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
//                             ) : appointments.length === 0 ? (
//                                 <div className="empty-state">
//                                     <div className="empty-icon">📅</div>
//                                     <p>No appointments yet</p>
//                                     <Link to="/find-psychologist" className="btn btn-primary btn-sm" style={{ marginTop: 12 }}>Book Your First Session</Link>
//                                 </div>
//                             ) : (
//                                 <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//                                     {appointments.map(apt => (
//                                         <div key={apt._id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
//                                             <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{apt.psychologist?.name?.charAt(0)}</div>
//                                             <div style={{ flex: 1 }}>
//                                                 <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. {apt.psychologist?.name}</div>
//                                                 <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{new Date(apt.date).toLocaleDateString()} at {apt.startTime}</div>
//                                             </div>
//                                             <span className={`badge ${STATUS_BADGE[apt.status]}`}>{apt.status}</span>
//                                             {apt.status === 'confirmed' && apt.type === 'video' && (
//                                                 <Link to={`/video/${apt._id}`} className="btn btn-primary btn-sm"><FiVideo size={13} /> Join</Link>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         <div className="card">
//                             <h3 className="card-title" style={{ marginBottom: 14 }}>Quick Actions</h3>
//                             <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//                                 {[
//                                     { to: '/find-psychologist', icon: '🔍', label: 'Find Psychologist' },
//                                     { to: '/patient/appointments', icon: '📅', label: 'My Appointments' },
//                                     { to: '/patient/sessions', icon: '📋', label: 'Session History' },
//                                     { to: '/blog', icon: '📖', label: 'Read Articles' },
//                                 ].map(a => (
//                                     <Link key={a.to} to={a.to} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, background: 'var(--bg)', color: 'var(--text-primary)', fontSize: 14, transition: 'background 0.15s' }}
//                                         onMouseOver={e => e.currentTarget.style.background = 'var(--primary-light)'}
//                                         onMouseOut={e => e.currentTarget.style.background = 'var(--bg)'}>
//                                         <span>{a.icon}</span>{a.label}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Common/Sidebar';
import { getAppointments } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { FiCalendar, FiClock, FiSearch, FiVideo, FiArrowRight, FiActivity } from 'react-icons/fi';

const STATUS_BADGE = {
    pending: { bg: '#FFFBEB', color: '#D97706', label: 'Pending' },
    confirmed: { bg: '#ECFDF5', color: '#059669', label: 'Confirmed' },
    cancelled: { bg: '#FEF2F2', color: '#DC2626', label: 'Cancelled' },
    completed: { bg: '#F3F4F6', color: '#6B7280', label: 'Completed' }
};

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
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFF' }}>
            <Sidebar />
            <div style={{ marginLeft: 260, flex: 1 }}>

                {/* Header */}
                <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700, color: '#111827' }}>Hello, {user?.name?.split(' ')[0]}! 👋</h1>
                        <p style={{ fontSize: 13, color: '#6B7280' }}>Your mental wellness journey</p>
                    </div>
                    <Link to="/find-psychologist" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                        <FiSearch size={15} /> Find Psychologist
                    </Link>
                </div>

                <div style={{ padding: 28 }}>

                    {/* Stats */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 28 }}>
                        {[
                            { icon: FiCalendar, label: 'Upcoming Sessions', value: upcoming.length, color: '#4F46E5', bg: 'linear-gradient(135deg, #4F46E5, #7C3AED)', light: '#EEF2FF', desc: 'Scheduled ahead' },
                            { icon: FiActivity, label: 'Completed Sessions', value: completed.length, color: '#10B981', bg: 'linear-gradient(135deg, #10B981, #059669)', light: '#ECFDF5', desc: 'Successfully done' },
                        ].map(stat => (
                            <div key={stat.label} style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E5E7EB', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 18 }}>
                                <div style={{ width: 56, height: 56, borderRadius: 14, background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${stat.color}40`, flexShrink: 0 }}>
                                    <stat.icon size={24} color="#fff" />
                                </div>
                                <div>
                                    <div style={{ fontSize: 32, fontWeight: 800, color: '#111827', lineHeight: 1 }}>{stat.value}</div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginTop: 4 }}>{stat.label}</div>
                                    <div style={{ fontSize: 11, color: stat.color, marginTop: 2, fontWeight: 500 }}>{stat.desc}</div>
                                </div>
                            </div>
                        ))}

                        {/* Quick Book Card */}
                        <div style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px rgba(79,70,229,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Ready for a session?</div>
                                <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginTop: 4 }}>Book a Psychologist</div>
                            </div>
                            <Link to="/find-psychologist" style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16, padding: '8px 16px', background: 'rgba(255,255,255,0.2)', borderRadius: 8, textDecoration: 'none', color: '#fff', fontWeight: 600, fontSize: 13, width: 'fit-content', backdropFilter: 'blur(10px)' }}>
                                Book Now <FiArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 20 }}>

                        {/* Appointments */}
                        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>My Appointments</h3>
                                <Link to="/patient/appointments" style={{ fontSize: 13, color: '#4F46E5', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>View all <FiArrowRight size={13} /></Link>
                            </div>
                            {loading ? (
                                <div style={{ textAlign: 'center', padding: 40 }}><div style={{ width: 36, height: 36, border: '3px solid #E5E7EB', borderTopColor: '#4F46E5', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto' }} /></div>
                            ) : appointments.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                                    <div style={{ fontSize: 48, marginBottom: 12 }}>📅</div>
                                    <p style={{ color: '#6B7280', marginBottom: 16 }}>No appointments yet</p>
                                    <Link to="/find-psychologist" style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>Book Your First Session</Link>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {appointments.map(apt => {
                                        const badge = STATUS_BADGE[apt.status] || STATUS_BADGE.pending;
                                        return (
                                            <div key={apt._id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: '#F9FAFB', borderRadius: 12, border: '1px solid #F3F4F6' }}>
                                                <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: 16, flexShrink: 0 }}>
                                                    {apt.psychologist?.name?.charAt(0)}
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>Dr. {apt.psychologist?.name}</div>
                                                    <div style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>{new Date(apt.date).toLocaleDateString()} at {apt.startTime}</div>
                                                </div>
                                                <span style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, background: badge.bg, color: badge.color }}>{badge.label}</span>
                                                {apt.status === 'confirmed' && apt.type === 'video' && (
                                                    <Link to={`/video/${apt._id}`} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
                                                        <FiVideo size={13} /> Join
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 16 }}>Quick Actions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {[
                                    { to: '/find-psychologist', icon: '🔍', label: 'Find Psychologist', color: '#EEF2FF', textColor: '#4F46E5' },
                                    { to: '/patient/appointments', icon: '📅', label: 'My Appointments', color: '#F5F3FF', textColor: '#7C3AED' },
                                    { to: '/patient/sessions', icon: '📋', label: 'Session History', color: '#FFFBEB', textColor: '#D97706' },
                                    { to: '/blog', icon: '📖', label: 'Read Articles', color: '#ECFDF5', textColor: '#059669' },
                                ].map(a => (
                                    <Link key={a.to} to={a.to} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: a.color, color: a.textColor, fontSize: 13, fontWeight: 600, transition: 'all 0.15s' }}>
                                        <span style={{ fontSize: 18 }}>{a.icon}</span>{a.label}
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