import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '', role: 'patient' });
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const user = await register(form);
            toast.success('Account created successfully!');
            if (user.role === 'psychologist') navigate('/psychologist');
            else navigate('/patient');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-layout">
            <div className="auth-left">
                <div style={{ color: '#fff', maxWidth: 380 }}>
                    <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 16 }}>LifeInnovior</h1>
                    <p style={{ fontSize: 18, opacity: 0.9, lineHeight: 1.7 }}>
                        Join thousands of psychologists and patients on the most trusted mental health platform.
                    </p>
                    <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {['✅ 14-day free trial for psychologists', '🔒 Secure platform', '📱 Works on all devices'].map(f => (
                            <div key={f} style={{ fontSize: 15, opacity: 0.9 }}>{f}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="auth-right">
                <div className="auth-form">
                    <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>Create account</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: 14 }}>Start your journey today</p>
                    <div style={{ display: 'flex', background: 'var(--bg)', borderRadius: 10, padding: 4, marginBottom: 24 }}>
                        {[{ value: 'patient', label: '🧑 I am a Patient' }, { value: 'psychologist', label: '👨‍⚕️ I am a Psychologist' }].map(r => (
                            <button key={r.value} type="button" onClick={() => setForm(p => ({ ...p, role: r.value }))}
                                style={{
                                    flex: 1, padding: '9px 0', border: 'none', borderRadius: 8, cursor: 'pointer',
                                    background: form.role === r.value ? '#fff' : 'transparent',
                                    fontWeight: form.role === r.value ? 600 : 400,
                                    color: form.role === r.value ? 'var(--primary)' : 'var(--text-secondary)',
                                    boxShadow: form.role === r.value ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                                    fontSize: 13, transition: 'all 0.2s'
                                }}>
                                {r.label}
                            </button>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input className="form-control" required value={form.name}
                                onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Dr. John Smith" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email address</label>
                            <input className="form-control" type="email" required value={form.email}
                                onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input className="form-control" type="password" required minLength={6} value={form.password}
                                onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="Min. 6 characters" />
                        </div>
                        {form.role === 'psychologist' && (
                            <div style={{ background: '#EEF2FF', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 13, color: '#3730A3' }}>
                                🎉 You'll get a <strong>14-day free trial</strong> to explore all features!
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary btn-lg" disabled={loading}
                            style={{ width: '100%', justifyContent: 'center' }}>
                            {loading ? 'Creating account...' : 'Create Account'}
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: 20, fontSize: 14, color: 'var(--text-secondary)' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}