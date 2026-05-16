import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import API from '../../utils/api';
import toast from 'react-hot-toast';

export default function AdminBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        API.get('/admin/blogs').then(r => setBlogs(r.data.blogs || [])).finally(() => setLoading(false));
    }, []);

    const toggle = async (id) => {
        try {
            const { data } = await API.put(`/admin/blogs/${id}/toggle`);
            setBlogs(prev => prev.map(b => b._id === id ? data.blog : b));
            toast.success('Blog status updated');
        } catch { toast.error('Action failed'); }
    };

    const del = async (id) => {
        if (!window.confirm('Delete this blog post?')) return;
        try {
            await API.delete(`/blog/${id}`);
            setBlogs(prev => prev.filter(b => b._id !== id));
            toast.success('Blog deleted');
        } catch { toast.error('Delete failed'); }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <h1 style={{ fontSize: 20, fontWeight: 700 }}>Blog Management</h1>
                </div>
                <div className="page-content">
                    <div className="card">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr><th>Title</th><th>Author</th><th>Status</th><th>Views</th><th>Date</th><th>Actions</th></tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan={6} style={{ textAlign: 'center', padding: 40 }}><div className="spinner" style={{ margin: '0 auto' }} /></td></tr>
                                    ) : blogs.map(b => (
                                        <tr key={b._id}>
                                            <td style={{ maxWidth: 240 }}>
                                                <div style={{ fontWeight: 600, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</div>
                                                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{b.tags?.join(', ')}</div>
                                            </td>
                                            <td style={{ fontSize: 13 }}>Dr. {b.author?.name}</td>
                                            <td><span className={`badge ${b.status === 'published' ? 'badge-success' : 'badge-warning'}`}>{b.status}</span></td>
                                            <td style={{ color: 'var(--text-secondary)' }}>{b.views}</td>
                                            <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{new Date(b.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <div style={{ display: 'flex', gap: 6 }}>
                                                    <button className="btn btn-secondary btn-sm" onClick={() => toggle(b._id)}>{b.status === 'published' ? 'Unpublish' : 'Publish'}</button>
                                                    <button className="btn btn-danger btn-sm" onClick={() => del(b._id)}>Delete</button>
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