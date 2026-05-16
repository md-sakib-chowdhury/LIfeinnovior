import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getAllPayments } from '../../utils/api';

export default function AdminPayments() {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getAllPayments().then(r => { setPayments(r.data.payments || []); setTotal(r.data.total || 0); }).finally(() => setLoading(false));
    }, []);

    const totalRevenue = payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0);

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Payment History</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{total} transactions · ${totalRevenue.toLocaleString()} revenue</p>
                    </div>
                </div>
                <div className="page-content">
                    <div className="card">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr><th>User</th><th>Type</th><th>Amount</th><th>Status</th><th>Date</th></tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan={5} style={{ textAlign: 'center', padding: 40 }}><div className="spinner" style={{ margin: '0 auto' }} /></td></tr>
                                    ) : payments.map(p => (
                                        <tr key={p._id}>
                                            <td>
                                                <div style={{ fontWeight: 600 }}>{p.user?.name}</div>
                                                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.user?.email}</div>
                                            </td>
                                            <td><span className={`badge ${p.type === 'subscription' ? 'badge-purple' : 'badge-info'}`}>{p.type}</span></td>
                                            <td style={{ fontWeight: 700, color: '#10B981' }}>${p.amount}</td>
                                            <td><span className={`badge ${p.status === 'completed' ? 'badge-success' : p.status === 'pending' ? 'badge-warning' : 'badge-danger'}`}>{p.status}</span></td>
                                            <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{new Date(p.createdAt).toLocaleDateString()}</td>
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