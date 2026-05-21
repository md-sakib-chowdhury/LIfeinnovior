// import React from 'react';
// import { Link } from 'react-router-dom';

// const features = [
//     { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.' },
//     { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.' },
//     { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.' },
//     { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.' },
//     { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.' },
//     { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.' },
// ];

// const steps = [
//     { step: '1', title: 'Find a Psychologist', desc: 'Browse verified psychologists by specialization and availability.' },
//     { step: '2', title: 'Book a Session', desc: 'Choose a time slot that works for you and confirm your booking.' },
//     { step: '3', title: 'Start Your Session', desc: 'Join a secure video call and start your therapy journey.' },
// ];

// export default function Home() {
//     return (
//         <div>
//             <nav style={{ background: '#fff', borderBottom: '0.5px solid #e5e5e5', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>

//                 {/* Brand */}
//                 <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 20, background: 'linear-gradient(135deg, #534AB7, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.3px' }}>
//                     LifeInnovior
//                 </span>

//                 {/* Nav Links */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

//                     <Link to="/find-psychologist" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: 13.5, fontWeight: 500, padding: '6px 13px', borderRadius: 999, border: '1.5px solid #AFA9EC', color: '#534AB7', background: '#EEEDFE' }}>
//                         🧠 Find Psychologist
//                     </Link>

//                     <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: 13.5, fontWeight: 500, padding: '6px 13px', borderRadius: 999, border: '1.5px solid #5DCAA5', color: '#0F6E56', background: '#E1F5EE' }}>
//                         📰 Blog
//                     </Link>

//                     <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: 13.5, fontWeight: 500, padding: '6px 13px', borderRadius: 999, border: '1.5px solid #EF9F27', color: '#854F0B', background: '#FAEEDA' }}>
//                         🏷️ Pricing
//                     </Link>

//                     {/* Divider */}
//                     <div style={{ width: 1, height: 20, background: '#e5e5e5', margin: '0 6px' }} />

//                     <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 500, padding: '7px 16px', borderRadius: 8, border: '0.5px solid #ddd', color: '#333', textDecoration: 'none', background: '#fff' }}>
//                         Login
//                     </Link>

//                     <Link to="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, padding: '8px 18px', borderRadius: 8, border: 'none', color: '#fff', textDecoration: 'none', background: '#534AB7' }}>
//                         Get Started →
//                     </Link>

//                 </div>
//             </nav>

//             <div className="hero">
//                 <div className="container">
//                     <h1>Mental Health Care,<br />Made Accessible</h1>
//                     <p>Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.</p>
//                     <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
//                         <Link to="/find-psychologist" className="btn btn-lg" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 600 }}>Find a Psychologist</Link>
//                         <Link to="/register" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)' }}>Join as Psychologist</Link>
//                     </div>
//                 </div>
//             </div>

//             <div style={{ padding: '80px 0', background: '#fff' }}>
//                 <div className="container">
//                     <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Everything You Need</h2>
//                     <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 48 }}>A complete platform for modern mental health care</p>
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
//                         {features.map(f => (
//                             <div key={f.title} style={{ padding: 28, borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg)' }}>
//                                 <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
//                                 <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
//                                 <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div style={{ padding: '80px 0', background: 'var(--bg)' }}>
//                 <div className="container">
//                     <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 48 }}>How It Works</h2>
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
//                         {steps.map(s => (
//                             <div key={s.step} style={{ textAlign: 'center' }}>
//                                 <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, margin: '0 auto 16px' }}>{s.step}</div>
//                                 <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
//                                 <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{s.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: '#fff', textAlign: 'center' }}>
//                 <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Ready to Get Started?</h2>
//                 <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 32 }}>Join LifeInnovior today. Free 14-day trial for psychologists.</p>
//                 <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
//                     <Link to="/register" className="btn btn-lg" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 600 }}>Create Free Account</Link>
//                     <Link to="/pricing" className="btn btn-lg" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.6)' }}>View Pricing</Link>
//                 </div>
//             </div>

//             <footer style={{ background: '#111', color: '#9CA3AF', padding: '40px 24px', textAlign: 'center' }}>
//                 <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8, fontFamily: 'Sora' }}>LifeInnovior</div>
//                 <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const features = [
    { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.', accent: '#E1F5EE', border: '#5DCAA5', tag: 'Live Sessions' },
    { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.', accent: '#EEEDFE', border: '#AFA9EC', tag: 'Instant' },
    { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.', accent: '#FAEEDA', border: '#EF9F27', tag: 'Private' },
    { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.', accent: '#FAECE7', border: '#F0997B', tag: 'From $29' },
    { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.', accent: '#EAF3DE', border: '#97C459', tag: 'E2E Encrypted' },
    { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.', accent: '#E6F1FB', border: '#85B7EB', tag: 'Cross-platform' },
];

const steps = [
    { step: '01', title: 'Find a Psychologist', desc: 'Browse verified psychologists by specialization, language, and availability.', color: '#534AB7' },
    { step: '02', title: 'Book a Session', desc: 'Choose a time slot that works for you and confirm your booking in seconds.', color: '#1D9E75' },
    { step: '03', title: 'Start Your Journey', desc: 'Join a secure video call and take the first step toward better mental health.', color: '#D85A30' },
];

const stats = [
    { value: '12,000+', label: 'Patients Helped' },
    { value: '800+', label: 'Licensed Psychologists' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '4.9★', label: 'Average Rating' },
];

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ fontFamily: "'DM Sans', 'Sora', sans-serif", background: '#FAFAF8', color: '#1a1a1a', overflowX: 'hidden' }}>

            {/* Google Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@700;800&display=swap');

                * { box-sizing: border-box; margin: 0; padding: 0; }

                :root {
                    --primary: #534AB7;
                    --primary-light: #EEEDFE;
                    --secondary: #1D9E75;
                    --secondary-light: #E1F5EE;
                    --coral: #D85A30;
                    --bg: #FAFAF8;
                    --card: #FFFFFF;
                    --text: #1a1a1a;
                    --muted: #6b7280;
                    --border: #e9e9e5;
                }

                .nav-link {
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 7px 14px;
                    border-radius: 999px;
                    transition: all 0.2s;
                }

                .hero-title {
                    font-family: 'Sora', sans-serif;
                    font-size: clamp(42px, 6vw, 80px);
                    font-weight: 800;
                    line-height: 1.08;
                    letter-spacing: -2px;
                    color: #fff;
                }

                .feature-card {
                    background: #fff;
                    border-radius: 20px;
                    border: 1px solid var(--border);
                    padding: 28px;
                    transition: transform 0.25s, box-shadow 0.25s;
                    cursor: default;
                    position: relative;
                    overflow: hidden;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
                }

                .stat-card {
                    background: rgba(255,255,255,0.12);
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 16px;
                    padding: 24px 28px;
                    text-align: center;
                    backdrop-filter: blur(8px);
                }

                .step-line {
                    position: absolute;
                    top: 28px;
                    left: calc(50% + 28px);
                    width: calc(100% - 56px);
                    height: 1px;
                    background: linear-gradient(90deg, #534AB7, #1D9E75);
                    opacity: 0.25;
                }

                .pill-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 28px;
                    border-radius: 999px;
                    font-size: 15px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: transform 0.2s, box-shadow 0.2s;
                    cursor: pointer;
                    border: none;
                }

                .pill-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 32px rgba(0,0,0,0.18);
                }

                .marquee-track {
                    display: flex;
                    gap: 12px;
                    animation: marquee 22s linear infinite;
                    white-space: nowrap;
                }

                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }

                .testimonial-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #fff;
                    border: 1px solid var(--border);
                    border-radius: 999px;
                    padding: 10px 16px;
                    font-size: 13.5px;
                    font-weight: 500;
                    color: var(--text);
                    flex-shrink: 0;
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .fade-up { animation: fadeUp 0.7s ease forwards; }
                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.2s; }
                .delay-3 { animation-delay: 0.3s; }
                .delay-4 { animation-delay: 0.4s; }

                .blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.35;
                    pointer-events: none;
                }
            `}</style>

            {/* NAV */}
            <nav style={{
                background: 'rgba(250,250,248,0.85)',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid #e9e9e5',
                padding: '0 32px',
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                zIndex: 100,
            }}>
                <span style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 800,
                    fontSize: 20,
                    background: 'linear-gradient(135deg, #534AB7 0%, #1D9E75 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.5px'
                }}>
                    LifeInnovior
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Link to="/find-psychologist" className="nav-link" style={{ color: '#534AB7', background: '#EEEDFE' }}>🧠 Find Psychologist</Link>
                    <Link to="/blog" className="nav-link" style={{ color: '#0F6E56', background: '#E1F5EE' }}>📰 Blog</Link>
                    <Link to="/pricing" className="nav-link" style={{ color: '#854F0B', background: '#FAEEDA' }}>🏷️ Pricing</Link>
                    <div style={{ width: 1, height: 20, background: '#e9e9e5', margin: '0 8px' }} />
                    <Link to="/login" className="nav-link" style={{ color: '#555', border: '1px solid #e9e9e5', background: '#fff' }}>Login</Link>
                    <Link to="/register" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        fontSize: 14, fontWeight: 600, padding: '8px 20px',
                        borderRadius: 10, background: '#534AB7', color: '#fff', textDecoration: 'none',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(83,74,183,0.35)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                        Get Started →
                    </Link>
                </div>
            </nav>

            {/* HERO */}
            <div style={{
                background: 'linear-gradient(135deg, #1e1752 0%, #2d2490 40%, #0f5e48 100%)',
                padding: '100px 32px 80px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '88vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* Blobs */}
                <div className="blob" style={{ width: 500, height: 500, background: '#534AB7', top: -100, right: -100, opacity: 0.3 }} />
                <div className="blob" style={{ width: 400, height: 400, background: '#1D9E75', bottom: -80, left: 50, opacity: 0.25 }} />
                <div className="blob" style={{ width: 300, height: 300, background: '#D85A30', bottom: 50, right: 200, opacity: 0.15 }} />

                {/* Dot grid overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    pointerEvents: 'none',
                }} />

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 820 }}>

                    {/* Badge */}
                    <div className="fade-up" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: 999, padding: '6px 16px', marginBottom: 28,
                        fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)',
                    }}>
                        <span style={{ width: 7, height: 7, background: '#5DCAA5', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #5DCAA5' }} />
                        Trusted by 12,000+ patients worldwide
                    </div>

                    <h1 className="hero-title fade-up delay-1">
                        Mental Health Care,<br />
                        <span style={{ background: 'linear-gradient(90deg, #9F99E8, #5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Made Accessible
                        </span>
                    </h1>

                    <p className="fade-up delay-2" style={{
                        fontSize: 18, color: 'rgba(255,255,255,0.7)',
                        margin: '24px auto 40px', maxWidth: 520, lineHeight: 1.7, fontWeight: 400
                    }}>
                        Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.
                    </p>

                    <div className="fade-up delay-3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/find-psychologist" className="pill-btn" style={{ background: '#fff', color: '#534AB7' }}>
                            🧠 Find a Psychologist
                        </Link>
                        <Link to="/register" className="pill-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>
                            Join as Psychologist →
                        </Link>
                    </div>

                    {/* Stats row */}
                    <div className="fade-up delay-4" style={{
                        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 12, marginTop: 64
                    }}>
                        {stats.map(s => (
                            <div key={s.label} className="stat-card">
                                <div style={{ fontSize: 26, fontFamily: 'Sora, sans-serif', fontWeight: 800, color: '#fff', marginBottom: 4 }}>{s.value}</div>
                                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500, letterSpacing: '0.3px' }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MARQUEE TESTIMONIALS */}
            <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '18px 0', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: 12, overflow: 'hidden' }}>
                    <div className="marquee-track">
                        {[
                            { name: 'Aisha R.', text: '"Finally found a therapist I connect with."', emoji: '🌸' },
                            { name: 'James M.', text: '"Booking was effortless. 10/10 experience."', emoji: '⭐' },
                            { name: 'Priya K.', text: '"Feels like real in-person therapy."', emoji: '💙' },
                            { name: 'Omar S.', text: '"Changed my life in just 4 sessions."', emoji: '🌿' },
                            { name: 'Lena W.', text: '"The most secure platform I\'ve used."', emoji: '🔐' },
                            { name: 'Carlos D.', text: '"Perfect for my busy schedule."', emoji: '⚡' },
                            { name: 'Aisha R.', text: '"Finally found a therapist I connect with."', emoji: '🌸' },
                            { name: 'James M.', text: '"Booking was effortless. 10/10 experience."', emoji: '⭐' },
                            { name: 'Priya K.', text: '"Feels like real in-person therapy."', emoji: '💙' },
                            { name: 'Omar S.', text: '"Changed my life in just 4 sessions."', emoji: '🌿' },
                            { name: 'Lena W.', text: '"The most secure platform I\'ve used."', emoji: '🔐' },
                            { name: 'Carlos D.', text: '"Perfect for my busy schedule."', emoji: '⚡' },
                        ].map((t, i) => (
                            <div key={i} className="testimonial-chip">
                                <span style={{ fontSize: 16 }}>{t.emoji}</span>
                                <span style={{ color: '#6b7280', fontWeight: 400 }}>{t.text}</span>
                                <span style={{ fontSize: 12, color: '#aaa' }}>— {t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div style={{ padding: '100px 32px', background: '#FAFAF8' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <div style={{ display: 'inline-block', background: '#EEEDFE', color: '#534AB7', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Why LifeInnovior
                        </div>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px', marginBottom: 12 }}>Everything You Need</h2>
                        <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>A complete platform for modern mental health care</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                        {features.map((f, i) => (
                            <div key={f.title} className="feature-card">
                                <div style={{
                                    position: 'absolute', top: 0, right: 0,
                                    width: 120, height: 120,
                                    background: f.accent,
                                    borderRadius: '0 20px 0 100%',
                                    opacity: 0.6,
                                }} />
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    width: 52, height: 52, borderRadius: 14,
                                    background: f.accent, border: `1px solid ${f.border}`,
                                    fontSize: 26, marginBottom: 18, position: 'relative',
                                }}>
                                    {f.icon}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                    <h3 style={{ fontSize: 17, fontWeight: 600 }}>{f.title}</h3>
                                    <span style={{
                                        fontSize: 11, fontWeight: 600, padding: '3px 10px',
                                        borderRadius: 999, background: f.accent, color: f.border,
                                        border: `1px solid ${f.border}`,
                                    }}>{f.tag}</span>
                                </div>
                                <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.7 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* HOW IT WORKS */}
            <div style={{ padding: '100px 32px', background: '#fff' }}>
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 72 }}>
                        <div style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Simple Process
                        </div>
                        <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px' }}>How It Works</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
                        {steps.map((s, i) => (
                            <div key={s.step} style={{ position: 'relative' }}>
                                {i < steps.length - 1 && (
                                    <div style={{
                                        position: 'absolute', top: 32, left: '60%',
                                        width: '80%', height: 2,
                                        background: `linear-gradient(90deg, ${s.color}40, ${steps[i + 1].color}40)`,
                                        zIndex: 0
                                    }} />
                                )}
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: s.color, color: '#fff',
                                    fontFamily: 'Sora, sans-serif', fontSize: 20, fontWeight: 800,
                                    marginBottom: 24, position: 'relative', zIndex: 1,
                                    boxShadow: `0 12px 32px ${s.color}40`
                                }}>{s.step}</div>
                                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, fontFamily: 'Sora, sans-serif' }}>{s.title}</h3>
                                <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div style={{
                margin: '0 32px 80px',
                borderRadius: 28,
                background: 'linear-gradient(135deg, #1e1752 0%, #2d2490 50%, #0f5e48 100%)',
                padding: '80px 40px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div className="blob" style={{ width: 350, height: 350, background: '#534AB7', top: -100, right: -50 }} />
                <div className="blob" style={{ width: 250, height: 250, background: '#1D9E75', bottom: -60, left: 80 }} />
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'inline-block', background: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
                        padding: '5px 16px', fontSize: 12, fontWeight: 600, color: '#9F99E8',
                        letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 24
                    }}>Free 14-day trial</div>
                    <h2 style={{ fontFamily: 'Sora, sans-serif', fontSize: 46, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: 16 }}>
                        Ready to Get Started?
                    </h2>
                    <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', marginBottom: 40, maxWidth: 420, margin: '0 auto 40px' }}>
                        Join LifeInnovior today. Free 14-day trial for psychologists. No credit card required.
                    </p>
                    <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
                        <Link to="/register" className="pill-btn" style={{ background: '#fff', color: '#534AB7', fontSize: 16, padding: '16px 36px' }}>
                            Create Free Account
                        </Link>
                        <Link to="/pricing" className="pill-btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', fontSize: 16, padding: '16px 36px' }}>
                            View Pricing →
                        </Link>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer style={{ background: '#111', color: '#9CA3AF', padding: '48px 32px 32px' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
                        <div>
                            <div style={{ fontFamily: 'Sora, sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 10, background: 'linear-gradient(135deg, #9F99E8, #5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                LifeInnovior
                            </div>
                            <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 260, lineHeight: 1.7 }}>Modern mental health care for everyone, everywhere.</p>
                        </div>
                        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
                            {[
                                { label: 'Platform', links: ['Find Psychologist', 'How It Works', 'Pricing'] },
                                { label: 'Company', links: ['About', 'Blog', 'Careers'] },
                                { label: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
                            ].map(col => (
                                <div key={col.label}>
                                    <div style={{ fontSize: 12, fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>{col.label}</div>
                                    {col.links.map(l => (
                                        <div key={l} style={{ fontSize: 14, color: '#6b7280', marginBottom: 10, cursor: 'pointer' }}>{l}</div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #222', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                        <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</p>
                        <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
                            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
                            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}