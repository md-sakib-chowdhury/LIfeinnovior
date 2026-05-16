import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlog } from '../utils/api';

export default function BlogPost() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => { getBlog(slug).then(r => setBlog(r.data.blog)).finally(() => setLoading(false)); }, [slug]);

    if (loading) return <div className="loading-screen"><div className="spinner" /></div>;
    if (!blog) return <div style={{ textAlign: 'center', padding: 60 }}>Article not found</div>;

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
            <nav style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: 'var(--primary)', textDecoration: 'none' }}>LifeInnovior</Link>
                <Link to="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14 }}>← Back to Blog</Link>
            </nav>
            <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px' }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                    {blog.tags?.map(t => <span key={t} className="badge badge-info">{t}</span>)}
                </div>
                <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>{blog.title}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--border)' }}>
                    <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{blog.author?.name?.charAt(0)}</div>
                    <div>
                        <div style={{ fontWeight: 600, fontSize: 14 }}>Dr. {blog.author?.name}</div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} · {blog.views} views
                        </div>
                    </div>
                </div>
                {blog.coverImage && <img src={blog.coverImage} alt={blog.title} style={{ width: '100%', borderRadius: 12, marginBottom: 32 }} />}
                <div style={{ fontSize: 16, lineHeight: 1.9, color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>{blog.content}</div>
            </div>
        </div>
    );
}