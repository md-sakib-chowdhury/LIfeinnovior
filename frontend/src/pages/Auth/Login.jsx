import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const user = await login(form.email, form.password);
            toast.success('Welcome back!');
            if (user.role === 'superadmin') navigate('/admin');
            else if (user.role === 'psychologist') navigate('/psychologist');
            else navigate('/patient');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Login failed');
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
                        Professional mental health platform connecting psychologists with patients through secure video therapy.
                    </p>
                    <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {['🧠 Book video therapy sessions', '📋 Manage patient records securely', '💳 Flexible subscription plans'].map(f => (
                            <div key={f} style={{ fontSize: 15, opacity: 0.9 }}>{f}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="auth-right">
                <div className="auth-form">
                    <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>Welcome back</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 28, fontSize: 14 }}>Sign in to your account</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Email address</label>
                            <input className="form-control" type="email" required value={form.email}
                                onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                Password
                                <Link to="/forgot-password" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 400 }}>Forgot?</Link>
                            </label>
                            <input className="form-control" type="password" required value={form.password}
                                onChange={e => setForm(p => ({ ...p, password: e.target.value }))} placeholder="••••••••" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" disabled={loading}
                            style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: 20, fontSize: 14, color: 'var(--text-secondary)' }}>
                        Don't have an account?{' '}
                        <Link to="/register" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>Create one</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}