import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlans, createSubscription } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function Pricing() {
    const [plans, setPlans] = useState([]);
    const [billing, setBilling] = useState('monthly');
    const { user } = useAuth();

    useEffect(() => { getPlans().then(r => setPlans(r.data.plans || [])); }, []);

    const handleSubscribe = async (planId) => {
        if (!user) { window.location.href = '/register'; return; }
        try {
            const { data } = await createSubscription({ planId, billingCycle: billing });
            window.location.href = data.url;
        } catch { toast.error('Failed to start checkout'); }
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
            <nav style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: 'var(--primary)', textDecoration: 'none' }}>LifeInnovior</Link>
                <div style={{ display: 'flex', gap: 10 }}>
                    <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                    <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
                </div>
            </nav>
            <div className="container" style={{ padding: '60px 24px' }}>
                <h1 style={{ textAlign: 'center', fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Simple, Transparent Pricing</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 32 }}>Start with a 14-day free trial. No credit card required.</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
                    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: 4, display: 'flex' }}>
                        {['monthly', 'yearly'].map(b => (
                            <button key={b} onClick={() => setBilling(b)}
                                style={{ padding: '8px 20px', borderRadius: 8, border: 'none', cursor: 'pointer', background: billing === b ? 'var(--primary)' : 'transparent', color: billing === b ? '#fff' : 'var(--text-secondary)', fontWeight: 500, fontSize: 14, fontFamily: 'inherit' }}>
                                {b.charAt(0).toUpperCase() + b.slice(1)}
                                {b === 'yearly' && <span style={{ fontSize: 11, background: '#10B981', color: '#fff', padding: '1px 6px', borderRadius: 4, marginLeft: 6 }}>Save 20%</span>}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
                    {plans.filter(p => p.isActive).map(plan => (
                        <div key={plan._id} className="card" style={{ borderTop: '3px solid #4F46E5', textAlign: 'center' }}>
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{plan.name}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginBottom: 20 }}>{plan.description}</p>
                            <div style={{ fontSize: 40, fontWeight: 800, color: '#4F46E5', marginBottom: 4 }}>
                                ${billing === 'monthly' ? plan.price?.monthly : plan.price?.yearly}
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 24 }}>per {billing === 'monthly' ? 'month' : 'year'}</div>
                            <div style={{ textAlign: 'left', marginBottom: 24 }}>
                                {plan.features?.map(f => (
                                    <div key={f} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
                                        <FiCheck size={16} color="#10B981" style={{ flexShrink: 0, marginTop: 2 }} />
                                        <span style={{ fontSize: 14 }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => handleSubscribe(plan._id)}>
                                Get Started
                            </button>
                        </div>
                    ))}
                    {plans.length === 0 && <div className="empty-state" style={{ gridColumn: '1/-1' }}><p>No plans available yet.</p></div>}
                </div>
            </div>
        </div>
    );
}