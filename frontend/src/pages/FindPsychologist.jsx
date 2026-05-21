// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { getPsychologists } from '../utils/api';
// import { FiSearch, FiStar, FiDollarSign } from 'react-icons/fi';

// const SPECIALIZATIONS = ['Anxiety', 'Depression', 'Trauma', 'Relationships', 'OCD', 'ADHD', 'Grief', 'Stress'];

// export default function FindPsychologist() {
//     const [psychologists, setPsychologists] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [spec, setSpec] = useState('');

//     const fetchData = async () => {
//         setLoading(true);
//         try {
//             const { data } = await getPsychologists({ search, specialization: spec });
//             setPsychologists(data.psychologists || []);
//         } catch (e) { console.error(e); }
//         finally { setLoading(false); }
//     };

//     useEffect(() => { fetchData(); }, [spec]);

//     return (
//         <div>
//             <nav style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
//                 <Link to="/" style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: 'var(--primary)', textDecoration: 'none' }}>LifeInnovior</Link>
//                 <div style={{ display: 'flex', gap: 10 }}>
//                     <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
//                     <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
//                 </div>
//             </nav>

//             <div style={{ background: 'var(--primary-light)', padding: '40px 24px' }}>
//                 <div className="container">
//                     <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: 'var(--primary-dark)' }}>Find a Psychologist</h1>
//                     <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>Browse our verified mental health professionals</p>
//                     <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
//                         <div className="search-bar" style={{ flex: 1, minWidth: 240 }}>
//                             <FiSearch className="search-icon" size={16} />
//                             <input className="form-control" placeholder="Search by name..." value={search}
//                                 onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' && fetchData()} />
//                         </div>
//                         <button className="btn btn-primary" onClick={fetchData}>Search</button>
//                     </div>
//                     <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
//                         <button onClick={() => setSpec('')} className={`btn btn-sm ${spec === '' ? 'btn-primary' : 'btn-outline'}`}>All</button>
//                         {SPECIALIZATIONS.map(s => (
//                             <button key={s} onClick={() => setSpec(s)} className={`btn btn-sm ${spec === s ? 'btn-primary' : 'btn-outline'}`}>{s}</button>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="container" style={{ padding: '40px 24px' }}>
//                 {loading ? (
//                     <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
//                 ) : psychologists.length === 0 ? (
//                     <div className="empty-state"><div className="empty-icon">🔍</div><p>No psychologists found</p></div>
//                 ) : (
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
//                         {psychologists.map(p => (
//                             <div key={p._id} className="card">
//                                 <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
//                                     <div className="user-avatar" style={{ width: 56, height: 56, fontSize: 22, background: '#EEF2FF', color: '#4F46E5', flexShrink: 0 }}>
//                                         {p.avatar ? <img src={p.avatar} alt={p.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : p.name?.charAt(0)?.toUpperCase()}
//                                     </div>
//                                     <div>
//                                         <h3 style={{ fontSize: 16, fontWeight: 600 }}>Dr. {p.name}</h3>
//                                         <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#F59E0B' }}>
//                                             <FiStar size={13} fill="#F59E0B" /> {p.psychologistProfile?.rating?.toFixed(1) || '5.0'}
//                                             <span style={{ color: 'var(--text-muted)', marginLeft: 4 }}>({p.psychologistProfile?.totalReviews || 0} reviews)</span>
//                                         </div>
//                                         <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{p.psychologistProfile?.experience} years exp.</div>
//                                     </div>
//                                 </div>
//                                 <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 12, lineHeight: 1.6 }}>
//                                     {p.psychologistProfile?.bio?.substring(0, 100) || 'Experienced mental health professional.'}...
//                                 </p>
//                                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
//                                     {p.psychologistProfile?.specializations?.slice(0, 3).map(s => (
//                                         <span key={s} className="badge badge-purple">{s}</span>
//                                     ))}
//                                 </div>
//                                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                                     <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700, color: '#10B981' }}>
//                                         <FiDollarSign size={15} />{p.psychologistProfile?.sessionFee || 0}
//                                         <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: 12 }}>/session</span>
//                                     </div>
//                                     <Link to={`/psychologist/${p._id}`} className="btn btn-primary btn-sm">Book Session</Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPsychologists } from '../utils/api';
import { FiSearch, FiStar, FiDollarSign } from 'react-icons/fi';

const SPECIALIZATIONS = ['Anxiety', 'Depression', 'Trauma', 'Relationships', 'OCD', 'ADHD', 'Grief', 'Stress'];

const BADGE_COLORS = {
    Anxiety: { bg: '#EEEDFE', color: '#534AB7', border: '#AFA9EC' },
    Depression: { bg: '#E1F5EE', color: '#0F6E56', border: '#5DCAA5' },
    Trauma: { bg: '#FAECE7', color: '#993C1D', border: '#F0997B' },
    Relationships: { bg: '#FAECE7', color: '#993C1D', border: '#F0997B' },
    OCD: { bg: '#EEEDFE', color: '#534AB7', border: '#AFA9EC' },
    ADHD: { bg: '#E6F1FB', color: '#185FA5', border: '#85B7EB' },
    Grief: { bg: '#FBEAF0', color: '#993556', border: '#ED93B1' },
    Stress: { bg: '#EEEDFE', color: '#534AB7', border: '#AFA9EC' },
};

const CARD_ACCENTS = ['#E1F5EE', '#EEEDFE', '#FAECE7', '#E6F1FB', '#FBEAF0', '#EAF3DE', '#FAEEDA'];
const AVATAR_GRADIENTS = [
    { from: '#E1F5EE', to: '#9FE1CB', color: '#0F6E56' },
    { from: '#EEEDFE', to: '#CECBF6', color: '#3C3489' },
    { from: '#FAECE7', to: '#F5C4B3', color: '#712B13' },
    { from: '#E6F1FB', to: '#B5D4F4', color: '#0C447C' },
    { from: '#FBEAF0', to: '#F4C0D1', color: '#72243E' },
    { from: '#EAF3DE', to: '#C0DD97', color: '#27500A' },
];

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
        <div style={{ fontFamily: "'DM Sans', 'Sora', sans-serif", background: '#FAFAF8', color: '#1a1a1a', minHeight: '100vh' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@700;800&display=swap');
                * { box-sizing: border-box; }
                .spec-btn {
                    padding: 7px 15px; border-radius: 999px; font-size: 13px; font-weight: 500;
                    border: 1px solid #e9e9e5; background: rgba(255,255,255,0.12);
                    color: rgba(255,255,255,0.75); cursor: pointer;
                    transition: all 0.18s; font-family: 'DM Sans', sans-serif;
                    backdrop-filter: blur(8px);
                }
                .spec-btn:hover { border-color: rgba(255,255,255,0.4); color: #fff; background: rgba(255,255,255,0.18); }
                .spec-btn.active { background: #fff; color: #534AB7; border-color: #fff; font-weight: 600; }
                .psy-card {
                    background: #fff; border-radius: 20px; border: 1px solid #e9e9e5;
                    padding: 24px; transition: transform 0.22s, box-shadow 0.22s;
                    position: relative; overflow: hidden;
                }
                .psy-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(0,0,0,0.09); }
                .badge-tag {
                    display: inline-block; padding: 3px 10px; border-radius: 999px;
                    font-size: 11.5px; font-weight: 600;
                }
                .search-input {
                    width: 100%; padding: 13px 16px 13px 44px; border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.2); font-size: 14.5px;
                    font-family: 'DM Sans', sans-serif; outline: none;
                    background: rgba(255,255,255,0.12); color: #fff;
                    backdrop-filter: blur(8px); transition: border 0.2s, box-shadow 0.2s;
                }
                .search-input::placeholder { color: rgba(255,255,255,0.5); }
                .search-input:focus { border-color: rgba(255,255,255,0.5); box-shadow: 0 0 0 3px rgba(255,255,255,0.1); }
                .search-btn {
                    padding: 13px 24px; border-radius: 12px; background: #fff;
                    color: #534AB7; border: none; font-size: 14px; font-weight: 700;
                    cursor: pointer; font-family: 'DM Sans', sans-serif;
                    transition: transform 0.18s, box-shadow 0.18s;
                }
                .search-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(0,0,0,0.18); }
                .book-btn {
                    padding: 8px 20px; border-radius: 999px; background: #534AB7;
                    color: #fff; border: none; font-size: 13px; font-weight: 600;
                    cursor: pointer; font-family: 'DM Sans', sans-serif;
                    transition: transform 0.18s, box-shadow 0.18s; text-decoration: none;
                    display: inline-block;
                }
                .book-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(83,74,183,0.35); }
                .blob { position: absolute; border-radius: 50%; filter: blur(65px); pointer-events: none; }
                @keyframes spin { to { transform: rotate(360deg); } }
                .spinner { width: 36px; height: 36px; border: 3px solid #EEEDFE; border-top-color: #534AB7; border-radius: 50%; animation: spin 0.7s linear infinite; margin: 60px auto; }
                @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
                .fade-up { animation: fadeUp 0.55s ease forwards; opacity: 0; }
            `}</style>

            {/* NAV */}
            <nav style={{
                background: 'rgba(250,250,248,0.92)', backdropFilter: 'blur(14px)',
                borderBottom: '1px solid #e9e9e5', padding: '0 28px', height: 60,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                position: 'sticky', top: 0, zIndex: 100,
            }}>
                <Link to="/" style={{
                    fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 19,
                    background: 'linear-gradient(135deg,#534AB7,#1D9E75)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text', letterSpacing: '-0.5px', textDecoration: 'none',
                }}>LifeInnovior</Link>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Link to="/login" style={{ fontSize: 13.5, fontWeight: 500, padding: '7px 16px', borderRadius: 8, border: '1px solid #e9e9e5', background: '#fff', color: '#444', textDecoration: 'none' }}>Login</Link>
                    <Link to="/register" style={{ fontSize: 13.5, fontWeight: 600, padding: '8px 18px', borderRadius: 8, background: '#534AB7', color: '#fff', textDecoration: 'none' }}>Sign Up</Link>
                </div>
            </nav>

            {/* HERO SEARCH */}
            <div style={{
                background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 50%,#0f5e48 100%)',
                padding: '52px 28px 44px', position: 'relative', overflow: 'hidden',
            }}>
                <div className="blob" style={{ width: 360, height: 360, background: '#534AB7', top: -110, right: -60, opacity: 0.28 }} />
                <div className="blob" style={{ width: 250, height: 250, background: '#1D9E75', bottom: -70, left: 30, opacity: 0.2 }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

                <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div className="fade-up" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)',
                        borderRadius: 999, padding: '5px 14px', marginBottom: 18,
                        fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)',
                    }}>
                        <span style={{ width: 6, height: 6, background: '#5DCAA5', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #5DCAA5' }} />
                        800+ Verified Psychologists
                    </div>
                    <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(28px,4vw,50px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#fff', marginBottom: 10 }}>
                        Find a Psychologist
                    </h1>
                    <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.62)', marginBottom: 24 }}>
                        Browse our verified mental health professionals
                    </p>

                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
                        <div style={{ flex: 1, minWidth: 220, position: 'relative' }}>
                            <FiSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.5)', width: 17, height: 17 }} />
                            <input
                                className="search-input"
                                placeholder="Search by name or specialty..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && fetchData()}
                            />
                        </div>
                        <button className="search-btn" onClick={fetchData}>Search</button>
                    </div>

                    <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                        <button className={`spec-btn${spec === '' ? ' active' : ''}`} onClick={() => setSpec('')}>All</button>
                        {SPECIALIZATIONS.map(s => (
                            <button key={s} className={`spec-btn${spec === s ? ' active' : ''}`} onClick={() => setSpec(s)}>{s}</button>
                        ))}
                    </div>
                </div>
            </div>

            {/* RESULTS */}
            <div style={{ padding: '14px 28px 0', maxWidth: 1116, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 13.5, color: '#6b7280', fontWeight: 500 }}>
                    Showing <strong style={{ color: '#1a1a1a' }}>{psychologists.length} psychologists</strong> available
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#6b7280' }}>
                    Sort by:
                    <select style={{ fontSize: 13, border: '1px solid #e9e9e5', borderRadius: 8, padding: '5px 10px', background: '#fff', fontFamily: 'DM Sans, sans-serif', color: '#1a1a1a', cursor: 'pointer', outline: 'none' }}>
                        <option>Highest Rated</option>
                        <option>Lowest Fee</option>
                        <option>Most Reviewed</option>
                    </select>
                </div>
            </div>

            {/* CARDS */}
            <div style={{ padding: '18px 28px 64px', maxWidth: 1116, margin: '0 auto' }}>
                {loading ? (
                    <div className="spinner" />
                ) : psychologists.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
                        <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                        <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>No psychologists found</p>
                        <p style={{ color: '#6b7280', fontSize: 14 }}>Try adjusting your filters or search term.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 18 }}>
                        {psychologists.map((p, i) => {
                            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
                            const av = AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];
                            const initials = p.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || '?';
                            const isAvailable = i % 3 !== 2;

                            return (
                                <div key={p._id} className="psy-card fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                                    {/* Corner accent */}
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: 88, height: 88, background: accent, borderRadius: '0 20px 0 100%', opacity: 0.7 }} />

                                    <div style={{ display: 'flex', gap: 13, marginBottom: 16, alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 20,
                                            background: `linear-gradient(135deg, ${av.from}, ${av.to})`,
                                            color: av.color,
                                        }}>
                                            {p.avatar
                                                ? <img src={p.avatar} alt={p.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                                : initials}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                                                <h3 style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Sora, sans-serif' }}>Dr. {p.name}</h3>
                                                <span style={{
                                                    fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 999,
                                                    background: isAvailable ? '#E1F5EE' : '#FAEEDA',
                                                    color: isAvailable ? '#0F6E56' : '#854F0B',
                                                    border: `1px solid ${isAvailable ? '#5DCAA5' : '#EF9F27'}`,
                                                }}>
                                                    {isAvailable ? 'Available' : 'Busy today'}
                                                </span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#F59E0B', marginBottom: 3 }}>
                                                <FiStar size={13} fill="#F59E0B" />
                                                <strong style={{ color: '#1a1a1a' }}>{p.psychologistProfile?.rating?.toFixed(1) || '5.0'}</strong>
                                                <span style={{ color: '#9ca3af', marginLeft: 2 }}>({p.psychologistProfile?.totalReviews || 0} reviews)</span>
                                            </div>
                                            <div style={{ fontSize: 12.5, color: '#6b7280' }}>{p.psychologistProfile?.experience || 0} years experience</div>
                                        </div>
                                    </div>

                                    <p style={{ fontSize: 13.5, color: '#6b7280', marginBottom: 14, lineHeight: 1.7 }}>
                                        {p.psychologistProfile?.bio?.substring(0, 100) || 'Experienced mental health professional.'}...
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                                        {p.psychologistProfile?.specializations?.slice(0, 3).map(s => {
                                            const c = BADGE_COLORS[s] || BADGE_COLORS['Stress'];
                                            return (
                                                <span key={s} className="badge-tag" style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}` }}>{s}</span>
                                            );
                                        })}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f0f0ec', paddingTop: 14 }}>
                                        <div style={{ fontSize: 15, fontWeight: 700, color: '#1D9E75', display: 'flex', alignItems: 'center', gap: 3 }}>
                                            <FiDollarSign size={15} />
                                            {p.psychologistProfile?.sessionFee || 0}
                                            <span style={{ fontSize: 12, fontWeight: 400, color: '#9ca3af' }}>/session</span>
                                        </div>
                                        <Link to={`/psychologist/${p._id}`} className="book-btn">Book Session</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}