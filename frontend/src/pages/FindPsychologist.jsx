import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPsychologists } from '../utils/api';
import { FiSearch, FiStar, FiDollarSign } from 'react-icons/fi';

const SPECIALIZATIONS = ['Anxiety', 'Depression', 'Trauma', 'Relationships', 'OCD', 'ADHD', 'Grief', 'Stress'];

export default function FindPsychologist() {
    const [psychologists, setPsychologists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [spec, setSpec] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data } = await getPsychologists({ search, specialization: spec });
            setPsychologists(data.psychologists || []);
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };

    useEffect(() => { fetchData(); }, [spec]);

    return (
        <div>
            <nav style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
                <Link to="/" style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: 'var(--primary)', textDecoration: 'none' }}>LifeInnovior</Link>
                <div style={{ display: 'flex', gap: 10 }}>
                    <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                    <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
                </div>
            </nav>

            <div style={{ background: 'var(--primary-light)', padding: '40px 24px' }}>
                <div className="container">
                    <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: 'var(--primary-dark)' }}>Find a Psychologist</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>Browse our verified mental health professionals</p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <div className="search-bar" style={{ flex: 1, minWidth: 240 }}>
                            <FiSearch className="search-icon" size={16} />
                            <input className="form-control" placeholder="Search by name..." value={search}
                                onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' && fetchData()} />
                        </div>
                        <button className="btn btn-primary" onClick={fetchData}>Search</button>
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                        <button onClick={() => setSpec('')} className={`btn btn-sm ${spec === '' ? 'btn-primary' : 'btn-outline'}`}>All</button>
                        {SPECIALIZATIONS.map(s => (
                            <button key={s} onClick={() => setSpec(s)} className={`btn btn-sm ${spec === s ? 'btn-primary' : 'btn-outline'}`}>{s}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '40px 24px' }}>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                ) : psychologists.length === 0 ? (
                    <div className="empty-state"><div className="empty-icon">🔍</div><p>No psychologists found</p></div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                        {psychologists.map(p => (
                            <div key={p._id} className="card">
                                <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
                                    <div className="user-avatar" style={{ width: 56, height: 56, fontSize: 22, background: '#EEF2FF', color: '#4F46E5', flexShrink: 0 }}>
                                        {p.avatar ? <img src={p.avatar} alt={p.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : p.name?.charAt(0)?.toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: 16, fontWeight: 600 }}>Dr. {p.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#F59E0B' }}>
                                            <FiStar size={13} fill="#F59E0B" /> {p.psychologistProfile?.rating?.toFixed(1) || '5.0'}
                                            <span style={{ color: 'var(--text-muted)', marginLeft: 4 }}>({p.psychologistProfile?.totalReviews || 0} reviews)</span>
                                        </div>
                                        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{p.psychologistProfile?.experience} years exp.</div>
                                    </div>
                                </div>
                                <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12, lineHeight: 1.6 }}>
                                    {p.psychologistProfile?.bio?.substring(0, 100) || 'Experienced mental health professional.'}...
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                                    {p.psychologistProfile?.specializations?.slice(0, 3).map(s => (
                                        <span key={s} className="badge badge-purple">{s}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700, color: '#10B981' }}>
                                        <FiDollarSign size={15} />{p.psychologistProfile?.sessionFee || 0}
                                        <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: 12 }}>/session</span>
                                    </div>
                                    <Link to={`/psychologist/${p._id}`} className="btn btn-primary btn-sm">Book Session</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}