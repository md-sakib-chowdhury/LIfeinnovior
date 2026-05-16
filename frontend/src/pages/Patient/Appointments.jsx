import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Common/Sidebar';
import { getAppointments, updateAppointmentStatus } from '../../utils/api';
import { FiVideo } from 'react-icons/fi';
import toast from 'react-hot-toast';

const STATUS_BADGE = { pending: 'badge-warning', confirmed: 'badge-success', cancelled: 'badge-danger', completed: 'badge-gray' };
const TABS = ['all', 'pending', 'confirmed', 'completed', 'cancelled'];

export default function PatientAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState('all');

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data } = await getAppointments(tab !== 'all' ? { status: tab } : {});
            setAppointments(data.appointments || []);
        } finally { setLoading(false); }
    };

    useEffect(() => { fetchData(); }, [tab]);

    const cancel = async (id) => {
        const reason = window.prompt('Reason for cancellation:');
        if (reason === null) return;
        try {
            await updateAppointmentStatus(id, { status: 'cancelled', cancelReason: reason });
            toast.success('Appointment cancelled');
            fetchData();
        } catch { toast.error('Failed to cancel'); }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>My Appointments</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>All your scheduled sessions</p>
                    </div>
                    <Link to="/find-psychologist" className="btn btn-primary btn-sm">+ Book New Session</Link>
                </div>
                <div className="page-content">
                    <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                        {TABS.map(t => (
                            <button key={t} onClick={() => setTab(t)} className={`btn btn-sm ${tab === t ? 'btn-primary' : 'btn-outline'}`}>
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="card">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr><th>Psychologist</th><th>Date & Time</th><th>Type</th><th>Fee</th><th>Status</th><th>Actions</th></tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan={6} style={{ textAlign: 'center', padding: 40 }}><div className="spinner" style={{ margin: '0 auto' }} /></td></tr>
                                    ) : appointments.length === 0 ? (
                                        <tr><td colSpan={6}><div className="empty-state"><div className="empty-icon">📅</div><p>No appointments found</p></div></td></tr>
                                    ) : appointments.map(apt => (
                                        <tr key={apt._id}>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                    <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{apt.psychologist?.name?.charAt(0)}</div>
                                                    <div>
                                                        <div style={{ fontWeight: 600 }}>Dr. {apt.psychologist?.name}</div>
                                                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{apt.psychologist?.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div style={{ fontWeight: 500 }}>{new Date(apt.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
                                                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{apt.startTime} – {apt.endTime}</div>
                                            </td>
                                            <td><span style={{ fontSize: 13 }}>{apt.type === 'video' ? '📹 Video' : '🏥 In-Person'}</span></td>
                                            <td style={{ fontWeight: 600, color: '#10B981' }}>${apt.sessionFee}</td>
                                            <td><span className={`badge ${STATUS_BADGE[apt.status]}`}>{apt.status}</span></td>
                                            <td>
                                                <div style={{ display: 'flex', gap: 6 }}>
                                                    {apt.status === 'confirmed' && apt.type === 'video' && (
                                                        <Link to={`/video/${apt._id}`} className="btn btn-primary btn-sm"><FiVideo size={13} /> Join</Link>
                                                    )}
                                                    {['pending', 'confirmed'].includes(apt.status) && (
                                                        <button className="btn btn-danger btn-sm" onClick={() => cancel(apt._id)}>Cancel</button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}