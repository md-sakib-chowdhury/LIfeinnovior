import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPsychologist, createAppointment } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { FiStar, FiVideo, FiCalendar, FiClock, FiDollarSign } from 'react-icons/fi';
import toast from 'react-hot-toast';

const TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

export default function PsychologistProfile() {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [psych, setPsych] = useState(null);
    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState(false);
    const [form, setForm] = useState({ date: '', startTime: '', type: 'video', notes: '' });

    useEffect(() => {
        getPsychologist(id).then(r => setPsych(r.data.psychologist)).finally(() => setLoading(false));
    }, [id]);

    const handleBook = async (e) => {
        e.preventDefault();
        if (!user) { navigate('/login'); return; }
        if (user.role !== 'patient') { toast.error('Only patients can book appointments'); return; }
        setBooking(true);
        try {
            const [h, m] = form.startTime.split(':').map(Number);
            const totalMin = h * 60 + m + 50;
            const endTime = `${String(Math.floor(totalMin / 60)).padStart(2, '0')}:${String(totalMin % 60).padStart(2, '0')}`;
            await createAppointment({ psychologistId: id, ...form, endTime });
            toast.success('Appointment booked!');
            navigate('/patient/appointments');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Booking failed');
        } finally { setBooking(false); }
    };

    if (loading) return <div className="loading-screen"><div className="spinner" /></div>;
    if (!psych) return <div style={{ textAlign: 'center', padding: 60 }}>Psychologist not found</div>;

    const p = psych.psychologistProfile || {};

    return (
        <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
            <nav style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="/" style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: 'var(--primary)', textDecoration: 'none' }}>LifeInnovior</a>
            </nav>
            <div className="container" style={{ padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 28, alignItems: 'start' }}>
                <div>
                    <div className="card" style={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, fontWeight: 700, flexShrink: 0 }}>
                                {psych.avatar ? <img src={psych.avatar} alt={psych.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : psych.name?.charAt(0)}
                            </div>
                            <div>
                                <h1 style={{ fontSize: 24, fontWeight: 700 }}>Dr. {psych.name}</h1>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#F59E0B', marginTop: 4 }}>
                                    <FiStar size={15} fill="#F59E0B" />
                                    <span style={{ fontWeight: 600 }}>{p.rating?.toFixed(1) || '5.0'}</span>
                                    <span style={{ color: 'var(--text-muted)' }}>({p.totalReviews || 0} reviews)</span>
                                </div>
                                <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                                    <span>🎓 {p.experience} yrs experience</span>
                                    <span>🌐 {p.languages?.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                            {p.specializations?.map(s => <span key={s} className="badge badge-purple">{s}</span>)}
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{p.bio}</p>
                    </div>
                    {p.education?.length > 0 && (
                        <div className="card">
                            <h3 className="card-title" style={{ marginBottom: 14 }}>Education</h3>
                            {p.education.map((e, i) => (
                                <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                                    <span style={{ fontSize: 20 }}>🎓</span>
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: 14 }}>{e.degree}</div>
                                        <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{e.institution} · {e.year}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="card" style={{ position: 'sticky', top: 80 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                        <FiDollarSign color="#10B981" />
                        <span style={{ fontSize: 22, fontWeight: 700, color: '#10B981' }}>{p.sessionFee}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>per session</span>
                    </div>
                    <form onSubmit={handleBook}>
                        <div className="form-group">
                            <label className="form-label"><FiCalendar size={13} /> Select Date</label>
                            <input className="form-control" type="date" required value={form.date}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={e => setForm(p => ({ ...p, date: e.target.value }))} />
                        </div>
                        <div className="form-group">
                            <label className="form-label"><FiClock size={13} /> Select Time</label>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                                {TIMES.map(t => (
                                    <button key={t} type="button" onClick={() => setForm(p => ({ ...p, startTime: t }))}
                                        className={`btn btn-sm ${form.startTime === t ? 'btn-primary' : 'btn-outline'}`}
                                        style={{ padding: '6px 0', fontSize: 12 }}>{t}</button>
                                ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label"><FiVideo size={13} /> Session Type</label>
                            <select className="form-control" value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}>
                                <option value="video">📹 Video Call</option>
                                <option value="in-person">🏥 In Person</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Notes (optional)</label>
                            <textarea className="form-control" rows={3} placeholder="Brief description of your concern..."
                                value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" disabled={booking || !form.date || !form.startTime}
                            style={{ width: '100%', justifyContent: 'center' }}>
                            {booking ? 'Booking...' : user ? 'Book Appointment' : 'Login to Book'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}