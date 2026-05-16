import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getAllUsers, updateUser, deleteUser } from '../../utils/api';
import { FiSearch, FiTrash2, FiUserCheck, FiUserX } from 'react-icons/fi';
import toast from 'react-hot-toast';

const ROLES = ['all', 'superadmin', 'psychologist', 'patient'];

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [role, setRole] = useState('all');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const LIMIT = 20;

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const params = { page, limit: LIMIT };
            if (search) params.search = search;
            if (role !== 'all') params.role = role;
            const { data } = await getAllUsers(params);
            setUsers(data.users);
            setTotal(data.total);
        } catch { toast.error('Failed to load users'); }
        finally { setLoading(false); }
    };

    useEffect(() => { fetchUsers(); }, [page, role]);

    const toggleActive = async (user) => {
        try {
            await updateUser(user._id, { isActive: !user.isActive });
            setUsers(prev => prev.map(u => u._id === user._id ? { ...u, isActive: !u.isActive } : u));
            toast.success(user.isActive ? 'User deactivated' : 'User activated');
        } catch { toast.error('Action failed'); }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this user?')) return;
        try {
            await deleteUser(id);
            setUsers(prev => prev.filter(u => u._id !== id));
            toast.success('User deleted');
        } catch { toast.error('Delete failed'); }
    };

    const totalPages = Math.ceil(total / LIMIT);

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>User Management</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{total} total users</p>
                    </div>
                </div>
                <div className="page-content">
                    <div className="card">
                        <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                            <form onSubmit={e => { e.preventDefault(); fetchUsers(); }} style={{ flex: 1, minWidth: 200 }}>
                                <div className="search-bar">
                                    <FiSearch className="search-icon" size={16} />
                                    <input className="form-control" placeholder="Search by name or email..."
                                        value={search} onChange={e => setSearch(e.target.value)} />
                                </div>
                            </form>
                            <div style={{ display: 'flex', gap: 8 }}>
                                {ROLES.map(r => (
                                    <button key={r} onClick={() => { setRole(r); setPage(1); }}
                                        className={`btn btn-sm ${role === r ? 'btn-primary' : 'btn-outline'}`}>
                                        {r.charAt(0).toUpperCase() + r.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr><th>User</th><th>Role</th><th>Status</th><th>Joined</th><th>Actions</th></tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan={5} style={{ textAlign: 'center', padding: 40 }}><div className="spinner" style={{ margin: '0 auto' }} /></td></tr>
                                    ) : users.map(user => (
                                        <tr key={user._id}>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                    <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{user.name?.charAt(0)?.toUpperCase()}</div>
                                                    <div>
                                                        <div style={{ fontWeight: 600 }}>{user.name}</div>
                                                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className={`badge ${user.role === 'superadmin' ? 'badge-danger' : user.role === 'psychologist' ? 'badge-purple' : 'badge-info'}`}>{user.role}</span></td>
                                            <td><span className={`badge ${user.isActive ? 'badge-success' : 'badge-gray'}`}>{user.isActive ? 'Active' : 'Inactive'}</span></td>
                                            <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{new Date(user.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <div style={{ display: 'flex', gap: 8 }}>
                                                    <button onClick={() => toggleActive(user)} className={`btn btn-sm ${user.isActive ? 'btn-danger' : 'btn-success'}`}>
                                                        {user.isActive ? <FiUserX size={14} /> : <FiUserCheck size={14} />}
                                                    </button>
                                                    <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger"><FiTrash2 size={14} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {totalPages > 1 && (
                            <div className="pagination">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                    <button key={p} className={`page-btn ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}