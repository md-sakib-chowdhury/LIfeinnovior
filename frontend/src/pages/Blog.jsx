import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from '../utils/api';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { getBlogs().then(r => setBlogs(r.data.blogs || [])).finally(() => setLoading(false)); }, []);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
            <nav style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: 'var(--primary)', textDecoration: 'none' }}>LifeInnovior</Link>
                <div style={{ display: 'flex', gap: 10 }}>
                    <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                    <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
                </div>
            </nav>
            <div className="container" style={{ padding: '48px 24px' }}>
                <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Mental Health Blog</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 36 }}>Insights and articles from licensed psychologists</p>
                {loading ? (
                    <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                        {blogs.map(b => (
                            <Link key={b._id} to={`/blog/${b.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="card" style={{ cursor: 'pointer', height: '100%', transition: 'transform 0.15s' }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'none'}>
                                    {b.coverImage && <img src={b.coverImage} alt={b.title} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8, marginBottom: 14 }} />}
                                    <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                                        {b.tags?.slice(0, 2).map(t => <span key={t} className="badge badge-info">{t}</span>)}
                                    </div>
                                    <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{b.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.7 }}>{b.excerpt?.substring(0, 120)}...</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
                                        <div className="user-avatar" style={{ width: 28, height: 28, fontSize: 12, background: '#EEF2FF', color: '#4F46E5' }}>{b.author?.name?.charAt(0)}</div>
                                        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Dr. {b.author?.name} · {new Date(b.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {blogs.length === 0 && <div className="empty-state" style={{ gridColumn: '1/-1' }}><div className="empty-icon">✍️</div><p>No articles yet</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}