import React from 'react';
import { Link } from 'react-router-dom';

const features = [
    { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.' },
    { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.' },
    { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.' },
    { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.' },
    { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.' },
    { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.' },
];

const steps = [
    { step: '1', title: 'Find a Psychologist', desc: 'Browse verified psychologists by specialization and availability.' },
    { step: '2', title: 'Book a Session', desc: 'Choose a time slot that works for you and confirm your booking.' },
    { step: '3', title: 'Start Your Session', desc: 'Join a secure video call and start your therapy journey.' },
];

export default function Home() {
    return (
        <div>
            <nav style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
                <span style={{ fontFamily: 'Sora', fontWeight: 700, fontSize: 20, color: 'var(--primary)' }}>LifeInnovior</span>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <Link to="/find-psychologist" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14 }}>Find Psychologist</Link>
                    <Link to="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14 }}>Blog</Link>
                    <Link to="/pricing" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14 }}>Pricing</Link>
                    <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                    <Link to="/register" className="btn btn-primary btn-sm">Get Started</Link>
                </div>
            </nav>

            <div className="hero">
                <div className="container">
                    <h1>Mental Health Care,<br />Made Accessible</h1>
                    <p>Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.</p>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/find-psychologist" className="btn btn-lg" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 600 }}>Find a Psychologist</Link>
                        <Link to="/register" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)' }}>Join as Psychologist</Link>
                    </div>
                </div>
            </div>

            <div style={{ padding: '80px 0', background: '#fff' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Everything You Need</h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 48 }}>A complete platform for modern mental health care</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                        {features.map(f => (
                            <div key={f.title} style={{ padding: 28, borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg)' }}>
                                <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
                                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ padding: '80px 0', background: 'var(--bg)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 48 }}>How It Works</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
                        {steps.map(s => (
                            <div key={s.step} style={{ textAlign: 'center' }}>
                                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, margin: '0 auto 16px' }}>{s.step}</div>
                                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: '#fff', textAlign: 'center' }}>
                <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Ready to Get Started?</h2>
                <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 32 }}>Join LifeInnovior today. Free 14-day trial for psychologists.</p>
                <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                    <Link to="/register" className="btn btn-lg" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 600 }}>Create Free Account</Link>
                    <Link to="/pricing" className="btn btn-lg" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.6)' }}>View Pricing</Link>
                </div>
            </div>

            <footer style={{ background: '#111', color: '#9CA3AF', padding: '40px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8, fontFamily: 'Sora' }}>LifeInnovior</div>
                <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</p>
            </footer>
        </div>
    );
}