import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const defaultForm = { title: '', excerpt: '', content: '', tags: '', category: '', coverImage: '', status: 'draft' };

export default function PsychologistBlog() {
    const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(defaultForm);
    const [saving, setSaving] = useState(false);

    const fetchMyBlogs = async () => {
        setLoading(true);
        try {
            const { data } = await getBlogs({ limit: 100 });
            const mine = data.blogs?.filter(b => b.author?._id === user?._id || b.author === user?._id) || [];
            setBlogs(mine);
        } finally { setLoading(false); }
    };

    useEffect(() => { fetchMyBlogs(); }, []);

    const openCreate = () => { setEditing(null); setForm(defaultForm); setModal(true); };
    const openEdit = (b) => { setEditing(b._id); setForm({ ...b, tags: b.tags?.join(', ') || '' }); setModal(true); };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) };
            if (editing) {
                const { data } = await updateBlog(editing, payload);
                setBlogs(prev => prev.map(b => b._id === editing ? data.blog : b));
                toast.success('Post updated');
            } else {
                const { data } = await createBlog(payload);
                setBlogs(prev => [data.blog, ...prev]);
                toast.success('Post created');
            }
            setModal(false);
        } catch (err) { toast.error(err.response?.data?.message || 'Save failed'); }
        finally { setSaving(false); }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this post?')) return;
        try {
            await deleteBlog(id);
            setBlogs(prev => prev.filter(b => b._id !== id));
            toast.success('Post deleted');
        } catch { toast.error('Delete failed'); }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>My Blog</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Share your expertise with patients</p>
                    </div>
                    <button className="btn btn-primary" onClick={openCreate}><FiPlus /> New Post</button>
                </div>
                <div className="page-content">
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                    ) : blogs.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">✍️</div>
                            <p>No blog posts yet</p>
                            <button className="btn btn-primary btn-sm" style={{ marginTop: 12 }} onClick={openCreate}>Write Your First Post</button>
                        </div>
                    ) : (
                        <div className="card">
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Title</th><th>Tags</th><th>Status</th><th>Views</th><th>Date</th><th>Actions</th></tr>
                                    </thead>
                                    <tbody>
                                        {blogs.map(b => (
                                            <tr key={b._id}>
                                                <td style={{ maxWidth: 260 }}>
                                                    <div style={{ fontWeight: 600, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</div>
                                                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{b.excerpt?.substring(0, 60)}...</div>
                                                </td>
                                                <td>
                                                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                                                        {b.tags?.slice(0, 2).map(t => <span key={t} className="badge badge-info">{t}</span>)}
                                                    </div>
                                                </td>
                                                <td><span className={`badge ${b.status === 'published' ? 'badge-success' : 'badge-warning'}`}>{b.status}</span></td>
                                                <td style={{ color: 'var(--text-secondary)' }}>{b.views}</td>
                                                <td style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{new Date(b.createdAt).toLocaleDateString()}</td>
                                                <td>
                                                    <div style={{ display: 'flex', gap: 6 }}>
                                                        <button className="btn btn-secondary btn-sm" onClick={() => openEdit(b)}><FiEdit2 size={13} /></button>
                                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(b._id)}><FiTrash2 size={13} /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {modal && (
                <div className="modal-overlay" onClick={() => setModal(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 680 }}>
                        <div className="modal-header">
                            <h2 className="modal-title">{editing ? 'Edit Post' : 'New Blog Post'}</h2>
                            <button className="modal-close" onClick={() => setModal(false)}>✕</button>
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Title *</label>
                                    <input className="form-control" required value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Article title..." />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Excerpt</label>
                                    <textarea className="form-control" rows={2} value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))} placeholder="Brief summary..." />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Content *</label>
                                    <textarea className="form-control" rows={10} required value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} placeholder="Write your full article here..." />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Tags (comma separated)</label>
                                    <input className="form-control" value={form.tags} onChange={e => setForm(p => ({ ...p, tags: e.target.value }))} placeholder="Anxiety, Depression" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Category</label>
                                    <input className="form-control" value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} placeholder="e.g. Therapy Tips" />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Cover Image URL</label>
                                    <input className="form-control" type="url" value={form.coverImage} onChange={e => setForm(p => ({ ...p, coverImage: e.target.value }))} placeholder="https://..." />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Status</label>
                                    <select className="form-control" value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                                <button type="button" className="btn btn-outline" onClick={() => setModal(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? 'Saving...' : editing ? 'Update Post' : 'Publish Post'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}