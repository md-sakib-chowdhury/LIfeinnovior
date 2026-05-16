import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../../components/Common/Sidebar';
import { getAdminStats } from '../../utils/api';
import { FiUsers, FiBriefcase, FiHeart, FiDollarSign, FiTrendingUp, FiActivity } from 'react-icons/fi';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function AdminDashboard() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAdminStats().then(r => setStats(r.data)).catch(console.error).finally(() => setLoading(false));
    }, []);

    const chartData = stats?.monthlyRevenue?.map(d => ({
        month: MONTH_NAMES[d._id.month - 1],
        revenue: d.total
    })) || [];

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Admin Dashboard</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Platform overview & management</p>
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                        <Link to="/admin/users" className="btn btn-secondary btn-sm">Manage Users</Link>
                        <Link to="/admin/plans" className="btn btn-primary btn-sm">+ Add Plan</Link>
                    </div>
                </div>
                <div className="page-content">
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', padding: 60 }}><div className="spinner" /></div>
                    ) : (
                        <>
                            <div className="stats-grid">
                                {[
                                    { icon: FiUsers, label: 'Total Users', value: stats?.stats?.totalUsers || 0, color: '#4F46E5', bg: '#EEF2FF' },
                                    { icon: FiBriefcase, label: 'Psychologists', value: stats?.stats?.totalPsychologists || 0, color: '#7C3AED', bg: '#F5F3FF' },
                                    { icon: FiHeart, label: 'Patients', value: stats?.stats?.totalPatients || 0, color: '#06B6D4', bg: '#ECFEFF' },
                                    { icon: FiActivity, label: 'Appointments', value: stats?.stats?.totalAppointments || 0, color: '#10B981', bg: '#ECFDF5' },
                                    { icon: FiTrendingUp, label: 'Active Subscriptions', value: stats?.stats?.activeSubscriptions || 0, color: '#F59E0B', bg: '#FFFBEB' },
                                    { icon: FiDollarSign, label: 'Total Revenue', value: `$${(stats?.stats?.totalRevenue || 0).toLocaleString()}`, color: '#EF4444', bg: '#FEF2F2' },
                                ].map(s => (
                                    <div key={s.label} className="stat-card">
                                        <div className="stat-icon" style={{ background: s.bg }}><s.icon size={20} color={s.color} /></div>
                                        <div><div className="stat-value">{s.value}</div><div className="stat-label">{s.label}</div></div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 24 }}>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Monthly Revenue</h3>
                                        <span className="badge badge-success">Last 6 months</span>
                                    </div>
                                    <ResponsiveContainer width="100%" height={240}>
                                        <LineChart data={chartData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                                            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                                            <YAxis tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                                            <Tooltip formatter={(v) => [`$${v}`, 'Revenue']} />
                                            <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={2.5} dot={{ fill: '#4F46E5', r: 4 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Recent Users</h3>
                                        <Link to="/admin/users" style={{ fontSize: 13, color: 'var(--primary)', textDecoration: 'none' }}>View all</Link>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                        {stats?.recentUsers?.map(u => (
                                            <div key={u._id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                <div className="user-avatar" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{u.name?.charAt(0)?.toUpperCase()}</div>
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <div style={{ fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{u.name}</div>
                                                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{u.email}</div>
                                                </div>
                                                <span className={`badge ${u.role === 'psychologist' ? 'badge-purple' : 'badge-info'}`}>{u.role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                                {[
                                    { to: '/admin/users', label: 'Manage Users', desc: 'View, edit, deactivate', color: '#4F46E5' },
                                    { to: '/admin/plans', label: 'Subscription Plans', desc: 'Create and manage plans', color: '#7C3AED' },
                                    { to: '/admin/payments', label: 'Payment History', desc: 'All transactions', color: '#10B981' },
                                    { to: '/admin/blogs', label: 'Blog Management', desc: 'Publish and manage posts', color: '#F59E0B' },
                                ].map(link => (
                                    <Link key={link.to} to={link.to} style={{ textDecoration: 'none' }}>
                                        <div className="card" style={{ borderTop: `3px solid ${link.color}`, cursor: 'pointer' }}>
                                            <div style={{ fontWeight: 600, marginBottom: 4 }}>{link.label}</div>
                                            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{link.desc}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}