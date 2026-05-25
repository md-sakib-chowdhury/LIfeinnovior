import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import API from '../../utils/api';
import toast from 'react-hot-toast';
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiEyeOff } from 'react-icons/fi';

const defaultForm = { title: '', excerpt: '', content: '', tags: '', category: '', coverImage: '', status: 'draft' };

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(defaultForm);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        API.get('/admin/blogs').then(r => setBlogs(r.data.blogs || [])).finally(() => setLoading(false));
    }, []);

    const openCreate = () => { setEditing(null); setForm(defaultForm); setModal(true); };
    const openEdit = (b) => { setEditing(b._id); setForm({ ...b, tags: b.tags?.join(', ') || '' }); setModal(true); };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) };
            if (editing) {
                const { data } = await API.put(`/blog/${editing}`, payload);
                setBlogs(prev => prev.map(b => b._id === editing ? data.blog : b));
                toast.success('Blog updated!');
            } else {
                const { data } = await API.post('/blog', payload);
                setBlogs(prev => [data.blog, ...prev]);
                toast.success('Blog created!');
            }
            setModal(false);
        } catch (err) { toast.error(err.response?.data?.message || 'Save failed'); }
        finally { setSaving(false); }
    };

    const toggle = async (id, currentStatus) => {
        try {
            const { data } = await API.put(`/admin/blogs/${id}/toggle`);
            setBlogs(prev => prev.map(b => b._id === id ? data.blog : b));
            toast.success('Status updated!');
        } catch { toast.error('Action failed'); }
    };

    const del = async (id) => {
        if (!window.confirm('Delete this blog post?')) return;
        try {
            await API.delete(`/blog/${id}`);
            setBlogs(prev => prev.filter(b => b._id !== id));
            toast.success('Blog deleted!');
        } catch { toast.error('Delete failed'); }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFF' }}>
            <Sidebar />
            <div style={{ marginLeft: 260, flex: 1 }}>
                {/* Header */}
                <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Blog Management</h1>
                        <p style={{ fontSize: 13, color: '#6B7280' }}>{blogs.length} total posts</p>
                    </div>
                    <button onClick={openCreate} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 14, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                        <FiPlus size={16} /> New Blog Post
                    </button>
                </div>

                <div style={{ padding: 28 }}>
                    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#F9FAFB' }}>
                                    {['Title', 'Author', 'Status', 'Views', 'Date', 'Actions'].map(h => (
                                        <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan={6} style={{ textAlign: 'center', padding: 60 }}>
                                        <div style={{ width: 36, height: 36, border: '3px solid #E5E7EB', borderTopColor: '#4F46E5', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto' }} />
                                    </td></tr>
                                ) : blogs.length === 0 ? (
                                    <tr><td colSpan={6}>
                                        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                                            <div style={{ fontSize: 48, marginBottom: 12 }}>✍️</div>
                                            <p style={{ color: '#6B7280', marginBottom: 16 }}>No blog posts yet</p>
                                            <button onClick={openCreate} style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 600 }}>
                                                Write First Post
                                            </button>
                                        </div>
                                    </td></tr>
                                ) : blogs.map(b => (
                                    <tr key={b._id} style={{ borderBottom: '1px solid #F3F4F6' }}
                                        onMouseOver={e => e.currentTarget.style.background = '#F9FAFB'}
                                        onMouseOut={e => e.currentTarget.style.background = '#fff'}>
                                        <td style={{ padding: '16px 20px', maxWidth: 280 }}>
                                            <div style={{ fontWeight: 600, fontSize: 14, color: '#111827', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</div>
                                            <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>{b.tags?.slice(0, 2).join(', ')}</div>
                                        </td>
                                        <td style={{ padding: '16px 20px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>
                                                    {b.author?.name?.charAt(0)}
                                                </div>
                                                <span style={{ fontSize: 13, color: '#374151' }}>Dr. {b.author?.name}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '16px 20px' }}>
                                            <span style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, background: b.status === 'published' ? '#ECFDF5' : '#FFFBEB', color: b.status === 'published' ? '#059669' : '#D97706' }}>
                                                {b.status === 'published' ? '🟢 Published' : '🟡 Draft'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px 20px', color: '#6B7280', fontSize: 14 }}>{b.views}</td>
                                        <td style={{ padding: '16px 20px', color: '#9CA3AF', fontSize: 13 }}>{new Date(b.createdAt).toLocaleDateString()}</td>
                                        <td style={{ padding: '16px 20px' }}>
                                            <div style={{ display: 'flex', gap: 6 }}>
                                                <button onClick={() => openEdit(b)} style={{ padding: '6px 12px', background: '#EEF2FF', color: '#4F46E5', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500 }}>
                                                    <FiEdit2 size={13} /> Edit
                                                </button>
                                                <button onClick={() => toggle(b._id, b.status)} style={{ padding: '6px 12px', background: b.status === 'published' ? '#FFFBEB' : '#ECFDF5', color: b.status === 'published' ? '#D97706' : '#059669', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500 }}>
                                                    {b.status === 'published' ? <><FiEyeOff size={13} /> Unpublish</> : <><FiEye size={13} /> Publish</>}
                                                </button>
                                                <button onClick={() => del(b._id)} style={{ padding: '6px 12px', background: '#FEF2F2', color: '#EF4444', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500 }}>
                                                    <FiTrash2 size={13} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20 }} onClick={() => setModal(false)}>
                    <div style={{ background: '#fff', borderRadius: 20, padding: 32, width: '100%', maxWidth: 680, maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                            <h2 style={{ fontSize: 20, fontWeight: 700 }}>{editing ? '✏️ Edit Post' : '✍️ New Blog Post'}</h2>
                            <button onClick={() => setModal(false)} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#9CA3AF' }}>✕</button>
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div style={{ gridColumn: '1/-1' }}>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Title *</label>
                                    <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                        required value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Blog post title..." />
                                </div>
                                <div style={{ gridColumn: '1/-1' }}>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Excerpt</label>
                                    <textarea style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', resize: 'vertical', minHeight: 70 }}
                                        value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))} placeholder="Short summary..." />
                                </div>
                                <div style={{ gridColumn: '1/-1' }}>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Content *</label>
                                    <textarea style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', resize: 'vertical', minHeight: 200 }}
                                        required value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} placeholder="Write your article here..." />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Tags (comma separated)</label>
                                    <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                        value={form.tags} onChange={e => setForm(p => ({ ...p, tags: e.target.value }))} placeholder="Anxiety, Depression" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Category</label>
                                    <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                        value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} placeholder="e.g. Therapy Tips" />
                                </div>
                                <div style={{ gridColumn: '1/-1' }}>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Cover Image URL</label>
                                    <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                        type="url" value={form.coverImage} onChange={e => setForm(p => ({ ...p, coverImage: e.target.value }))} placeholder="https://..." />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Status</label>
                                    <select style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', cursor: 'pointer' }}
                                        value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                                        <option value="draft">🟡 Draft</option>
                                        <option value="published">🟢 Published</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 24 }}>
                                <button type="button" onClick={() => setModal(false)} style={{ padding: '10px 20px', border: '1px solid #E5E7EB', borderRadius: 10, background: '#fff', cursor: 'pointer', fontWeight: 500, fontSize: 14 }}>Cancel</button>
                                <button type="submit" disabled={saving} style={{ padding: '10px 24px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 14, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                                    {saving ? 'Saving...' : editing ? 'Update Post' : 'Create Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}