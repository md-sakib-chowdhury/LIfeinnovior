// import React, { useEffect, useState } from 'react';
// import Sidebar from '../../components/Common/Sidebar';
// import { getAllUsers, updateUser, deleteUser } from '../../utils/api';
// import { FiSearch, FiTrash2, FiUserCheck, FiUserX } from 'react-icons/fi';
// import toast from 'react-hot-toast';

// const ROLES = ['all', 'superadmin', 'psychologist', 'patient'];

// export default function AdminUsers() {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [search, setSearch] = useState('');
//     const [role, setRole] = useState('all');
//     const [page, setPage] = useState(1);
//     const [total, setTotal] = useState(0);
//     const LIMIT = 20;

//     const fetchUsers = async () => {
//         setLoading(true);
//         try {
//             const params = { page, limit: LIMIT };
//             if (search) params.search = search;
//             if (role !== 'all') params.role = role;
//             const { data } = await getAllUsers(params);
//             setUsers(data.users);
//             setTotal(data.total);
//         } catch { toast.error('Failed to load users'); }
//         finally { setLoading(false); }
//     };

//     useEffect(() => { fetchUsers(); }, [page, role]);

//     const toggleActive = async (user) => {
//         try {
//             await updateUser(user._id, { isActive: !user.isActive });
//             setUsers(prev => prev.map(u => u._id === user._id ? { ...u, isActive: !u.isActive } : u));
//             toast.success(user.isActive ? 'User deactivated' : 'User activated');
//         } catch { toast.error('Action failed'); }
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm('Are you sure you want to delete this user?')) return;
//         try {
//             await deleteUser(id);
//             setUsers(prev => prev.filter(u => u._id !== id));
//             toast.success('User deleted');
//         } catch { toast.error('Delete failed'); }
//     };

//     const totalPages = Math.ceil(total / LIMIT);

//     return (
//         <div className="dashboard-layout">
//             <Sidebar />
//             <div className="main-content">
//                 <div className="page-header">
//                     <div>
//                         <h1 style={{ fontSize: 20, fontWeight: 700 }}>User Management</h1>
//                         <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{total} total users</p>
//                     </div>
//                 </div>
//                 <div className="page-content">
//                     <div className="card">
//                         <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
//                             <form onSubmit={e => { e.preventDefault(); fetchUsers(); }} style={{ flex: 1, minWidth: 200 }}>
//                                 <div className="search-bar">
//                                     <FiSearch className="search-icon" size={16} />
//                                     <input className="form-control" placeholder="Search by name or email..."
//                                         value={search} onChange={e => setSearch(e.target.value)} />
//                                 </div>
//                             </form>
//                             <div style={{ display: 'flex', gap: 8 }}>
//                                 {ROLES.map(r => (
//                                     <button key={r} onClick={() => { setRole(r); setPage(1); }}
//                                         className={`btn btn-sm ${role === r ? 'btn-primary' : 'btn-outline'}`}>
//                                         {r.charAt(0).toUpperCase() + r.slice(1)}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="table-container">
//                             <table>
//                                 <thead>
//                                     <tr><th>User</th><th>Role</th><th>Status</th><th>Joined</th><th>Actions</th></tr>
//                                 </thead>
//                                 <tbody>
//                                     {loading ? (
//                                         <tr><td colSpan={5} style={{ textAlign: 'center', padding: 40 }}><div className="spinner" style={{ margin: '0 auto' }} /></td></tr>
//                                     ) : users.map(user => (
//                                         <tr key={user._id}>
//                                             <td>
//                                                 <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                                                     <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{user.name?.charAt(0)?.toUpperCase()}</div>
//                                                     <div>
//                                                         <div style={{ fontWeight: 600 }}>{user.name}</div>
//                                                         <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{user.email}</div>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td><span className={`badge ${user.role === 'superadmin' ? 'badge-danger' : user.role === 'psychologist' ? 'badge-purple' : 'badge-info'}`}>{user.role}</span></td>
//                                             <td><span className={`badge ${user.isActive ? 'badge-success' : 'badge-gray'}`}>{user.isActive ? 'Active' : 'Inactive'}</span></td>
//                                             <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{new Date(user.createdAt).toLocaleDateString()}</td>
//                                             <td>
//                                                 <div style={{ display: 'flex', gap: 8 }}>
//                                                     <button onClick={() => toggleActive(user)} className={`btn btn-sm ${user.isActive ? 'btn-danger' : 'btn-success'}`}>
//                                                         {user.isActive ? <FiUserX size={14} /> : <FiUserCheck size={14} />}
//                                                     </button>
//                                                     <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger"><FiTrash2 size={14} /></button>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>

//                         {totalPages > 1 && (
//                             <div className="pagination">
//                                 {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
//                                     <button key={p} className={`page-btn ${page === p ? 'active' : ''}`} onClick={() => setPage(p)}>{p}</button>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getAllUsers, updateUser, deleteUser } from '../../utils/api';
import API from '../../utils/api';
import { FiSearch, FiTrash2, FiUserCheck, FiUserX, FiPlus, FiEdit2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const ROLES = ['all', 'superadmin', 'psychologist', 'patient'];

const defaultForm = { name: '', email: '', password: '', role: 'patient', phone: '' };

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [role, setRole] = useState('all');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(defaultForm);
    const [saving, setSaving] = useState(false);
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

    const openCreate = () => { setEditing(null); setForm(defaultForm); setModal(true); };
    const openEdit = (user) => {
        setEditing(user._id);
        setForm({ name: user.name, email: user.email, password: '', role: user.role, phone: user.phone || '' });
        setModal(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (editing) {
                const payload = { name: form.name, role: form.role, phone: form.phone };
                await updateUser(editing, payload);
                toast.success('User updated!');
            } else {
                await API.post('/auth/register', form);
                toast.success('User created!');
            }
            setModal(false);
            fetchUsers();
        } catch (err) { toast.error(err.response?.data?.message || 'Save failed'); }
        finally { setSaving(false); }
    };

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

    const roleColors = {
        superadmin: { bg: '#FEF2F2', color: '#DC2626' },
        psychologist: { bg: '#F5F3FF', color: '#7C3AED' },
        patient: { bg: '#EFF6FF', color: '#2563EB' },
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFF' }}>
            <Sidebar />
            <div style={{ marginLeft: 260, flex: 1 }}>

                {/* Header */}
                <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>User Management</h1>
                        <p style={{ fontSize: 13, color: '#6B7280' }}>{total} total users</p>
                    </div>
                    <button onClick={openCreate} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 14, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                        <FiPlus size={16} /> Add User
                    </button>
                </div>

                <div style={{ padding: 28 }}>

                    {/* Filters */}
                    <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
                        <div style={{ position: 'relative', flex: 1, minWidth: 240 }}>
                            <FiSearch style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} size={16} />
                            <input
                                style={{ width: '100%', padding: '10px 14px 10px 38px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', background: '#fff' }}
                                placeholder="Search by name or email..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && fetchUsers()}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: 6 }}>
                            {ROLES.map(r => (
                                <button key={r} onClick={() => { setRole(r); setPage(1); }}
                                    style={{ padding: '8px 16px', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: 500, fontSize: 13, background: role === r ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : '#fff', color: role === r ? '#fff' : '#6B7280', border: role === r ? 'none' : '1px solid #E5E7EB', boxShadow: role === r ? '0 2px 8px rgba(79,70,229,0.3)' : 'none' }}>
                                    {r.charAt(0).toUpperCase() + r.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Table */}
                    <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#F9FAFB' }}>
                                    {['User', 'Role', 'Status', 'Phone', 'Joined', 'Actions'].map(h => (
                                        <th key={h} style={{ padding: '14px 20px', textAlign: 'left', fontSize: 12, fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid #E5E7EB' }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan={6} style={{ textAlign: 'center', padding: 60 }}>
                                        <div style={{ width: 36, height: 36, border: '3px solid #E5E7EB', borderTopColor: '#4F46E5', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto' }} />
                                    </td></tr>
                                ) : users.length === 0 ? (
                                    <tr><td colSpan={6}>
                                        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                                            <div style={{ fontSize: 48, marginBottom: 12 }}>👥</div>
                                            <p style={{ color: '#6B7280' }}>No users found</p>
                                        </div>
                                    </td></tr>
                                ) : users.map(user => {
                                    const rc = roleColors[user.role] || { bg: '#F3F4F6', color: '#6B7280' };
                                    return (
                                        <tr key={user._id} style={{ borderBottom: '1px solid #F3F4F6' }}
                                            onMouseOver={e => e.currentTarget.style.background = '#F9FAFB'}
                                            onMouseOut={e => e.currentTarget.style.background = '#fff'}>
                                            <td style={{ padding: '16px 20px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: 16, flexShrink: 0 }}>
                                                        {user.name?.charAt(0)?.toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div style={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{user.name}</div>
                                                        <div style={{ fontSize: 12, color: '#9CA3AF' }}>{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ padding: '16px 20px' }}>
                                                <span style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, background: rc.bg, color: rc.color }}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td style={{ padding: '16px 20px' }}>
                                                <span style={{ padding: '4px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600, background: user.isActive ? '#ECFDF5' : '#F3F4F6', color: user.isActive ? '#059669' : '#6B7280' }}>
                                                    {user.isActive ? '🟢 Active' : '⚫ Inactive'}
                                                </span>
                                            </td>
                                            <td style={{ padding: '16px 20px', color: '#6B7280', fontSize: 13 }}>{user.phone || '—'}</td>
                                            <td style={{ padding: '16px 20px', color: '#9CA3AF', fontSize: 13 }}>{new Date(user.createdAt).toLocaleDateString()}</td>
                                            <td style={{ padding: '16px 20px' }}>
                                                <div style={{ display: 'flex', gap: 6 }}>
                                                    <button onClick={() => openEdit(user)} style={{ padding: '6px 12px', background: '#EEF2FF', color: '#4F46E5', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500 }}>
                                                        <FiEdit2 size={13} /> Edit
                                                    </button>
                                                    <button onClick={() => toggleActive(user)}
                                                        style={{ padding: '6px 12px', background: user.isActive ? '#FFFBEB' : '#ECFDF5', color: user.isActive ? '#D97706' : '#059669', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500 }}>
                                                        {user.isActive ? <><FiUserX size={13} /> Deactivate</> : <><FiUserCheck size={13} /> Activate</>}
                                                    </button>
                                                    <button onClick={() => handleDelete(user._id)}
                                                        style={{ padding: '6px 12px', background: '#FEF2F2', color: '#EF4444', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 500 }}>
                                                        <FiTrash2 size={13} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: 20 }}>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                                    <button key={p} onClick={() => setPage(p)}
                                        style={{ width: 36, height: 36, border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 500, fontSize: 14, background: page === p ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : '#F3F4F6', color: page === p ? '#fff' : '#6B7280' }}>
                                        {p}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 20 }} onClick={() => setModal(false)}>
                    <div style={{ background: '#fff', borderRadius: 20, padding: 32, width: '100%', maxWidth: 500 }} onClick={e => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                            <h2 style={{ fontSize: 20, fontWeight: 700 }}>{editing ? '✏️ Edit User' : '➕ Add New User'}</h2>
                            <button onClick={() => setModal(false)} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#9CA3AF' }}>✕</button>
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Full Name *</label>
                                    <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                        required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Full name..." />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Email *</label>
                                    <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                        type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="email@example.com" disabled={!!editing} />
                                </div>
                                {!editing && (
                                    <div>
                                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Password *</label>
                                        <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                            type="password" required minLength={6} value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="Min. 6 characters" />
                                    </div>
                                )}
                                <div>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Role *</label>
                                    <select style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', cursor: 'pointer' }}
                                        value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))}>
                                        <option value="patient">👤 Patient</option>
                                        <option value="psychologist">👨‍⚕️ Psychologist</option>
                                        <option value="superadmin">🔴 Super Admin</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: '#374151' }}>Phone</label>
                                    <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                        value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+880..." />
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 24 }}>
                                <button type="button" onClick={() => setModal(false)} style={{ padding: '10px 20px', border: '1px solid #E5E7EB', borderRadius: 10, background: '#fff', cursor: 'pointer', fontWeight: 500, fontSize: 14 }}>Cancel</button>
                                <button type="submit" disabled={saving} style={{ padding: '10px 24px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 14, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                                    {saving ? 'Saving...' : editing ? 'Update User' : 'Create User'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}