import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getPlans, createPlan, updatePlan, deletePlan } from '../../utils/api';
import { FiPlus, FiEdit2, FiTrash2, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

const defaultForm = { name: '', description: '', price: { monthly: '', yearly: '' }, stripePriceIdMonthly: '', stripePriceIdYearly: '', features: [''], maxPatients: 50, isActive: true };

export default function AdminPlans() {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(defaultForm);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        getPlans().then(r => setPlans(r.data.plans)).finally(() => setLoading(false));
    }, []);

    const openCreate = () => { setEditing(null); setForm(defaultForm); setModal(true); };
    const openEdit = (plan) => {
        setEditing(plan._id);
        setForm({ ...plan, price: { monthly: plan.price?.monthly || '', yearly: plan.price?.yearly || '' }, features: plan.features?.length ? plan.features : [''] });
        setModal(true);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const payload = { ...form, features: form.features.filter(f => f.trim()) };
            if (editing) {
                const { data } = await updatePlan(editing, payload);
                setPlans(prev => prev.map(p => p._id === editing ? data.plan : p));
                toast.success('Plan updated');
            } else {
                const { data } = await createPlan(payload);
                setPlans(prev => [data.plan, ...prev]);
                toast.success('Plan created');
            }
            setModal(false);
        } catch (err) { toast.error(err.response?.data?.message || 'Save failed'); }
        finally { setSaving(false); }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this plan?')) return;
        try {
            await deletePlan(id);
            setPlans(prev => prev.filter(p => p._id !== id));
            toast.success('Plan deleted');
        } catch { toast.error('Delete failed'); }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Subscription Plans</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Manage what psychologists can purchase</p>
                    </div>
                    <button className="btn btn-primary" onClick={openCreate}><FiPlus /> New Plan</button>
                </div>
                <div className="page-content">
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                            {plans.map(plan => (
                                <div key={plan._id} className="card" style={{ borderTop: '3px solid #4F46E5' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                        <div>
                                            <h3 style={{ fontSize: 18, fontWeight: 700 }}>{plan.name}</h3>
                                            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{plan.description}</p>
                                        </div>
                                        <span className={`badge ${plan.isActive ? 'badge-success' : 'badge-gray'}`}>{plan.isActive ? 'Active' : 'Inactive'}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                                        <div style={{ flex: 1, background: 'var(--bg)', borderRadius: 8, padding: '10px 14px', textAlign: 'center' }}>
                                            <div style={{ fontSize: 22, fontWeight: 700, color: '#4F46E5' }}>${plan.price?.monthly}</div>
                                            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>per month</div>
                                        </div>
                                        <div style={{ flex: 1, background: 'var(--bg)', borderRadius: 8, padding: '10px 14px', textAlign: 'center' }}>
                                            <div style={{ fontSize: 22, fontWeight: 700, color: '#7C3AED' }}>${plan.price?.yearly}</div>
                                            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>per year</div>
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: 16 }}>
                                        {plan.features?.map((f, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                                                <FiCheck size={14} color="#10B981" /><span style={{ fontSize: 13 }}>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 14 }}>Max patients: <strong>{plan.maxPatients}</strong></div>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <button className="btn btn-secondary btn-sm" onClick={() => openEdit(plan)} style={{ flex: 1 }}><FiEdit2 size={14} /> Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(plan._id)}><FiTrash2 size={14} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {modal && (
                <div className="modal-overlay" onClick={() => setModal(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 600 }}>
                        <div className="modal-header">
                            <h2 className="modal-title">{editing ? 'Edit Plan' : 'Create New Plan'}</h2>
                            <button className="modal-close" onClick={() => setModal(false)}>✕</button>
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Plan Name *</label>
                                    <input className="form-control" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Professional" />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Description</label>
                                    <input className="form-control" value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Monthly Price ($)</label>
                                    <input className="form-control" type="number" value={form.price.monthly} onChange={e => setForm(p => ({ ...p, price: { ...p.price, monthly: e.target.value } }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Yearly Price ($)</label>
                                    <input className="form-control" type="number" value={form.price.yearly} onChange={e => setForm(p => ({ ...p, price: { ...p.price, yearly: e.target.value } }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Stripe Monthly Price ID</label>
                                    <input className="form-control" value={form.stripePriceIdMonthly} onChange={e => setForm(p => ({ ...p, stripePriceIdMonthly: e.target.value }))} placeholder="price_xxx" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Stripe Yearly Price ID</label>
                                    <input className="form-control" value={form.stripePriceIdYearly} onChange={e => setForm(p => ({ ...p, stripePriceIdYearly: e.target.value }))} placeholder="price_xxx" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Max Patients</label>
                                    <input className="form-control" type="number" value={form.maxPatients} onChange={e => setForm(p => ({ ...p, maxPatients: e.target.value }))} />
                                </div>
                                <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 28 }}>
                                    <input type="checkbox" id="active" checked={form.isActive} onChange={e => setForm(p => ({ ...p, isActive: e.target.checked }))} />
                                    <label htmlFor="active" style={{ margin: 0, cursor: 'pointer' }}>Active</label>
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Features</label>
                                    {form.features.map((f, i) => (
                                        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                                            <input className="form-control" value={f} onChange={e => { const arr = [...form.features]; arr[i] = e.target.value; setForm(p => ({ ...p, features: arr })); }} placeholder={`Feature ${i + 1}`} />
                                            {form.features.length > 1 && (
                                                <button type="button" className="btn btn-danger btn-sm" onClick={() => setForm(p => ({ ...p, features: p.features.filter((_, j) => j !== i) }))}>✕</button>
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-outline btn-sm" onClick={() => setForm(p => ({ ...p, features: [...p.features, ''] }))}>+ Add Feature</button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                                <button type="button" className="btn btn-outline" onClick={() => setModal(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? 'Saving...' : editing ? 'Update Plan' : 'Create Plan'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}