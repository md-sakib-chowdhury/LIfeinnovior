import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../utils/api';
import toast from 'react-hot-toast';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await forgotPassword(email);
            setSent(true);
            toast.success('Reset email sent!');
        } catch (err) {
            toast.error(err.response?.data?.message || 'Failed to send email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: 40, width: '100%', maxWidth: 420, boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                    <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Forgot Password?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Enter your email and we'll send you a reset link</p>
                </div>
                {sent ? (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 48, marginBottom: 16 }}>📧</div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>Check your email for the reset link.</p>
                        <Link to="/login" className="btn btn-primary" style={{ justifyContent: 'center' }}>Back to Login</Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Email address</label>
                            <input className="form-control" type="email" required value={email}
                                onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg" disabled={loading}
                            style={{ width: '100%', justifyContent: 'center' }}>
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 14 }}>
                            <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none' }}>← Back to Login</Link>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}