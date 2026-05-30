// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const features = [
// //     { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.' },
// //     { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.' },
// //     { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.' },
// //     { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.' },
// //     { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.' },
// //     { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.' },
// // ];

// // const steps = [
// //     { step: '1', title: 'Find a Psychologist', desc: 'Browse verified psychologists by specialization and availability.' },
// //     { step: '2', title: 'Book a Session', desc: 'Choose a time slot that works for you and confirm your booking.' },
// //     { step: '3', title: 'Start Your Session', desc: 'Join a secure video call and start your therapy journey.' },
// // ];

// // export default function Home() {
// //     return (
// //         <div>
// //             <nav style={{ background: '#fff', borderBottom: '0.5px solid #e5e5e5', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>

// //                 {/* Brand */}
// //                 <span style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 20, background: 'linear-gradient(135deg, #534AB7, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.3px' }}>
// //                     LifeInnovior
// //                 </span>

// //                 {/* Nav Links */}
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

// //                     <Link to="/find-psychologist" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: 13.5, fontWeight: 500, padding: '6px 13px', borderRadius: 999, border: '1.5px solid #AFA9EC', color: '#534AB7', background: '#EEEDFE' }}>
// //                         🧠 Find Psychologist
// //                     </Link>

// //                     <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: 13.5, fontWeight: 500, padding: '6px 13px', borderRadius: 999, border: '1.5px solid #5DCAA5', color: '#0F6E56', background: '#E1F5EE' }}>
// //                         📰 Blog
// //                     </Link>

// //                     <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: 13.5, fontWeight: 500, padding: '6px 13px', borderRadius: 999, border: '1.5px solid #EF9F27', color: '#854F0B', background: '#FAEEDA' }}>
// //                         🏷️ Pricing
// //                     </Link>

// //                     {/* Divider */}
// //                     <div style={{ width: 1, height: 20, background: '#e5e5e5', margin: '0 6px' }} />

// //                     <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 500, padding: '7px 16px', borderRadius: 8, border: '0.5px solid #ddd', color: '#333', textDecoration: 'none', background: '#fff' }}>
// //                         Login
// //                     </Link>

// //                     <Link to="/register" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 600, padding: '8px 18px', borderRadius: 8, border: 'none', color: '#fff', textDecoration: 'none', background: '#534AB7' }}>
// //                         Get Started →
// //                     </Link>

// //                 </div>
// //             </nav>

// //             <div className="hero">
// //                 <div className="container">
// //                     <h1>Mental Health Care,<br />Made Accessible</h1>
// //                     <p>Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.</p>
// //                     <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
// //                         <Link to="/find-psychologist" className="btn btn-lg" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 600 }}>Find a Psychologist</Link>
// //                         <Link to="/register" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.5)' }}>Join as Psychologist</Link>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div style={{ padding: '80px 0', background: '#fff' }}>
// //                 <div className="container">
// //                     <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>Everything You Need</h2>
// //                     <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 48 }}>A complete platform for modern mental health care</p>
// //                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
// //                         {features.map(f => (
// //                             <div key={f.title} style={{ padding: 28, borderRadius: 16, border: '1px solid var(--border)', background: 'var(--bg)' }}>
// //                                 <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
// //                                 <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
// //                                 <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             <div style={{ padding: '80px 0', background: 'var(--bg)' }}>
// //                 <div className="container">
// //                     <h2 style={{ textAlign: 'center', fontSize: 32, fontWeight: 700, marginBottom: 48 }}>How It Works</h2>
// //                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
// //                         {steps.map(s => (
// //                             <div key={s.step} style={{ textAlign: 'center' }}>
// //                                 <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, margin: '0 auto 16px' }}>{s.step}</div>
// //                                 <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
// //                                 <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{s.desc}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             <div style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: '#fff', textAlign: 'center' }}>
// //                 <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Ready to Get Started?</h2>
// //                 <p style={{ fontSize: 17, opacity: 0.9, marginBottom: 32 }}>Join LifeInnovior today. Free 14-day trial for psychologists.</p>
// //                 <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
// //                     <Link to="/register" className="btn btn-lg" style={{ background: '#fff', color: 'var(--primary)', fontWeight: 600 }}>Create Free Account</Link>
// //                     <Link to="/pricing" className="btn btn-lg" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.6)' }}>View Pricing</Link>
// //                 </div>
// //             </div>

// //             <footer style={{ background: '#111', color: '#9CA3AF', padding: '40px 24px', textAlign: 'center' }}>
// //                 <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8, fontFamily: 'Sora' }}>LifeInnovior</div>
// //                 <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</p>
// //             </footer>
// //         </div>
// //     );
// // }
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const features = [
// //     { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.', accent: '#E1F5EE', border: '#5DCAA5', tag: 'Live Sessions' },
// //     { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.', accent: '#EEEDFE', border: '#AFA9EC', tag: 'Instant' },
// //     { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.', accent: '#FAEEDA', border: '#EF9F27', tag: 'Private' },
// //     { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.', accent: '#FAECE7', border: '#F0997B', tag: 'From $29' },
// //     { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.', accent: '#EAF3DE', border: '#97C459', tag: 'E2E Encrypted' },
// //     { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.', accent: '#E6F1FB', border: '#85B7EB', tag: 'Cross-platform' },
// // ];

// // const steps = [
// //     { step: '01', title: 'Find a Psychologist', desc: 'Browse verified psychologists by specialization, language, and availability.', color: '#534AB7' },
// //     { step: '02', title: 'Book a Session', desc: 'Choose a time slot that works for you and confirm your booking in seconds.', color: '#1D9E75' },
// //     { step: '03', title: 'Start Your Journey', desc: 'Join a secure video call and take the first step toward better mental health.', color: '#D85A30' },
// // ];

// // const stats = [
// //     { value: '12,000+', label: 'Patients Helped' },
// //     { value: '800+', label: 'Licensed Psychologists' },
// //     { value: '98%', label: 'Satisfaction Rate' },
// //     { value: '4.9★', label: 'Average Rating' },
// // ];

// // const testimonials = [
// //     { name: 'Aisha R.', text: '"Finally found a therapist I connect with."', emoji: '🌸' },
// //     { name: 'James M.', text: '"Booking was effortless. 10/10 experience."', emoji: '⭐' },
// //     { name: 'Priya K.', text: '"Feels like real in-person therapy."', emoji: '💙' },
// //     { name: 'Omar S.', text: '"Changed my life in just 4 sessions."', emoji: '🌿' },
// //     { name: 'Lena W.', text: '"The most secure platform I\'ve used."', emoji: '🔐' },
// //     { name: 'Carlos D.', text: '"Perfect for my busy schedule."', emoji: '⚡' },
// // ];

// // export default function Home() {
// //     const [menuOpen, setMenuOpen] = useState(false);

// //     return (
// //         <div style={{ fontFamily: "'DM Sans','Sora',sans-serif", background: '#FAFAF8', color: '#1a1a1a', overflowX: 'hidden', width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
// //             <style>{`
// //                 @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@700;800&display=swap');
// //                 *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// //                 html, body, #root { overflow-x: hidden; width: 100%; max-width: 100%; margin: 0; padding: 0; }

// //                 .inner { max-width: 1400px; margin: 0 auto; padding: 0 48px; width: 100%; }

// //                 .nav-link { text-decoration: none; font-size: 14px; font-weight: 500; padding: 7px 14px; border-radius: 999px; transition: all 0.2s; white-space: nowrap; }

// //                 .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
// //                 .hamburger span { display: block; width: 22px; height: 2px; background: #534AB7; border-radius: 2px; transition: all 0.3s; }

// //                 .mobile-menu { display: none; flex-direction: column; background: rgba(250,250,248,0.98); border-bottom: 1px solid #e9e9e5; }
// //                 .mobile-menu.open { display: flex; }
// //                 .mobile-menu a { text-decoration: none; font-size: 15px; font-weight: 500; color: #1a1a1a; padding: 13px 24px; border-bottom: 1px solid #f0f0ec; }

// //                 .hero-title { font-family: 'Sora',sans-serif; font-size: clamp(32px, 5vw, 76px); font-weight: 800; line-height: 1.08; letter-spacing: -2px; color: #fff; }

// //                 .feature-card { background: #fff; border-radius: 20px; border: 1px solid #e9e9e5; padding: 28px; transition: transform 0.25s, box-shadow 0.25s; cursor: default; position: relative; overflow: hidden; }
// //                 .feature-card:hover { transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }

// //                 .stat-card { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 20px 16px; text-align: center; backdrop-filter: blur(8px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }

// //                 .pill-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 999px; font-size: 15px; font-weight: 600; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border: none; }
// //                 .pill-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }

// //                 .marquee-track { display: flex; gap: 12px; animation: marquee 22s linear infinite; white-space: nowrap; }
// //                 @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
// //                 .testimonial-chip { display: inline-flex; align-items: center; gap: 10px; background: #fff; border: 1px solid #e9e9e5; border-radius: 999px; padding: 10px 16px; font-size: 13.5px; font-weight: 500; flex-shrink: 0; }

// //                 @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// //                 .fade-up { animation: fadeUp 0.7s ease forwards; }
// //                 .delay-1 { animation-delay: 0.1s; }
// //                 .delay-2 { animation-delay: 0.2s; }
// //                 .delay-3 { animation-delay: 0.3s; }
// //                 .delay-4 { animation-delay: 0.4s; }

// //                 .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; pointer-events: none; }

// //                 .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 64px; }
// //                 .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
// //                 .steps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 32px; position: relative; }
// //                 .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

// //                 /* ── RESPONSIVE ── */
// //                 @media (max-width: 1200px) {
// //                     .inner { padding: 0 32px; }
// //                     .cta-inner { margin: 0 32px 80px !important; }
// //                 }
// //                 @media (max-width: 900px) {
// //                     .inner { padding: 0 24px; }
// //                     .features-grid { grid-template-columns: repeat(2,1fr); }
// //                     .steps-grid { grid-template-columns: 1fr; gap: 40px; }
// //                     .steps-grid > div > div[style*="position: absolute"] { display: none; }
// //                     .nav-desktop { display: none !important; }
// //                     .hamburger { display: flex !important; }
// //                     .cta-inner { margin: 0 24px 60px !important; padding: 60px 28px !important; }
// //                 }
// //                 @media (max-width: 768px) {
// //                     .stats-grid { grid-template-columns: repeat(2,1fr); gap: 10px; margin-top: 48px; }
// //                     .stat-card { padding: 18px 12px; }
// //                     .stat-value { font-size: 22px !important; }
// //                 }
// //                 @media (max-width: 600px) {
// //                     .inner { padding: 0 16px; }
// //                     .features-grid { grid-template-columns: 1fr; }
// //                     .pill-btn { padding: 12px 20px; font-size: 14px; }
// //                     .hero-section { padding: 70px 0 60px !important; min-height: auto !important; }
// //                     .section-pad { padding: 60px 0 !important; }
// //                     .footer-cols { flex-direction: column !important; gap: 32px !important; }
// //                     .footer-links { flex-wrap: wrap !important; gap: 28px !important; }
// //                     .cta-inner { margin: 0 12px 48px !important; border-radius: 20px !important; padding: 48px 20px !important; }
// //                     .cta-btns { flex-direction: column !important; align-items: center !important; }
// //                     .hero-title { letter-spacing: -1px; }
// //                     .cta-h2 { font-size: 32px !important; }
// //                 }
// //                 @media (max-width: 400px) {
// //                     .stats-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
// //                     .pill-btn { padding: 11px 16px; font-size: 13px; }
// //                 }
// //             `}</style>
// //             {/* ── NAV ── */}
// //             {/* <nav style={{
// //                 background: 'rgba(250,250,248,0.9)',
// //                 backdropFilter: 'blur(16px)',
// //                 borderBottom: '1px solid #e9e9e5',
// //                 height: 64,
// //                 position: 'sticky',
// //                 top: 0,
// //                 zIndex: 100,
// //                 width: '100%'
// //             }}>
// //                 <div style={{
// //                     height: '100%',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'space-between',
// //                     width: '95vw',
// //                     marginLeft: '50%',
// //                     transform: 'translateX(-50%)',
// //                     padding: '0'
// //                 }}> */}
// //             <nav style={{
// //                 background: ' rgba(250,250,248,0.9)',
// //                 backdropFilter: 'blur(16px)',
// //                 height: 64,
// //                 position: 'sticky',
// //                 top: 0,
// //                 zIndex: 100,
// //                 width: '95vw',           // ← 90vw
// //                 marginLeft: '50%',       // ← center
// //                 transform: 'translateX(-50%)',  // ← center
// //                 borderBottom: 'none',
// //             }}>
// //                 <div style={{
// //                     height: '100%',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'space-between',
// //                     width: '95vw',
// //                     marginLeft: '50%',
// //                     transform: 'translateX(-50%)',
// //                     borderBottom: '1px solid #e9e9e5',  // ← inner div এ দাও
// //                 }}>
// //                     {/* LEFT — Logo একদম বাম কোণে */}
// //                     <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Sora,sans-serif', fontWeight: 800, fontSize: 20, background: 'linear-gradient(135deg,#534AB7 0%,#1D9E75 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.5px', flexShrink: 0 }}>
// //                         LifeInnovior
// //                     </Link>

// //                     {/* RIGHT — সব items একদম ডান কোণে */}
// //                     <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
// //                         <Link to="/find-psychologist" className="nav-link" style={{ color: '#fff', background: '#1e1b4b' }}>🧠 Find Psychologist</Link>
// //                         <Link to="/blog" className="nav-link" style={{ color: '#fff', background: '#0f2820' }}>📰 Blog</Link>
// //                         <Link to="/pricing" className="nav-link" style={{ color: '#fff', background: '#1c1007' }}>🏷️ Pricing</Link>
// //                         <div style={{ width: 1, height: 20, background: '#e9e9e5', margin: '0 8px' }} />
// //                         <Link to="/login" className="nav-link" style={{ color: '#fff', border: '1px solid #333', background: '#111' }}>Login</Link>
// //                         <Link to="/register"
// //                             style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, padding: '8px 20px', borderRadius: 10, background: '#0f0f0f', color: '#fff', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', border: '1px solid #333' }}
// //                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(83,74,183,0.35)'; }}
// //                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //                         >Get Started →</Link>
// //                     </div>

// //                     {/* Hamburger — mobile only */}
// //                     <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
// //                         <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
// //                         <span style={{ opacity: menuOpen ? 0 : 1 }} />
// //                         <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
// //                     </button>
// //                 </div>
// //             </nav>


// //             {/* Mobile menu */}
// //             <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
// //                 <Link to="/find-psychologist" onClick={() => setMenuOpen(false)}>🧠 Find Psychologist</Link>
// //                 <Link to="/blog" onClick={() => setMenuOpen(false)}>📰 Blog</Link>
// //                 <Link to="/pricing" onClick={() => setMenuOpen(false)}>🏷️ Pricing</Link>
// //                 <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
// //                 <Link to="/register" onClick={() => setMenuOpen(false)} style={{ color: '#534AB7', fontWeight: 700 }}>Get Started →</Link>
// //             </div>

// //             {/* ── HERO ── */}
// //             <div
// //                 className="hero-section"
// //                 style={{
// //                     background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 40%,#0f5e48 100%)',
// //                     padding: '100px 0 80px',
// //                     position: 'relative',
// //                     overflow: 'hidden',
// //                     minHeight: '88vh',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     width: '95vw',
// //                     marginLeft: '50%',
// //                     transform: 'translateX(-50%)',
// //                 }}
// //             >
// //                 <div className="blob" style={{ width: 500, height: 500, background: '#534AB7', top: -100, right: -100, opacity: 0.3 }} />
// //                 <div className="blob" style={{ width: 400, height: 400, background: '#1D9E75', bottom: -80, left: 50, opacity: 0.25 }} />
// //                 <div className="blob" style={{ width: 300, height: 300, background: '#D85A30', bottom: 50, right: 200, opacity: 0.15 }} />
// //                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

// //                 <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
// //                     <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
// //                         <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 28, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
// //                             <span style={{ width: 7, height: 7, background: '#5DCAA5', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #5DCAA5' }} />
// //                             Trusted by 12,000+ patients worldwide
// //                         </div>

// //                         <h1 className="hero-title fade-up delay-1">
// //                             Mental Health Care,<br />
// //                             <span style={{ background: 'linear-gradient(90deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Made Accessible</span>
// //                         </h1>

// //                         <p className="fade-up delay-2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', margin: '24px auto 40px', maxWidth: 520, lineHeight: 1.7, fontWeight: 400 }}>
// //                             Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.
// //                         </p>

// //                         <div className="hero-btns fade-up delay-3">
// //                             <Link to="/find-psychologist" className="pill-btn" style={{ background: '#fff', color: '#534AB7' }}>🧠 Find a Psychologist</Link>
// //                             <Link to="/register" className="pill-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>Join as Psychologist →</Link>
// //                         </div>

// //                         <div className="stats-grid fade-up delay-4">
// //                             {stats.map(s => (
// //                                 <div key={s.label} className="stat-card">
// //                                     <div className="stat-value" style={{ fontSize: 28, fontFamily: 'Sora,sans-serif', fontWeight: 800, color: '#fff' }}>{s.value}</div>
// //                                     <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── MARQUEE ──
// //             <div style={{ background: '#fff', borderBottom: '1px solid #e9e9e5', padding: '18px 0', overflow: 'hidden' }}>
// //                 <div style={{ display: 'flex', gap: 12, overflow: 'hidden' }}>
// //                     <div className="marquee-track">
// //                         {[...testimonials, ...testimonials].map((t, i) => (
// //                             <div key={i} className="testimonial-chip">
// //                                 <span style={{ fontSize: 16 }}>{t.emoji}</span>
// //                                 <span style={{ color: '#6b7280', fontWeight: 400 }}>{t.text}</span>
// //                                 <span style={{ fontSize: 12, color: '#aaa' }}>— {t.name}</span>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div> */}
// //             {/* ── MARQUEE ── */}
// //             {/* <div style={{
// //                 background: '#fff',
// //                 borderBottom: '1px solid #e9e9e5',
// //                 padding: '18px 0',
// //                 width: '95vw',
// //                 maxWidth: '95vw',
// //                 marginLeft: '50%',
// //                 transform: 'translateX(-50%)',
// //                 overflow: 'hidden',
// //                 boxSizing: 'border-box',
// //             }}>
// //                 <div className="marquee-track">
// //                     {[...testimonials, ...testimonials].map((t, i) => (
// //                         <div key={i} className="testimonial-chip">
// //                             <span style={{ fontSize: 16 }}>{t.emoji}</span>
// //                             <span style={{ color: '#6b7280', fontWeight: 400 }}>{t.text}</span>
// //                             <span style={{ fontSize: 12, color: '#aaa' }}>— {t.name}</span>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div> */}

// //             {/* ── FEATURES ── */}
// //             <div className="section-pad" style={{ padding: '100px 0', background: '#FAFAF8' }}>
// //                 <div className="inner">
// //                     <div style={{ textAlign: 'center', marginBottom: 60 }}>
// //                         <span style={{ display: 'inline-block', background: '#EEEDFE', color: '#534AB7', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Why LifeInnovior</span>
// //                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px', marginBottom: 12 }}>Everything You Need</h2>
// //                         <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>A complete platform for modern mental health care</p>
// //                     </div>
// //                     <div className="features-grid">
// //                         {features.map(f => (
// //                             <div key={f.title} className="feature-card">
// //                                 <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: f.accent, borderRadius: '0 20px 0 100%', opacity: 0.6 }} />
// //                                 <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 14, background: f.accent, border: `1px solid ${f.border}`, fontSize: 26, marginBottom: 18, position: 'relative' }}>{f.icon}</div>
// //                                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
// //                                     <h3 style={{ fontSize: 17, fontWeight: 600 }}>{f.title}</h3>
// //                                     <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: f.accent, color: f.border, border: `1px solid ${f.border}` }}>{f.tag}</span>
// //                                 </div>
// //                                 <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.7 }}>{f.desc}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── HOW IT WORKS ── */}
// //             <div className="section-pad" style={{ padding: '100px 0', background: '#fff' }}>
// //                 <div className="inner">
// //                     <div style={{ textAlign: 'center', marginBottom: 72 }}>
// //                         <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Simple Process</span>
// //                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px' }}>How It Works</h2>
// //                     </div>
// //                     <div className="steps-grid">
// //                         {steps.map((s, i) => (
// //                             <div key={s.step} style={{ position: 'relative' }}>
// //                                 {i < steps.length - 1 && (
// //                                     <div style={{ position: 'absolute', top: 32, left: '60%', width: '80%', height: 2, background: `linear-gradient(90deg,${s.color}40,${steps[i + 1].color}40)`, zIndex: 0 }} />
// //                                 )}
// //                                 <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: s.color, color: '#fff', fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 24, position: 'relative', zIndex: 1, boxShadow: `0 12px 32px ${s.color}40` }}>{s.step}</div>
// //                                 <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, fontFamily: 'Sora,sans-serif' }}>{s.title}</h3>
// //                                 <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75 }}>{s.desc}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── CTA ── */}
// //             <div className="cta-inner" style={{ margin: '0 48px 80px', borderRadius: 28, background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 50%,#0f5e48 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
// //                 <div className="blob" style={{ width: 350, height: 350, background: '#534AB7', top: -100, right: -50 }} />
// //                 <div className="blob" style={{ width: 250, height: 250, background: '#1D9E75', bottom: -60, left: 80 }} />
// //                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
// //                 <div style={{ position: 'relative', zIndex: 1 }}>
// //                     <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '5px 16px', fontSize: 12, fontWeight: 600, color: '#9F99E8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 24 }}>Free 14-day trial</div>
// //                     <h2 className="cta-h2" style={{ fontFamily: 'Sora,sans-serif', fontSize: 46, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: 16 }}>Ready to Get Started?</h2>
// //                     <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 420, margin: '0 auto 40px' }}>
// //                         Join LifeInnovior today. Free 14-day trial for psychologists. No credit card required.
// //                     </p>
// //                     <div className="cta-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
// //                         <Link to="/register" className="pill-btn" style={{ background: '#fff', color: '#534AB7', fontSize: 16, padding: '16px 36px' }}>Create Free Account</Link>
// //                         <Link to="/pricing" className="pill-btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', fontSize: 16, padding: '16px 36px' }}>View Pricing →</Link>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── FOOTER ── */}
// //             <footer style={{ background: '#111', color: '#9CA3AF', padding: '48px 0 32px' }}>
// //                 <div className="inner">
// //                     <div className="footer-cols" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
// //                         <div>
// //                             <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 10, background: 'linear-gradient(135deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LifeInnovior</div>
// //                             <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 260, lineHeight: 1.7 }}>Modern mental health care for everyone, everywhere.</p>
// //                         </div>
// //                         <div className="footer-links" style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
// //                             {[
// //                                 { label: 'Platform', links: ['Find Psychologist', 'How It Works', 'Pricing'] },
// //                                 { label: 'Company', links: ['About', 'Blog', 'Careers'] },
// //                                 { label: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
// //                             ].map(col => (
// //                                 <div key={col.label}>
// //                                     <div style={{ fontSize: 12, fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>{col.label}</div>
// //                                     {col.links.map(l => (
// //                                         <div key={l} style={{ fontSize: 14, color: '#6b7280', marginBottom: 10, cursor: 'pointer' }}>{l}</div>
// //                                     ))}
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                     <div style={{ borderTop: '1px solid #222', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
// //                         <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</p>
// //                         <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
// //                             <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
// //                             <span style={{ cursor: 'pointer' }}>Terms of Service</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </footer>
// //         </div>
// //     );
// // }
// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // const features = [
// //     { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.', accent: '#E1F5EE', border: '#5DCAA5', tag: 'Live Sessions' },
// //     { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.', accent: '#EEEDFE', border: '#AFA9EC', tag: 'Instant' },
// //     { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.', accent: '#FAEEDA', border: '#EF9F27', tag: 'Private' },
// //     { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.', accent: '#FAECE7', border: '#F0997B', tag: 'From $29' },
// //     { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.', accent: '#EAF3DE', border: '#97C459', tag: 'E2E Encrypted' },
// //     { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.', accent: '#E6F1FB', border: '#85B7EB', tag: 'Cross-platform' },
// // ];

// // const steps = [
// //     { step: '01', title: 'Find a Psychologist', desc: 'Browse verified psychologists by specialization, language, and availability.', color: '#534AB7' },
// //     { step: '02', title: 'Book a Session', desc: 'Choose a time slot that works for you and confirm your booking in seconds.', color: '#1D9E75' },
// //     { step: '03', title: 'Start Your Journey', desc: 'Join a secure video call and take the first step toward better mental health.', color: '#D85A30' },
// // ];

// // const stats = [
// //     { value: '12,000+', label: 'Patients Helped' },
// //     { value: '800+', label: 'Licensed Psychologists' },
// //     { value: '98%', label: 'Satisfaction Rate' },
// //     { value: '4.9★', label: 'Average Rating' },
// // ];

// // const testimonials = [
// //     { name: 'Aisha R.', text: 'Finally found a therapist I connect with', emoji: '🌸', color: 'purple' },
// //     { name: 'James M.', text: 'Booking was effortless. 10/10 experience', emoji: '⭐', color: 'amber' },
// //     { name: 'Priya K.', text: 'Feels like real in-person therapy', emoji: '💙', color: 'teal' },
// //     { name: 'Omar S.', text: 'Changed my life in just 4 sessions', emoji: '🌿', color: 'teal' },
// //     { name: 'Lena W.', text: "The most secure platform I've used", emoji: '🔐', color: 'purple' },
// //     { name: 'Carlos D.', text: 'Perfect for my busy schedule', emoji: '⚡', color: 'amber' },
// //     { name: 'Sofia T.', text: 'My anxiety is so much better now', emoji: '🌺', color: 'pink' },
// //     { name: 'Ravi M.', text: 'Found the perfect specialist within minutes', emoji: '🧠', color: 'purple' },
// // ];

// // export default function Home() {
// //     const [menuOpen, setMenuOpen] = useState(false);

// //     return (
// //         <div style={{ fontFamily: "'DM Sans','Sora',sans-serif", background: '#FAFAF8', color: '#1a1a1a', overflowX: 'hidden', width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
// //             <style>{`
// //                 @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@700;800&display=swap');
// //                 *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
// //                 html, body, #root { overflow-x: hidden; width: 100%; max-width: 100%; margin: 0; padding: 0; }

// //                 .inner { max-width: 1400px; margin: 0 auto; padding: 0 48px; width: 100%; }

// //                 .nav-link { text-decoration: none; font-size: 14px; font-weight: 500; padding: 7px 14px; border-radius: 999px; transition: all 0.2s; white-space: nowrap; }

// //                 .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
// //                 .hamburger span { display: block; width: 22px; height: 2px; background: #534AB7; border-radius: 2px; transition: all 0.3s; }

// //                 .mobile-menu { display: none; flex-direction: column; background: rgba(250,250,248,0.98); border-bottom: 1px solid #e9e9e5; }
// //                 .mobile-menu.open { display: flex; }
// //                 .mobile-menu a { text-decoration: none; font-size: 15px; font-weight: 500; color: #1a1a1a; padding: 13px 24px; border-bottom: 1px solid #f0f0ec; }

// //                 .hero-title { font-family: 'Sora',sans-serif; font-size: clamp(32px, 5vw, 76px); font-weight: 800; line-height: 1.08; letter-spacing: -2px; color: #fff; }

// //                 .feature-card { background: #fff; border-radius: 20px; border: 1px solid #e9e9e5; padding: 28px; transition: transform 0.25s, box-shadow 0.25s; cursor: default; position: relative; overflow: hidden; }
// //                 .feature-card:hover { transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }

// //                 .stat-card { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 20px 16px; text-align: center; backdrop-filter: blur(8px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }

// //                 .pill-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 999px; font-size: 15px; font-weight: 600; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border: none; }
// //                 .pill-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }

// //                 /* ── MARQUEE ── */
// //                 .mq-track-fwd { display: flex; gap: 10px; width: max-content; animation: mq-fwd 28s linear infinite; }
// //                 .mq-track-rev { display: flex; gap: 10px; width: max-content; animation: mq-rev 32s linear infinite; }
// //                 @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
// //                 @keyframes mq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }

// //                 .t-chip { display: inline-flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 999px; white-space: nowrap; flex-shrink: 0; font-size: 13px; font-weight: 500; border: 1px solid; transition: transform .2s; }
// //                 .t-chip:hover { transform: scale(1.04); }
// //                 .chip-purple { background: rgba(83,74,183,0.08);  border-color: rgba(83,74,183,0.25);  color: #3b3580; }
// //                 .chip-teal   { background: rgba(29,158,117,0.08); border-color: rgba(29,158,117,0.25); color: #0f6e56; }
// //                 .chip-amber  { background: rgba(239,159,39,0.1);  border-color: rgba(239,159,39,0.3);  color: #854F0B; }
// //                 .chip-pink   { background: rgba(216,90,48,0.08);  border-color: rgba(216,90,48,0.25);  color: #a33a1a; }

// //                 .chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
// //                 .dot-purple { background: #534AB7; box-shadow: 0 0 7px rgba(83,74,183,0.7); }
// //                 .dot-teal   { background: #1D9E75; box-shadow: 0 0 7px rgba(29,158,117,0.7); }
// //                 .dot-amber  { background: #EF9F27; box-shadow: 0 0 7px rgba(239,159,39,0.7); }
// //                 .dot-pink   { background: #D85A30; box-shadow: 0 0 7px rgba(216,90,48,0.7); }

// //                 @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// //                 .fade-up { animation: fadeUp 0.7s ease forwards; }
// //                 .delay-1 { animation-delay: 0.1s; }
// //                 .delay-2 { animation-delay: 0.2s; }
// //                 .delay-3 { animation-delay: 0.3s; }
// //                 .delay-4 { animation-delay: 0.4s; }

// //                 .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; pointer-events: none; }

// //                 .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 64px; }
// //                 .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
// //                 .steps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 32px; position: relative; }
// //                 .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

// //                 @media (max-width: 1200px) { .inner { padding: 0 32px; } .cta-inner { margin: 0 32px 80px !important; } }
// //                 @media (max-width: 900px) {
// //                     .inner { padding: 0 24px; }
// //                     .features-grid { grid-template-columns: repeat(2,1fr); }
// //                     .steps-grid { grid-template-columns: 1fr; gap: 40px; }
// //                     .steps-grid > div > div[style*="position: absolute"] { display: none; }
// //                     .nav-desktop { display: none !important; }
// //                     .hamburger { display: flex !important; }
// //                     .cta-inner { margin: 0 24px 60px !important; padding: 60px 28px !important; }
// //                 }
// //                 @media (max-width: 768px) {
// //                     .stats-grid { grid-template-columns: repeat(2,1fr); gap: 10px; margin-top: 48px; }
// //                     .stat-card { padding: 18px 12px; }
// //                     .stat-value { font-size: 22px !important; }
// //                 }
// //                 @media (max-width: 600px) {
// //                     .inner { padding: 0 16px; }
// //                     .features-grid { grid-template-columns: 1fr; }
// //                     .pill-btn { padding: 12px 20px; font-size: 14px; }
// //                     .hero-section { padding: 70px 0 60px !important; min-height: auto !important; }
// //                     .section-pad { padding: 60px 0 !important; }
// //                     .footer-cols { flex-direction: column !important; gap: 32px !important; }
// //                     .footer-links { flex-wrap: wrap !important; gap: 28px !important; }
// //                     .cta-inner { margin: 0 12px 48px !important; border-radius: 20px !important; padding: 48px 20px !important; }
// //                     .cta-btns { flex-direction: column !important; align-items: center !important; }
// //                     .hero-title { letter-spacing: -1px; }
// //                     .cta-h2 { font-size: 32px !important; }
// //                 }
// //                 @media (max-width: 400px) {
// //                     .stats-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
// //                     .pill-btn { padding: 11px 16px; font-size: 13px; }
// //                 }
// //             `}</style>

// //             {/* ── NAV ── */}
// //             <nav style={{
// //                 background: 'rgba(250,250,248,0.9)',
// //                 backdropFilter: 'blur(16px)',
// //                 height: 64,
// //                 position: 'sticky',
// //                 top: 0,
// //                 zIndex: 100,
// //                 width: '95vw',
// //                 marginLeft: '50%',
// //                 transform: 'translateX(-50%)',
// //                 borderBottom: 'none',
// //             }}>
// //                 <div style={{
// //                     height: '100%',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'space-between',
// //                     width: '95vw',
// //                     marginLeft: '50%',
// //                     transform: 'translateX(-50%)',
// //                     borderBottom: '1px solid #e9e9e5',
// //                 }}>
// //                     <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Sora,sans-serif', fontWeight: 800, fontSize: 20, background: 'linear-gradient(135deg,#534AB7 0%,#1D9E75 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.5px', flexShrink: 0 }}>
// //                         LifeInnovior
// //                     </Link>

// //                     <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
// //                         <Link to="/find-psychologist" className="nav-link" style={{ color: '#fff', background: '#1e1b4b' }}>🧠 Find Psychologist</Link>
// //                         <Link to="/blog" className="nav-link" style={{ color: '#fff', background: '#0f2820' }}>📰 Blog</Link>
// //                         <Link to="/pricing" className="nav-link" style={{ color: '#fff', background: '#1c1007' }}>🏷️ Pricing</Link>
// //                         <div style={{ width: 1, height: 20, background: '#e9e9e5', margin: '0 8px' }} />
// //                         <Link to="/login" className="nav-link" style={{ color: '#fff', border: '1px solid #333', background: '#111' }}>Login</Link>
// //                         <Link to="/register"
// //                             style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, padding: '8px 20px', borderRadius: 10, background: '#0f0f0f', color: '#fff', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', border: '1px solid #333' }}
// //                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(83,74,183,0.35)'; }}
// //                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //                         >Get Started →</Link>
// //                     </div>

// //                     <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
// //                         <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
// //                         <span style={{ opacity: menuOpen ? 0 : 1 }} />
// //                         <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
// //                     </button>
// //                 </div>
// //             </nav>

// //             {/* Mobile menu */}
// //             <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
// //                 <Link to="/find-psychologist" onClick={() => setMenuOpen(false)}>🧠 Find Psychologist</Link>
// //                 <Link to="/blog" onClick={() => setMenuOpen(false)}>📰 Blog</Link>
// //                 <Link to="/pricing" onClick={() => setMenuOpen(false)}>🏷️ Pricing</Link>
// //                 <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
// //                 <Link to="/register" onClick={() => setMenuOpen(false)} style={{ color: '#534AB7', fontWeight: 700 }}>Get Started →</Link>
// //             </div>

// //             {/* ── HERO ── */}
// //             <div
// //                 className="hero-section"
// //                 style={{
// //                     background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 40%,#0f5e48 100%)',
// //                     padding: '100px 0 80px',
// //                     position: 'relative',
// //                     overflow: 'hidden',
// //                     minHeight: '88vh',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     width: '95vw',
// //                     marginLeft: '50%',
// //                     transform: 'translateX(-50%)',
// //                 }}
// //             >
// //                 <div className="blob" style={{ width: 500, height: 500, background: '#534AB7', top: -100, right: -100, opacity: 0.3 }} />
// //                 <div className="blob" style={{ width: 400, height: 400, background: '#1D9E75', bottom: -80, left: 50, opacity: 0.25 }} />
// //                 <div className="blob" style={{ width: 300, height: 300, background: '#D85A30', bottom: 50, right: 200, opacity: 0.15 }} />
// //                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

// //                 <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
// //                     <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
// //                         <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 28, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
// //                             <span style={{ width: 7, height: 7, background: '#5DCAA5', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #5DCAA5' }} />
// //                             Trusted by 12,000+ patients worldwide
// //                         </div>

// //                         <h1 className="hero-title fade-up delay-1">
// //                             Mental Health Care,<br />
// //                             <span style={{ background: 'linear-gradient(90deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Made Accessible</span>
// //                         </h1>

// //                         <p className="fade-up delay-2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', margin: '24px auto 40px', maxWidth: 520, lineHeight: 1.7, fontWeight: 400 }}>
// //                             Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.
// //                         </p>

// //                         <div className="hero-btns fade-up delay-3">
// //                             <Link to="/find-psychologist" className="pill-btn" style={{ background: '#fff', color: '#534AB7' }}>🧠 Find a Psychologist</Link>
// //                             <Link to="/register" className="pill-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>Join as Psychologist →</Link>
// //                         </div>

// //                         <div className="stats-grid fade-up delay-4">
// //                             {stats.map(s => (
// //                                 <div key={s.label} className="stat-card">
// //                                     <div className="stat-value" style={{ fontSize: 28, fontFamily: 'Sora,sans-serif', fontWeight: 800, color: '#fff' }}>{s.value}</div>
// //                                     <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── MARQUEE ── */}
// //             <div style={{
// //                 position: 'relative',
// //                 background: '#fff',
// //                 padding: '28px 0',
// //                 overflow: 'hidden',
// //                 borderTop: '1px solid #e9e9e5',
// //                 borderBottom: '1px solid #e9e9e5',
// //                 width: '95vw',
// //                 maxWidth: '95vw',
// //                 marginLeft: '50%',
// //                 transform: 'translateX(-50%)',
// //                 boxSizing: 'border-box',
// //             }}>
// //                 {/* subtle glow */}
// //                 <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(83,74,183,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
// //                 {/* fade edges */}
// //                 <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
// //                 <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />

// //                 {/* label */}
// //                 <div style={{ textAlign: 'center', fontSize: 10.5, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(83,74,183,0.45)', marginBottom: 18, position: 'relative', zIndex: 3 }}>
// //                     What our patients are saying
// //                 </div>

// //                 {/* Row 1 — forward */}
// //                 <div style={{ overflow: 'hidden', marginBottom: 10 }}>
// //                     <div className="mq-track-fwd">
// //                         {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((t, i) => (
// //                             <div key={i} className={`t-chip chip-${t.color}`}>
// //                                 <span className={`chip-dot dot-${t.color}`} />
// //                                 <span style={{ fontSize: 15 }}>{t.emoji}</span>
// //                                 <span>{t.text}</span>
// //                                 <span style={{ fontSize: 11, color: '#aaa' }}>— {t.name}</span>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 {/* Row 2 — reverse */}
// //                 <div style={{ overflow: 'hidden' }}>
// //                     <div className="mq-track-rev">
// //                         {[...testimonials.slice(2), ...testimonials.slice(2)].map((t, i) => (
// //                             <div key={i} className={`t-chip chip-${t.color}`}>
// //                                 <span className={`chip-dot dot-${t.color}`} />
// //                                 <span style={{ fontSize: 15 }}>{t.emoji}</span>
// //                                 <span>{t.text}</span>
// //                                 <span style={{ fontSize: 11, color: '#aaa' }}>— {t.name}</span>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── FEATURES ── */}
// //             <div className="section-pad" style={{ padding: '100px 0', background: '#FAFAF8' }}>
// //                 <div className="inner">
// //                     <div style={{ textAlign: 'center', marginBottom: 60 }}>
// //                         <span style={{ display: 'inline-block', background: '#EEEDFE', color: '#534AB7', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Why LifeInnovior</span>
// //                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px', marginBottom: 12 }}>Everything You Need</h2>
// //                         <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>A complete platform for modern mental health care</p>
// //                     </div>
// //                     <div className="features-grid">
// //                         {features.map(f => (
// //                             <div key={f.title} className="feature-card">
// //                                 <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: f.accent, borderRadius: '0 20px 0 100%', opacity: 0.6 }} />
// //                                 <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 14, background: f.accent, border: `1px solid ${f.border}`, fontSize: 26, marginBottom: 18, position: 'relative' }}>{f.icon}</div>
// //                                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
// //                                     <h3 style={{ fontSize: 17, fontWeight: 600 }}>{f.title}</h3>
// //                                     <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: f.accent, color: f.border, border: `1px solid ${f.border}` }}>{f.tag}</span>
// //                                 </div>
// //                                 <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.7 }}>{f.desc}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── HOW IT WORKS ──
// //             <div className="section-pad" style={{ padding: '100px 0', background: '#fff' }}>
// //                 <div className="inner">
// //                     <div style={{ textAlign: 'center', marginBottom: 72 }}>
// //                         <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Simple Process</span>
// //                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px' }}>How It Works</h2>
// //                     </div>
// //                     <div className="steps-grid">
// //                         {steps.map((s, i) => (
// //                             <div key={s.step} style={{ position: 'relative' }}>
// //                                 {i < steps.length - 1 && (
// //                                     <div style={{ position: 'absolute', top: 32, left: '60%', width: '80%', height: 2, background: `linear-gradient(90deg,${s.color}40,${steps[i + 1].color}40)`, zIndex: 0 }} />
// //                                 )}
// //                                 <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: s.color, color: '#fff', fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 24, position: 'relative', zIndex: 1, boxShadow: `0 12px 32px ${s.color}40` }}>{s.step}</div>
// //                                 <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, fontFamily: 'Sora,sans-serif' }}>{s.title}</h3>
// //                                 <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75 }}>{s.desc}</p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div> */}

// //             {/* ── HOW IT WORKS ── */}
// //             <div className="section-pad hiw-section" style={{ padding: '100px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
// //                 {/* top glow */}
// //                 <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse,rgba(83,74,183,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />

// //                 <div className="inner">
// //                     {/* heading */}
// //                     <div style={{ textAlign: 'center', marginBottom: 72 }}>
// //                         <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11.5, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Simple Process</span>
// //                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px', color: '#111', marginBottom: 10 }}>How It Works</h2>
// //                         <p style={{ color: '#6b7280', fontSize: 16, maxWidth: 440, margin: '0 auto' }}>Three simple steps to start your mental health journey today</p>
// //                     </div>

// //                     {/* steps grid */}
// //                     <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, position: 'relative' }}>

// //                         {/* connector lines — desktop only */}
// //                         <div className="hiw-connector" style={{ position: 'absolute', top: 52, left: 'calc(33.33% + 20px)', width: 'calc(33.33% - 40px)', height: 2, background: 'linear-gradient(90deg,#AFA9EC,#5DCAA5)', borderRadius: 2, zIndex: 0 }} />
// //                         <div className="hiw-connector" style={{ position: 'absolute', top: 52, left: 'calc(66.66% + 20px)', width: 'calc(33.33% - 40px)', height: 2, background: 'linear-gradient(90deg,#5DCAA5,#EF9F27)', borderRadius: 2, zIndex: 0 }} />

// //                         {[
// //                             {
// //                                 step: '01', label: 'Step One', title: 'Find a Psychologist',
// //                                 desc: 'Browse verified psychologists by specialization, language, and availability.',
// //                                 tag: '🧠 Browse Profiles', color: '#534AB7', accent: '#EEEDFE', border: '#AFA9EC',
// //                                 tagColor: '#534AB7', cornerBg: '#EEEDFE', ringBorder: 'rgba(83,74,183,0.3)',
// //                             },
// //                             {
// //                                 step: '02', label: 'Step Two', title: 'Book a Session',
// //                                 desc: 'Choose a time slot that works for you and confirm your booking in seconds.',
// //                                 tag: '📅 Pick a Time', color: '#1D9E75', accent: '#E1F5EE', border: '#5DCAA5',
// //                                 tagColor: '#0F6E56', cornerBg: '#E1F5EE', ringBorder: 'rgba(29,158,117,0.3)',
// //                             },
// //                             {
// //                                 step: '03', label: 'Step Three', title: 'Start Your Journey',
// //                                 desc: 'Join a secure video call and take the first step toward better mental health.',
// //                                 tag: '🎥 Join Session', color: '#EF9F27', accent: '#FAEEDA', border: '#EF9F27',
// //                                 tagColor: '#854F0B', cornerBg: '#FAEEDA', ringBorder: 'rgba(239,159,39,0.3)',
// //                             },
// //                         ].map((s) => (
// //                             <div
// //                                 key={s.step}
// //                                 className="hiw-card"
// //                                 style={{
// //                                     background: '#fff',
// //                                     border: '1px solid #e9e9e5',
// //                                     borderRadius: 24,
// //                                     padding: '32px 28px',
// //                                     position: 'relative',
// //                                     zIndex: 1,
// //                                     overflow: 'hidden',
// //                                     transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
// //                                     cursor: 'default',
// //                                 }}
// //                                 onMouseEnter={e => {
// //                                     e.currentTarget.style.transform = 'translateY(-6px)';
// //                                     e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.09)';
// //                                     e.currentTarget.style.borderColor = s.border;
// //                                 }}
// //                                 onMouseLeave={e => {
// //                                     e.currentTarget.style.transform = 'none';
// //                                     e.currentTarget.style.boxShadow = 'none';
// //                                     e.currentTarget.style.borderColor = '#e9e9e5';
// //                                 }}
// //                             >
// //                                 {/* corner accent */}
// //                                 <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, borderRadius: '0 24px 0 80px', background: s.cornerBg, opacity: 0.7, pointerEvents: 'none' }} />

// //                                 {/* number with dashed ring */}
// //                                 <div style={{ position: 'relative', display: 'inline-flex', marginBottom: 24 }}>
// //                                     <div style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: `2px dashed ${s.ringBorder}` }} />
// //                                     <div style={{ width: 60, height: 60, borderRadius: '50%', background: s.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 800, position: 'relative', zIndex: 1, boxShadow: `0 10px 28px ${s.color}40` }}>
// //                                         {s.step}
// //                                     </div>
// //                                 </div>

// //                                 {/* step label */}
// //                                 <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: s.color, marginBottom: 10 }}>{s.label}</div>

// //                                 <h3 style={{ fontFamily: 'Sora,sans-serif', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 10 }}>{s.title}</h3>
// //                                 <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.75 }}>{s.desc}</p>

// //                                 {/* tag */}
// //                                 <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11.5, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginTop: 20, background: s.accent, color: s.tagColor, border: `1px solid ${s.border}` }}>
// //                                     {s.tag}
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>


// // /* ─────────────────────────────────────────
// //             এই CSS টুকু তোমার <style>{`...`}</style>
// //             এর ভেতরে যোগ করো
// //             ───────────────────────────────────────── */

// //             .hiw-grid {display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; position: relative; }

// //             /* tablet */
// //             @media (max-width: 900px) {
// //     .hiw - grid {grid - template - columns: 1fr; gap: 16px; }
// //             .hiw-connector {display: none !important; }
// //             .hiw-card {border - radius: 20px !important; padding: 28px 22px !important; }
// // }

// //             /* large mobile */
// //             @media (max-width: 600px) {
// //     .hiw - section {padding: 64px 0 !important; }
// //             .hiw-card {padding: 24px 18px !important; border-radius: 18px !important; }
// // }

// //             /* small mobile */
// //             @media (max-width: 400px) {
// //     .hiw - card {padding: 20px 14px !important; border-radius: 16px !important; }
// // }

// //             {/* ── CTA ── */}
// //             <div className="cta-inner" style={{ margin: '0 48px 80px', borderRadius: 28, background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 50%,#0f5e48 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
// //                 <div className="blob" style={{ width: 350, height: 350, background: '#534AB7', top: -100, right: -50 }} />
// //                 <div className="blob" style={{ width: 250, height: 250, background: '#1D9E75', bottom: -60, left: 80 }} />
// //                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
// //                 <div style={{ position: 'relative', zIndex: 1 }}>
// //                     <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '5px 16px', fontSize: 12, fontWeight: 600, color: '#9F99E8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 24 }}>Free 14-day trial</div>
// //                     <h2 className="cta-h2" style={{ fontFamily: 'Sora,sans-serif', fontSize: 46, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: 16 }}>Ready to Get Started?</h2>
// //                     <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 420, margin: '0 auto 40px' }}>
// //                         Join LifeInnovior today. Free 14-day trial for psychologists. No credit card required.
// //                     </p>
// //                     <div className="cta-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
// //                         <Link to="/register" className="pill-btn" style={{ background: '#fff', color: '#534AB7', fontSize: 16, padding: '16px 36px' }}>Create Free Account</Link>
// //                         <Link to="/pricing" className="pill-btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', fontSize: 16, padding: '16px 36px' }}>View Pricing →</Link>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* ── FOOTER ── */}
// //             <footer style={{ background: '#111', color: '#9CA3AF', padding: '48px 0 32px' }}>
// //                 <div className="inner">
// //                     <div className="footer-cols" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
// //                         <div>
// //                             <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 10, background: 'linear-gradient(135deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LifeInnovior</div>
// //                             <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 260, lineHeight: 1.7 }}>Modern mental health care for everyone, everywhere.</p>
// //                         </div>
// //                         <div className="footer-links" style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
// //                             {[
// //                                 { label: 'Platform', links: ['Find Psychologist', 'How It Works', 'Pricing'] },
// //                                 { label: 'Company', links: ['About', 'Blog', 'Careers'] },
// //                                 { label: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
// //                             ].map(col => (
// //                                 <div key={col.label}>
// //                                     <div style={{ fontSize: 12, fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>{col.label}</div>
// //                                     {col.links.map(l => (
// //                                         <div key={l} style={{ fontSize: 14, color: '#6b7280', marginBottom: 10, cursor: 'pointer' }}>{l}</div>
// //                                     ))}
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //                     <div style={{ borderTop: '1px solid #222', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
// //                         <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</p>
// //                         <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
// //                             <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
// //                             <span style={{ cursor: 'pointer' }}>Terms of Service</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </footer>
// //         </div>
// //     );
// // }

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const features = [
//     { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.', accent: '#E1F5EE', border: '#5DCAA5', tag: 'Live Sessions' },
//     { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.', accent: '#EEEDFE', border: '#AFA9EC', tag: 'Instant' },
//     { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.', accent: '#FAEEDA', border: '#EF9F27', tag: 'Private' },
//     { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.', accent: '#FAECE7', border: '#F0997B', tag: 'From $29' },
//     { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.', accent: '#EAF3DE', border: '#97C459', tag: 'E2E Encrypted' },
//     { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.', accent: '#E6F1FB', border: '#85B7EB', tag: 'Cross-platform' },
// ];

// const stats = [
//     { value: '12,000+', label: 'Patients Helped' },
//     { value: '800+', label: 'Licensed Psychologists' },
//     { value: '98%', label: 'Satisfaction Rate' },
//     { value: '4.9★', label: 'Average Rating' },
// ];

// const testimonials = [
//     { name: 'Aisha R.', text: 'Finally found a therapist I connect with', emoji: '🌸', color: 'purple' },
//     { name: 'James M.', text: 'Booking was effortless. 10/10 experience', emoji: '⭐', color: 'amber' },
//     { name: 'Priya K.', text: 'Feels like real in-person therapy', emoji: '💙', color: 'teal' },
//     { name: 'Omar S.', text: 'Changed my life in just 4 sessions', emoji: '🌿', color: 'teal' },
//     { name: 'Lena W.', text: "The most secure platform I've used", emoji: '🔐', color: 'purple' },
//     { name: 'Carlos D.', text: 'Perfect for my busy schedule', emoji: '⚡', color: 'amber' },
//     { name: 'Sofia T.', text: 'My anxiety is so much better now', emoji: '🌺', color: 'pink' },
//     { name: 'Ravi M.', text: 'Found the perfect specialist within minutes', emoji: '🧠', color: 'purple' },
// ];

// const hiwSteps = [
//     {
//         step: '01', label: 'Step One', title: 'Find a Psychologist',
//         desc: 'Browse verified psychologists by specialization, language, and availability.',
//         tag: '🧠 Browse Profiles', color: '#534AB7', accent: '#EEEDFE', border: '#AFA9EC',
//         tagColor: '#534AB7', cornerBg: '#EEEDFE', ringBorder: 'rgba(83,74,183,0.3)',
//     },
//     {
//         step: '02', label: 'Step Two', title: 'Book a Session',
//         desc: 'Choose a time slot that works for you and confirm your booking in seconds.',
//         tag: '📅 Pick a Time', color: '#1D9E75', accent: '#E1F5EE', border: '#5DCAA5',
//         tagColor: '#0F6E56', cornerBg: '#E1F5EE', ringBorder: 'rgba(29,158,117,0.3)',
//     },
//     {
//         step: '03', label: 'Step Three', title: 'Start Your Journey',
//         desc: 'Join a secure video call and take the first step toward better mental health.',
//         tag: '🎥 Join Session', color: '#EF9F27', accent: '#FAEEDA', border: '#EF9F27',
//         tagColor: '#854F0B', cornerBg: '#FAEEDA', ringBorder: 'rgba(239,159,39,0.3)',
//     },
// ];

// export default function Home() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <div style={{ fontFamily: "'DM Sans','Sora',sans-serif", background: '#FAFAF8', color: '#1a1a1a', overflowX: 'hidden', width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@700;800&display=swap');
//                 *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//                 html, body, #root { overflow-x: hidden; width: 100%; max-width: 100%; margin: 0; padding: 0; }

//                 .inner { max-width: 1400px; margin: 0 auto; padding: 0 48px; width: 100%; }

//                 .nav-link { text-decoration: none; font-size: 14px; font-weight: 500; padding: 7px 14px; border-radius: 999px; transition: all 0.2s; white-space: nowrap; }

//                 .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
//                 .hamburger span { display: block; width: 22px; height: 2px; background: #534AB7; border-radius: 2px; transition: all 0.3s; }

//                 .mobile-menu { display: none; flex-direction: column; background: rgba(250,250,248,0.98); border-bottom: 1px solid #e9e9e5; }
//                 .mobile-menu.open { display: flex; }
//                 .mobile-menu a { text-decoration: none; font-size: 15px; font-weight: 500; color: #1a1a1a; padding: 13px 24px; border-bottom: 1px solid #f0f0ec; }

//                 .hero-title { font-family: 'Sora',sans-serif; font-size: clamp(28px, 5vw, 76px); font-weight: 800; line-height: 1.08; letter-spacing: -2px; color: #fff; }

//                 .feature-card { background: #fff; border-radius: 20px; border: 1px solid #e9e9e5; padding: 28px; transition: transform 0.25s, box-shadow 0.25s; cursor: default; position: relative; overflow: hidden; }
//                 .feature-card:hover { transform: translateY(-5px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }

//                 .stat-card { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 20px 16px; text-align: center; backdrop-filter: blur(8px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }

//                 .pill-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 999px; font-size: 15px; font-weight: 600; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border: none; }
//                 .pill-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }

//                 /* ── MARQUEE ── */
//                 .mq-track-fwd { display: flex; gap: 10px; width: max-content; animation: mq-fwd 28s linear infinite; }
//                 .mq-track-rev { display: flex; gap: 10px; width: max-content; animation: mq-rev 32s linear infinite; }
//                 @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
//                 @keyframes mq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
//                 .t-chip { display: inline-flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 999px; white-space: nowrap; flex-shrink: 0; font-size: 13px; font-weight: 500; border: 1px solid; transition: transform .2s; }
//                 .t-chip:hover { transform: scale(1.04); }
//                 .chip-purple { background: rgba(83,74,183,0.08);  border-color: rgba(83,74,183,0.25);  color: #3b3580; }
//                 .chip-teal   { background: rgba(29,158,117,0.08); border-color: rgba(29,158,117,0.25); color: #0f6e56; }
//                 .chip-amber  { background: rgba(239,159,39,0.1);  border-color: rgba(239,159,39,0.3);  color: #854F0B; }
//                 .chip-pink   { background: rgba(216,90,48,0.08);  border-color: rgba(216,90,48,0.25);  color: #a33a1a; }
//                 .chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
//                 .dot-purple { background: #534AB7; box-shadow: 0 0 7px rgba(83,74,183,0.7); }
//                 .dot-teal   { background: #1D9E75; box-shadow: 0 0 7px rgba(29,158,117,0.7); }
//                 .dot-amber  { background: #EF9F27; box-shadow: 0 0 7px rgba(239,159,39,0.7); }
//                 .dot-pink   { background: #D85A30; box-shadow: 0 0 7px rgba(216,90,48,0.7); }

//                 /* ── HOW IT WORKS ── */
//                 .hiw-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; position: relative; }
//                 .hiw-card { background: #fff; border: 1px solid #e9e9e5; border-radius: 24px; padding: 32px 28px; position: relative; z-index: 1; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s; cursor: default; }
//                 .hiw-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(0,0,0,0.09); }

//                 @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//                 .fade-up { animation: fadeUp 0.7s ease forwards; }
//                 .delay-1 { animation-delay: 0.1s; }
//                 .delay-2 { animation-delay: 0.2s; }
//                 .delay-3 { animation-delay: 0.3s; }
//                 .delay-4 { animation-delay: 0.4s; }

//                 .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; pointer-events: none; }

//                 .stats-grid    { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 64px; }
//                 .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
//                 .hero-btns     { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

//                 // /* ── RESPONSIVE — 5 breakpoints ── */

//                 // /* 1) Large desktop ≤1400px */
//                 // @media (max-width: 1400px) {
//                 //     .inner { padding: 0 40px; }
//                 // }

//                 // /* 2) Tablet landscape ≤1200px */
//                 // @media (max-width: 1200px) {
//                 //     .inner { padding: 0 32px; }
//                 //     .cta-inner { margin: 0 32px 80px !important; }
//                 //     .features-grid { grid-template-columns: repeat(3,1fr); gap: 16px; }
//                 // }

//                 // /* 3) Tablet portrait ≤900px */
//                 // @media (max-width: 900px) {
//                 //     .inner { padding: 0 24px; }
//                 //     .features-grid { grid-template-columns: repeat(2,1fr); }
//                 //     .hiw-grid { grid-template-columns: 1fr; gap: 16px; }
//                 //     .hiw-connector { display: none !important; }
//                 //     .hiw-card { border-radius: 20px !important; padding: 28px 22px !important; }
//                 //     .nav-desktop { display: none !important; }
//                 //     .hamburger { display: flex !important; }
//                 //     .cta-inner { margin: 0 24px 60px !important; padding: 60px 28px !important; }
//                 //     .hero-section { min-height: auto !important; padding: 80px 0 60px !important; }
//                 // }

//                 // /* 4) Mobile ≤600px */
//                 // @media (max-width: 600px) {
//                 //     .inner { padding: 0 16px; }
//                 //     .features-grid { grid-template-columns: 1fr; }
//                 //     .stats-grid { grid-template-columns: repeat(2,1fr); gap: 10px; margin-top: 40px; }
//                 //     .stat-card { padding: 16px 10px; }
//                 //     .stat-value { font-size: 22px !important; }
//                 //     .pill-btn { padding: 12px 20px; font-size: 14px; }
//                 //     .hero-section { padding: 64px 0 48px !important; }
//                 //     .section-pad { padding: 64px 0 !important; }
//                 //     .hiw-section { padding: 64px 0 !important; }
//                 //     .hiw-card { padding: 24px 18px !important; border-radius: 18px !important; }
//                 //     .footer-cols { flex-direction: column !important; gap: 32px !important; }
//                 //     .footer-links { flex-wrap: wrap !important; gap: 28px !important; }
//                 //     .cta-inner { margin: 0 12px 48px !important; border-radius: 20px !important; padding: 48px 20px !important; }
//                 //     .cta-btns { flex-direction: column !important; align-items: center !important; }
//                 //     .hero-title { letter-spacing: -1px; }
//                 //     .cta-h2 { font-size: 30px !important; }
//                 //     .hero-btns { flex-direction: column; align-items: center; }
//                 // }

//                 // /* 5) Small mobile ≤400px */
//                 // @media (max-width: 400px) {
//                 //     .inner { padding: 0 12px; }
//                 //     .stats-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
//                 //     .pill-btn { padding: 11px 16px; font-size: 13px; }
//                 //     .hiw-card { padding: 20px 14px !important; border-radius: 16px !important; }
//                 //     .feature-card { padding: 20px 16px; border-radius: 16px; }
//                 //     .cta-h2 { font-size: 26px !important; }
//                 // }
//                 /* ── 5 DEVICE RESPONSIVE ── */

// /* 1. Large Desktop ≤1400px */
// @media (max-width: 1400px) {
//     .inner { padding: 0 40px; }
//     .hiw-grid-responsive { gap: 20px; }
// }

// /* 2. Tablet Landscape ≤1024px */
// @media (max-width: 1024px) {
//     .inner { padding: 0 28px; }
//     .features-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
//     .hiw-grid-responsive { grid-template-columns: repeat(3, 1fr); gap: 16px; }
//     .hiw-step-card { padding: 24px 20px !important; }
//     .cta-inner { margin: 0 28px 72px !important; padding: 72px 32px !important; }
//     .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 48px; }
//     .stat-value { font-size: 24px !important; }
//     .ft-top { grid-template-columns: 1fr 1fr; padding: 48px 28px 40px; gap: 28px; }
//     .ft-bottom { padding: 18px 28px; }
// }

// /* 3. Tablet Portrait ≤768px */
// @media (max-width: 768px) {
//     .inner { padding: 0 20px; }
//     .nav-desktop { display: none !important; }
//     .hamburger { display: flex !important; }
//     .features-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
//     .hiw-grid-responsive { grid-template-columns: 1fr; gap: 16px; }
//     .hiw-connector-1, .hiw-connector-2 { display: none !important; }
//     .hiw-step-card { padding: 28px 22px !important; border-radius: 20px !important; }
//     .hiw-watermark { font-size: 80px !important; }
//     .hero-section { min-height: auto !important; padding: 72px 0 52px !important; }
//     .hero-title { font-size: clamp(28px, 6vw, 52px) !important; letter-spacing: -1px !important; }
//     .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 40px; }
//     .stat-card { padding: 16px 12px; }
//     .stat-value { font-size: 22px !important; }
//     .pill-btn { padding: 12px 22px; font-size: 14px; }
//     .hero-btns { flex-direction: column; align-items: center; gap: 10px; }
//     .cta-inner { margin: 0 16px 56px !important; padding: 56px 24px !important; border-radius: 24px !important; }
//     .cta-btns { flex-direction: column !important; align-items: center !important; gap: 10px !important; }
//     .cta-h2 { font-size: 32px !important; letter-spacing: -1px !important; }
//     .ft-top { grid-template-columns: 1fr 1fr; padding: 40px 20px 32px; gap: 24px; }
//     .ft-bottom { padding: 16px 20px; flex-direction: column; align-items: flex-start; gap: 10px; }
//     .section-pad { padding: 72px 0 !important; }
//     .hiw-section { padding: 72px 0 !important; }
// }

// /* 4. Mobile ≤480px */
// @media (max-width: 480px) {
//     .inner { padding: 0 16px; }
//     .features-grid { grid-template-columns: 1fr; gap: 12px; }
//     .feature-card { padding: 22px 18px; border-radius: 18px; }
//     .hiw-step-card { padding: 22px 18px !important; border-radius: 18px !important; }
//     .hiw-watermark { font-size: 64px !important; }
//     .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; margin-top: 32px; }
//     .stat-card { padding: 14px 10px; border-radius: 12px; }
//     .stat-value { font-size: 20px !important; }
//     .pill-btn { padding: 11px 18px; font-size: 13.5px; }
//     .hero-section { padding: 60px 0 44px !important; }
//     .hero-btns { flex-direction: column; align-items: center; }
//     .cta-inner { margin: 0 12px 48px !important; padding: 48px 18px !important; border-radius: 20px !important; }
//     .cta-h2 { font-size: 28px !important; }
//     .ft-top { grid-template-columns: 1fr; padding: 36px 16px 28px; gap: 24px; }
//     .ft-bottom { padding: 14px 16px; }
//     .section-pad { padding: 60px 0 !important; }
//     .hiw-section { padding: 60px 0 !important; }
// }

// /* 5. Small Mobile ≤360px */
// @media (max-width: 360px) {
//     .inner { padding: 0 12px; }
//     .hero-title { font-size: 26px !important; letter-spacing: -0.5px !important; }
//     .pill-btn { padding: 10px 14px; font-size: 13px; }
//     .stats-grid { grid-template-columns: 1fr 1fr; gap: 6px; }
//     .stat-value { font-size: 18px !important; }
//     .hiw-step-card { padding: 18px 14px !important; border-radius: 16px !important; }
//     .hiw-watermark { font-size: 50px !important; }
//     .feature-card { padding: 18px 14px; }
//     .cta-inner { margin: 0 8px 40px !important; padding: 40px 14px !important; border-radius: 16px !important; }
//     .cta-h2 { font-size: 24px !important; }
//     .ft-top { padding: 28px 12px 24px; }
//     .section-pad { padding: 48px 0 !important; }
//     .hiw-section { padding: 48px 0 !important; }
// }
//                     /* ── FOOTER ── */
// .ft-top {
//     padding: 64px 48px 48px;
//     display: grid;
//     grid-template-columns: 1.4fr 1fr 1fr 1fr;
//     gap: 40px;
//     border-bottom: 1px solid rgba(255,255,255,0.06);
// }
// .ft-col-label {
//     font-size: 10.5px; font-weight: 600; letter-spacing: 1.5px;
//     text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 20px;
// }
// .ft-link {
//     display: block; font-size: 14px; color: rgba(255,255,255,0.45);
//     margin-bottom: 12px; cursor: pointer; text-decoration: none;
//     transition: color .2s; width: fit-content; position: relative;
// }
// .ft-link::after {
//     content: ''; position: absolute; left: 0; bottom: -2px;
//     width: 0; height: 1px; background: #5DCAA5; transition: width .25s;
// }
// .ft-link:hover { color: rgba(255,255,255,0.85); }
// .ft-link:hover::after { width: 100%; }

// .ft-social {
//     width: 34px; height: 34px; border-radius: 10px;
//     background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 14px; cursor: pointer; transition: background .2s, border-color .2s;
//     color: rgba(255,255,255,0.5); text-decoration: none;
// }
// .ft-social:hover { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.4); color: #a78bfa; }

// .ft-badge {
//     display: inline-flex; align-items: center; gap: 5px;
//     font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 999px;
// }
// .ft-badge-teal { background: rgba(93,202,165,0.1); color: #5DCAA5; border: 1px solid rgba(93,202,165,0.25); }
// .ft-badge-purple { background: rgba(83,74,183,0.1); color: #9F99E8; border: 1px solid rgba(83,74,183,0.25); }

// .ft-bottom {
//     padding: 20px 48px;
//     display: flex; justify-content: space-between; align-items: center;
//     flex-wrap: wrap; gap: 12px;
// }
// .ft-legal-link {
//     font-size: 12.5px; color: rgba(255,255,255,0.2);
//     text-decoration: none; cursor: pointer; transition: color .2s;
// }
// .ft-legal-link:hover { color: rgba(255,255,255,0.55); }

// /* Footer responsive */
// @media (max-width: 900px) {
//     .ft-top { grid-template-columns: 1fr 1fr; padding: 48px 24px 40px; gap: 32px; }
//     .ft-bottom { padding: 18px 24px; }
// }
// @media (max-width: 600px) {
//     .ft-top { grid-template-columns: 1fr; padding: 40px 16px 32px; gap: 28px; }
//     .ft-bottom { padding: 16px; flex-direction: column; align-items: flex-start; gap: 8px; }
// }
//             `}</style>
//             {/* ── NAV ── */}
//             <nav style={{
//                 background: 'rgba(250,250,248,0.9)',
//                 backdropFilter: 'blur(16px)',
//                 height: 64,
//                 position: 'sticky',
//                 top: 0,
//                 zIndex: 100,
//                 width: '100vw',
//                 marginLeft: '50%',
//                 transform: 'translateX(-50%)',
//                 borderBottom: 'none',
//             }}>
//                 <div style={{
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     width: '100vw',
//                     marginLeft: '50%',
//                     transform: 'translateX(-50%)',
//                     borderBottom: '1px solid #e9e9e5',
//                     padding: '0 40px',
//                 }}>
//                     <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Sora,sans-serif', fontWeight: 800, fontSize: 20, background: 'linear-gradient(135deg,#534AB7 0%,#1D9E75 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.5px', flexShrink: 0 }}>
//                         LifeInnovior
//                     </Link>

//                     <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                         <Link to="/find-psychologist" className="nav-link"
//                             style={{ color: '#fff', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(79,70,229,0.4)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(79,70,229,0.3)'; }}>
//                             🧠 Find Psychologist
//                         </Link>

//                         <Link to="/blog" className="nav-link"
//                             style={{ color: '#fff', background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)', boxShadow: '0 4px 12px rgba(6,182,212,0.3)' }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(6,182,212,0.4)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(6,182,212,0.3)'; }}>
//                             📰 Blog
//                         </Link>

//                         <Link to="/pricing" className="nav-link"
//                             style={{ color: '#fff', background: 'linear-gradient(135deg, #F59E0B, #EF4444)', boxShadow: '0 4px 12px rgba(245,158,11,0.3)' }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(245,158,11,0.4)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(245,158,11,0.3)'; }}>
//                             🏷️ Pricing
//                         </Link>

//                         <div style={{ width: 1, height: 20, background: '#e9e9e5', margin: '0 8px' }} />

//                         <Link to="/login" className="nav-link"
//                             style={{ color: '#4F46E5', background: '#EEF2FF', border: '1.5px solid #C7D2FE' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#E0E7FF'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = '#EEF2FF'; e.currentTarget.style.transform = 'none'; }}>
//                             Login
//                         </Link>

//                         <Link to="/register"
//                             style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, padding: '8px 20px', borderRadius: 10, background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(16,185,129,0.3)', border: 'none' }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,185,129,0.4)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(16,185,129,0.3)'; }}>
//                             Get Started →
//                         </Link>
//                     </div>

//                     <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
//                         <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
//                         <span style={{ opacity: menuOpen ? 0 : 1 }} />
//                         <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
//                     </button>
//                 </div>
//             </nav>


//             {/* Mobile menu */}
//             <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
//                 <Link to="/find-psychologist" onClick={() => setMenuOpen(false)}>🧠 Find Psychologist</Link>
//                 <Link to="/blog" onClick={() => setMenuOpen(false)}>📰 Blog</Link>
//                 <Link to="/pricing" onClick={() => setMenuOpen(false)}>🏷️ Pricing</Link>
//                 <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
//                 <Link to="/register" onClick={() => setMenuOpen(false)} style={{ color: '#534AB7', fontWeight: 700 }}>Get Started →</Link>
//             </div>

//             {/* ── HERO ── */}
//             <div
//                 className="hero-section"
//                 style={{
//                     background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 40%,#0f5e48 100%)',
//                     padding: '100px 0 80px',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     minHeight: '88vh',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     width: '95vw',
//                     marginLeft: '50%',
//                     transform: 'translateX(-50%)',
//                 }}
//             >
//                 <div className="blob" style={{ width: 500, height: 500, background: '#534AB7', top: -100, right: -100, opacity: 0.3 }} />
//                 <div className="blob" style={{ width: 400, height: 400, background: '#1D9E75', bottom: -80, left: 50, opacity: 0.25 }} />
//                 <div className="blob" style={{ width: 300, height: 300, background: '#D85A30', bottom: 50, right: 200, opacity: 0.15 }} />
//                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

//                 <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
//                     <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
//                         <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 28, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
//                             <span style={{ width: 7, height: 7, background: '#5DCAA5', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #5DCAA5' }} />
//                             Trusted by 12,000+ patients worldwide
//                         </div>

//                         <h1 className="hero-title fade-up delay-1">
//                             Mental Health Care,<br />
//                             <span style={{ background: 'linear-gradient(90deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Made Accessible</span>
//                         </h1>

//                         <p className="fade-up delay-2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', margin: '24px auto 40px', maxWidth: 520, lineHeight: 1.7, fontWeight: 400 }}>
//                             Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.
//                         </p>

//                         <div className="hero-btns fade-up delay-3">
//                             <Link to="/find-psychologist" className="pill-btn" style={{ background: '#fff', color: '#534AB7' }}>🧠 Find a Psychologist</Link>
//                             <Link to="/register" className="pill-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>Join as Psychologist →</Link>
//                         </div>

//                         <div className="stats-grid fade-up delay-4">
//                             {stats.map(s => (
//                                 <div key={s.label} className="stat-card">
//                                     <div className="stat-value" style={{ fontSize: 28, fontFamily: 'Sora,sans-serif', fontWeight: 800, color: '#fff' }}>{s.value}</div>
//                                     <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* ── MARQUEE ── */}
//             <div style={{
//                 position: 'relative',
//                 background: '#fff',
//                 padding: '28px 0',
//                 overflow: 'hidden',
//                 borderTop: '1px solid #e9e9e5',
//                 borderBottom: '1px solid #e9e9e5',
//                 width: '95vw',
//                 maxWidth: '95vw',
//                 marginLeft: '50%',
//                 transform: 'translateX(-50%)',
//                 boxSizing: 'border-box',
//             }}>
//                 <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(83,74,183,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
//                 <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
//                 <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #fff, transparent)', zIndex: 2, pointerEvents: 'none' }} />
//                 <div style={{ textAlign: 'center', fontSize: 10.5, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(83,74,183,0.45)', marginBottom: 18, position: 'relative', zIndex: 3 }}>
//                     What our patients are saying
//                 </div>
//                 <div style={{ overflow: 'hidden', marginBottom: 10 }}>
//                     <div className="mq-track-fwd">
//                         {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((t, i) => (
//                             <div key={i} className={`t-chip chip-${t.color}`}>
//                                 <span className={`chip-dot dot-${t.color}`} />
//                                 <span style={{ fontSize: 15 }}>{t.emoji}</span>
//                                 <span>{t.text}</span>
//                                 <span style={{ fontSize: 11, color: '#aaa' }}>— {t.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div style={{ overflow: 'hidden' }}>
//                     <div className="mq-track-rev">
//                         {[...testimonials.slice(2), ...testimonials.slice(2)].map((t, i) => (
//                             <div key={i} className={`t-chip chip-${t.color}`}>
//                                 <span className={`chip-dot dot-${t.color}`} />
//                                 <span style={{ fontSize: 15 }}>{t.emoji}</span>
//                                 <span>{t.text}</span>
//                                 <span style={{ fontSize: 11, color: '#aaa' }}>— {t.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── FEATURES ── */}
//             {/* <div className="section-pad" style={{ padding: '100px 0', background: '#FAFAF8' }}>
//                 <div className="inner">
//                     <div style={{ textAlign: 'center', marginBottom: 60 }}>
//                         <span style={{ display: 'inline-block', background: '#EEEDFE', color: '#534AB7', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Why LifeInnovior</span>
//                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px', marginBottom: 12 }}>Everything You Need</h2>
//                         <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>A complete platform for modern mental health care</p>
//                     </div>
//                     <div className="features-grid">
//                         {features.map(f => (
//                             <div key={f.title} className="feature-card">
//                                 <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: f.accent, borderRadius: '0 20px 0 100%', opacity: 0.6 }} />
//                                 <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 14, background: f.accent, border: `1px solid ${f.border}`, fontSize: 26, marginBottom: 18, position: 'relative' }}>{f.icon}</div>
//                                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
//                                     <h3 style={{ fontSize: 17, fontWeight: 600 }}>{f.title}</h3>
//                                     <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: f.accent, color: f.border, border: `1px solid ${f.border}` }}>{f.tag}</span>
//                                 </div>
//                                 <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.7 }}>{f.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div> */}


//             {/* ── HOW IT WORKS ── */}
//             {/* <div className="section-pad hiw-section" style={{ padding: '100px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
//                 <div style={{ position: 'absolute', top: -120, left: '50%', transform: 'translateX(-50%)', width: 700, height: 300, background: 'radial-gradient(ellipse,rgba(83,74,183,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />

//                 <div className="inner">
//                     <div style={{ textAlign: 'center', marginBottom: 72 }}>
//                         <span style={{ display: 'inline-block', background: '#E1F5EE', color: '#0F6E56', fontSize: 11.5, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Simple Process</span>
//                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px', color: '#111', marginBottom: 10 }}>How It Works</h2>
//                         <p style={{ color: '#6b7280', fontSize: 16, maxWidth: 440, margin: '0 auto' }}>Three simple steps to start your mental health journey today</p>
//                     </div>

//                     <div className="hiw-grid">
//                         <div className="hiw-connector" style={{ position: 'absolute', top: 52, left: 'calc(33.33% + 20px)', width: 'calc(33.33% - 40px)', height: 2, background: 'linear-gradient(90deg,#AFA9EC,#5DCAA5)', borderRadius: 2, zIndex: 0 }} />
//                         <div className="hiw-connector" style={{ position: 'absolute', top: 52, left: 'calc(66.66% + 20px)', width: 'calc(33.33% - 40px)', height: 2, background: 'linear-gradient(90deg,#5DCAA5,#EF9F27)', borderRadius: 2, zIndex: 0 }} />

//                         {hiwSteps.map((s) => (
//                             <div key={s.step} className="hiw-card"
//                                 onMouseEnter={e => { e.currentTarget.style.borderColor = s.border; }}
//                                 onMouseLeave={e => { e.currentTarget.style.borderColor = '#e9e9e5'; }}
//                             >
//                                 <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, borderRadius: '0 24px 0 80px', background: s.cornerBg, opacity: 0.7, pointerEvents: 'none' }} />

//                                 <div style={{ position: 'relative', display: 'inline-flex', marginBottom: 24 }}>
//                                     <div style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: `2px dashed ${s.ringBorder}` }} />
//                                     <div style={{ width: 60, height: 60, borderRadius: '50%', background: s.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 800, position: 'relative', zIndex: 1, boxShadow: `0 10px 28px ${s.color}40` }}>
//                                         {s.step}
//                                     </div>
//                                 </div>

//                                 <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: s.color, marginBottom: 10 }}>{s.label}</div>
//                                 <h3 style={{ fontFamily: 'Sora,sans-serif', fontSize: 18, fontWeight: 700, color: '#111', marginBottom: 10 }}>{s.title}</h3>
//                                 <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.75 }}>{s.desc}</p>

//                                 <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11.5, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginTop: 20, background: s.accent, color: s.tagColor, border: `1px solid ${s.border}` }}>
//                                     {s.tag}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div> */}
//             {/* ── HOW IT WORKS ── */}
//             <div className="section-pad hiw-section" style={{
//                 padding: '100px 0',
//                 background: 'linear-gradient(180deg, #fff 0%, #F5F3FF 50%, #fff 100%)',
//                 position: 'relative',
//                 overflow: 'hidden'
//             }}>
//                 {/* Background decorations */}
//                 <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(83,74,183,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
//                 <div style={{ position: 'absolute', bottom: -50, right: -100, width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(29,158,117,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

//                 <style>{`
//         .hiw-grid-responsive {
//             display: grid;
//             grid-template-columns: repeat(3, 1fr);
//             gap: 24px;
//             position: relative;
//         }
//         .hiw-connector-1 {
//             position: absolute;
//             top: 52px;
//             left: calc(33.33% + 20px);
//             width: calc(33.33% - 40px);
//             height: 2px;
//             background: linear-gradient(90deg, #AFA9EC, #5DCAA5);
//             border-radius: 2px;
//             z-index: 0;
//         }
//         .hiw-connector-2 {
//             position: absolute;
//             top: 52px;
//             left: calc(66.66% + 20px);
//             width: calc(33.33% - 40px);
//             height: 2px;
//             background: linear-gradient(90deg, #5DCAA5, #EF9F27);
//             border-radius: 2px;
//             z-index: 0;
//         }
//         .hiw-step-card {
//             position: relative;
//             background: #fff;
//             border-radius: 24px;
//             padding: 32px;
//             border: 1px solid #e9e9e5;
//             transition: all 0.3s;
//             cursor: default;
//             overflow: hidden;
//             box-shadow: 0 4px 24px rgba(0,0,0,0.06);
//             z-index: 1;
//         }
//         .hiw-step-card:hover {
//             transform: translateY(-8px);
//         }
//         .hiw-watermark {
//             position: absolute;
//             bottom: -10px;
//             right: 16px;
//             font-family: 'Sora', sans-serif;
//             font-size: 100px;
//             font-weight: 900;
//             opacity: 0.06;
//             line-height: 1;
//             pointer-events: none;
//             user-select: none;
//         }
//         @media (max-width: 1024px) {
//             .hiw-grid-responsive {
//                 grid-template-columns: repeat(3, 1fr);
//                 gap: 16px;
//             }
//             .hiw-step-card {
//                 padding: 24px;
//             }
//         }
//         @media (max-width: 768px) {
//             .hiw-grid-responsive {
//                 grid-template-columns: 1fr;
//                 gap: 20px;
//             }
//             .hiw-connector-1, .hiw-connector-2 {
//                 display: none;
//             }
//             .hiw-step-card {
//                 padding: 28px;
//             }
//             .hiw-watermark {
//                 font-size: 80px;
//             }
//         }
//         @media (max-width: 480px) {
//             .hiw-step-card {
//                 padding: 24px 20px;
//                 border-radius: 18px;
//             }
//             .hiw-watermark {
//                 font-size: 60px;
//             }
//         }
//     `}</style>

//                 <div className="inner">
//                     {/* Header */}
//                     <div style={{ textAlign: 'center', marginBottom: 80 }}>
//                         <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, #EDE9FE, #E1F5EE)', color: '#534AB7', fontSize: 11.5, fontWeight: 700, padding: '7px 18px', borderRadius: 999, marginBottom: 20, letterSpacing: '1px', textTransform: 'uppercase', border: '1px solid rgba(83,74,183,0.15)' }}>
//                             <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg, #534AB7, #1D9E75)', display: 'inline-block' }} />
//                             Simple Process
//                         </span>
//                         <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 44, fontWeight: 800, letterSpacing: '-1.5px', color: '#111', marginBottom: 14, lineHeight: 1.15 }}>
//                             How It <span style={{ background: 'linear-gradient(135deg, #534AB7, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Works</span>
//                         </h2>
//                         <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>Three simple steps to start your mental health journey today</p>
//                     </div>

//                     {/* Steps Grid */}
//                     <div className="hiw-grid-responsive">
//                         <div className="hiw-connector-1" />
//                         <div className="hiw-connector-2" />

//                         {hiwSteps.map((s) => (
//                             <div key={s.step} className="hiw-step-card"
//                                 onMouseEnter={e => {
//                                     e.currentTarget.style.boxShadow = `0 20px 48px ${s.color}25`;
//                                     e.currentTarget.style.borderColor = s.border;
//                                 }}
//                                 onMouseLeave={e => {
//                                     e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
//                                     e.currentTarget.style.borderColor = '#e9e9e5';
//                                 }}>

//                                 {/* Top gradient bar */}
//                                 <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${s.color}, ${s.color}80)`, borderRadius: '24px 24px 0 0' }} />

//                                 {/* Corner decoration */}
//                                 <div style={{ position: 'absolute', top: 0, right: 0, width: 100, height: 100, borderRadius: '0 24px 0 100px', background: s.cornerBg, opacity: 0.5, pointerEvents: 'none' }} />

//                                 {/* Step number circle */}
//                                 <div style={{ position: 'relative', display: 'inline-flex', marginBottom: 24 }}>
//                                     <div style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: `2px dashed ${s.ringBorder}` }} />
//                                     <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg, ${s.color}, ${s.color}CC)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora,sans-serif', fontSize: 22, fontWeight: 800, position: 'relative', zIndex: 1, boxShadow: `0 12px 32px ${s.color}50` }}>
//                                         {s.step}
//                                     </div>
//                                 </div>

//                                 {/* Label */}
//                                 <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: s.color, marginBottom: 10 }}>{s.label}</div>

//                                 {/* Title */}
//                                 <h3 style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>

//                                 {/* Description */}
//                                 <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>

//                                 {/* Tag */}
//                                 <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 999, background: s.accent, color: s.tagColor, border: `1px solid ${s.border}` }}>
//                                     {s.tag}
//                                 </div>

//                                 {/* Watermark number - visible */}
//                                 <div className="hiw-watermark" style={{ color: s.color }}>
//                                     {String(s.step).padStart(2, '0')}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Bottom CTA */}
//                     <div style={{ textAlign: 'center', marginTop: 60 }}>
//                         <p style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 16 }}>Ready to start? It only takes 2 minutes</p>
//                         <Link to="/register"
//                             style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 14, background: 'linear-gradient(135deg, #534AB7, #1D9E75)', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15, boxShadow: '0 8px 24px rgba(83,74,183,0.3)', transition: 'all 0.2s' }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(83,74,183,0.4)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(83,74,183,0.3)'; }}>
//                             Get Started Free →
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* ── CTA ── */}
//             {/* <div className="cta-inner" style={{ margin: '0 48px 80px', borderRadius: 28, background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 50%,#0f5e48 100%)', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
//                 <div className="blob" style={{ width: 350, height: 350, background: '#534AB7', top: -100, right: -50 }} />
//                 <div className="blob" style={{ width: 250, height: 250, background: '#1D9E75', bottom: -60, left: 80 }} />
//                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
//                 <div style={{ position: 'relative', zIndex: 1 }}>
//                     <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '5px 16px', fontSize: 12, fontWeight: 600, color: '#9F99E8', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 24 }}>Free 14-day trial</div>
//                     <h2 className="cta-h2" style={{ fontFamily: 'Sora,sans-serif', fontSize: 46, fontWeight: 800, color: '#fff', letterSpacing: '-1.5px', marginBottom: 16 }}>Ready to Get Started?</h2>
//                     <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 420, margin: '0 auto 40px' }}>
//                         Join LifeInnovior today. Free 14-day trial for psychologists. No credit card required.
//                     </p>
//                     <div className="cta-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
//                         <Link to="/register" className="pill-btn" style={{ background: '#fff', color: '#534AB7', fontSize: 16, padding: '16px 36px' }}>Create Free Account</Link>
//                         <Link to="/pricing" className="pill-btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', fontSize: 16, padding: '16px 36px' }}>View Pricing →</Link>
//                     </div>
//                 </div>
//             </div> */}
//             {/* ── CTA ── */}
//             <div className="cta-inner" style={{
//                 margin: '0 48px 80px',
//                 borderRadius: 32,
//                 background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
//                 padding: '90px 40px',
//                 textAlign: 'center',
//                 position: 'relative',
//                 overflow: 'hidden'
//             }}>
//                 {/* Animated blobs */}
//                 <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(circle, rgba(83,74,183,0.6) 0%, transparent 70%)', top: -100, right: -80, borderRadius: '50%', filter: 'blur(40px)' }} />
//                 <div style={{ position: 'absolute', width: 300, height: 300, background: 'radial-gradient(circle, rgba(29,158,117,0.5) 0%, transparent 70%)', bottom: -80, left: 60, borderRadius: '50%', filter: 'blur(40px)' }} />
//                 <div style={{ position: 'absolute', width: 200, height: 200, background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)', top: '40%', left: '30%', borderRadius: '50%', filter: 'blur(30px)' }} />

//                 {/* Grid pattern */}
//                 <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

//                 {/* Glowing border */}
//                 <div style={{ position: 'absolute', inset: 0, borderRadius: 32, border: '1px solid rgba(255,255,255,0.08)' }} />

//                 <div style={{ position: 'relative', zIndex: 1 }}>
//                     {/* Badge */}
//                     <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, padding: '6px 18px', fontSize: 12, fontWeight: 700, color: '#A5B4FC', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 28, backdropFilter: 'blur(10px)' }}>
//                         <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
//                         Free 14-day trial • No credit card required
//                     </div>

//                     {/* Heading */}
//                     <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 52, fontWeight: 800, color: '#fff', letterSpacing: '-2px', marginBottom: 6, lineHeight: 1.1 }}>
//                         Ready to Transform
//                     </h2>
//                     <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 52, fontWeight: 800, letterSpacing: '-2px', marginBottom: 20, lineHeight: 1.1, background: 'linear-gradient(135deg, #818CF8, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
//                         Mental Healthcare?
//                     </h2>

//                     <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 460, margin: '0 auto 48px', lineHeight: 1.7 }}>
//                         Join thousands of psychologists and patients on LifeInnovior — the most trusted mental health platform.
//                     </p>

//                     {/* Stats row */}
//                     <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 48, flexWrap: 'wrap' }}>
//                         {[
//                             { value: '800+', label: 'Psychologists' },
//                             { value: '10k+', label: 'Patients' },
//                             { value: '4.9★', label: 'Rating' },
//                         ].map(stat => (
//                             <div key={stat.label} style={{ textAlign: 'center' }}>
//                                 <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', fontFamily: 'Sora,sans-serif' }}>{stat.value}</div>
//                                 <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Buttons */}
//                     <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
//                         <Link to="/register"
//                             style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 700, padding: '16px 36px', borderRadius: 14, background: 'linear-gradient(135deg, #818CF8, #4F46E5)', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 32px rgba(79,70,229,0.4)', border: 'none', transition: 'all 0.2s' }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.5)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,70,229,0.4)'; }}>
//                             🚀 Create Free Account
//                         </Link>
//                         <Link to="/find-psychologist"
//                             style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 700, padding: '16px 36px', borderRadius: 14, background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 32px rgba(16,185,129,0.3)', border: 'none', transition: 'all 0.2s' }}
//                             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(16,185,129,0.4)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.3)'; }}>
//                             🧠 Find a Psychologist
//                         </Link>
//                         <Link to="/pricing"
//                             style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 600, padding: '16px 36px', borderRadius: 14, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', transition: 'all 0.2s' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none'; }}>
//                             View Pricing →
//                         </Link>
//                     </div>

//                     {/* Trust badges */}
//                     <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
//                         {['🔒 HIPAA Compliant', '🎥 HD Video Sessions', '💳 Flexible Plans', '📱 All Devices'].map(badge => (
//                             <div key={badge} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{badge}</div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* ── FOOTER ── */}
//             {/* <footer style={{ background: '#111', color: '#9CA3AF', padding: '48px 0 32px' }}>
//                 <div className="inner">
//                     <div className="footer-cols" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
//                         <div>
//                             <div style={{ fontFamily: 'Sora,sans-serif', fontSize: 22, fontWeight: 800, marginBottom: 10, background: 'linear-gradient(135deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LifeInnovior</div>
//                             <p style={{ fontSize: 14, color: '#6b7280', maxWidth: 260, lineHeight: 1.7 }}>Modern mental health care for everyone, everywhere.</p>
//                         </div>
//                         <div className="footer-links" style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
//                             {[
//                                 { label: 'Platform', links: ['Find Psychologist', 'How It Works', 'Pricing'] },
//                                 { label: 'Company', links: ['About', 'Blog', 'Careers'] },
//                                 { label: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
//                             ].map(col => (
//                                 <div key={col.label}>
//                                     <div style={{ fontSize: 12, fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>{col.label}</div>
//                                     {col.links.map(l => (
//                                         <div key={l} style={{ fontSize: 14, color: '#6b7280', marginBottom: 10, cursor: 'pointer' }}>{l}</div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div style={{ borderTop: '1px solid #222', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
//                         <p style={{ fontSize: 13 }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</p>
//                         <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
//                             <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
//                             <span style={{ cursor: 'pointer' }}>Terms of Service</span>
//                         </div>
//                     </div>
//                 </div>
//             </footer> */}

//             {/* ── FOOTER ── */}
//             <footer style={{
//                 background: '#0d0d14',
//                 borderTop: '1px solid rgba(255,255,255,0.07)',
//                 width: '95vw',
//                 marginLeft: '50%',
//                 transform: 'translateX(-50%)',
//             }}>
//                 {/* top grid */}
//                 <div className="ft-top">
//                     {/* Brand */}
//                     <div>
//                         <div style={{ fontFamily: 'Sora,sans-serif', fontWeight: 800, fontSize: 22, background: 'linear-gradient(135deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 12, display: 'inline-block' }}>LifeInnovior</div>
//                         <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: 240, marginBottom: 20 }}>Modern mental health care for everyone, everywhere — secure, affordable, and always available.</p>
//                         <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
//                             <span className="ft-badge ft-badge-teal">✦ HIPAA Compliant</span>
//                             <span className="ft-badge ft-badge-purple">✦ E2E Encrypted</span>
//                         </div>
//                         <div style={{ display: 'flex', gap: 8 }}>
//                             {['𝕏', 'in', '◎', 'f'].map((icon, i) => (
//                                 <a key={i} className="ft-social">{icon}</a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Links */}
//                     {[
//                         { label: 'Platform', links: ['Find Psychologist', 'How It Works', 'Pricing', 'For Therapists'] },
//                         { label: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit'] },
//                         { label: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'] },
//                     ].map(col => (
//                         <div key={col.label}>
//                             <div className="ft-col-label">{col.label}</div>
//                             {col.links.map(l => <a key={l} className="ft-link">{l}</a>)}
//                         </div>
//                     ))}
//                 </div>

//                 {/* bottom bar */}
//                 <div className="ft-bottom">
//                     <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.2)' }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</span>
//                     <div style={{ display: 'flex', gap: 20 }}>
//                         {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => (
//                             <a key={l} className="ft-legal-link">{l}</a>
//                         ))}
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const features = [
    { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.', accent: '#E1F5EE', border: '#0F6E56', glow: 'rgba(15,110,86,0.15)', tag: 'Live Sessions' },
    { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.', accent: '#EEEDFE', border: '#534AB7', glow: 'rgba(83,74,183,0.18)', tag: 'Instant' },
    { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.', accent: '#FAEEDA', border: '#854F0B', glow: 'rgba(133,79,11,0.15)', tag: 'Private' },
    { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.', accent: '#FAECE7', border: '#993C1D', glow: 'rgba(153,60,29,0.15)', tag: 'From $29' },
    { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.', accent: '#EAF3DE', border: '#3B6D11', glow: 'rgba(59,109,17,0.15)', tag: 'E2E Encrypted' },
    { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.', accent: '#E6F1FB', border: '#185FA5', glow: 'rgba(24,95,165,0.15)', tag: 'Cross-platform' },
];

const stats = [
    { value: '12,000+', label: 'Patients Helped' },
    { value: '800+', label: 'Licensed Psychologists' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '4.9★', label: 'Average Rating' },
];

const testimonials = [
    { name: 'Aisha R.', text: 'Finally found a therapist I connect with', emoji: '🌸', color: 'purple' },
    { name: 'James M.', text: 'Booking was effortless. 10/10 experience', emoji: '⭐', color: 'amber' },
    { name: 'Priya K.', text: 'Feels like real in-person therapy', emoji: '💙', color: 'teal' },
    { name: 'Omar S.', text: 'Changed my life in just 4 sessions', emoji: '🌿', color: 'teal' },
    { name: 'Lena W.', text: "The most secure platform I've used", emoji: '🔐', color: 'purple' },
    { name: 'Carlos D.', text: 'Perfect for my busy schedule', emoji: '⚡', color: 'amber' },
    { name: 'Sofia T.', text: 'My anxiety is so much better now', emoji: '🌺', color: 'pink' },
    { name: 'Ravi M.', text: 'Found the perfect specialist within minutes', emoji: '🧠', color: 'purple' },
];

const hiwSteps = [
    {
        step: '01', label: 'Step One', title: 'Find a Psychologist',
        desc: 'Browse verified psychologists by specialization, language, and availability.',
        tag: '🧠 Browse Profiles', color: '#534AB7', accent: '#EEEDFE', border: '#AFA9EC',
        tagColor: '#534AB7', cornerBg: '#EEEDFE', ringBorder: 'rgba(83,74,183,0.3)',
    },
    {
        step: '02', label: 'Step Two', title: 'Book a Session',
        desc: 'Choose a time slot that works for you and confirm your booking in seconds.',
        tag: '📅 Pick a Time', color: '#1D9E75', accent: '#E1F5EE', border: '#5DCAA5',
        tagColor: '#0F6E56', cornerBg: '#E1F5EE', ringBorder: 'rgba(29,158,117,0.3)',
    },
    {
        step: '03', label: 'Step Three', title: 'Start Your Journey',
        desc: 'Join a secure video call and take the first step toward better mental health.',
        tag: '🎥 Join Session', color: '#EF9F27', accent: '#FAEEDA', border: '#EF9F27',
        tagColor: '#854F0B', cornerBg: '#FAEEDA', ringBorder: 'rgba(239,159,39,0.3)',
    },
];

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredFeature, setHoveredFeature] = useState(null);

    return (
        <div style={{ fontFamily: "'DM Sans','Sora',sans-serif", background: '#FAFAF8', color: '#1a1a1a', overflowX: 'hidden', width: '100%', maxWidth: '100%', margin: 0, padding: 0 }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@700;800&display=swap');
                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                html, body, #root { overflow-x: hidden; width: 100%; max-width: 100%; margin: 0; padding: 0; }

                .inner { max-width: 1400px; margin: 0 auto; padding: 0 48px; width: 100%; }
                .nav-link { text-decoration: none; font-size: 14px; font-weight: 500; padding: 7px 14px; border-radius: 999px; transition: all 0.2s; white-space: nowrap; }
                .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
                .hamburger span { display: block; width: 22px; height: 2px; background: #534AB7; border-radius: 2px; transition: all 0.3s; }
                .mobile-menu { display: none; flex-direction: column; background: rgba(250,250,248,0.98); border-bottom: 1px solid #e9e9e5; }
                .mobile-menu.open { display: flex; }
                .mobile-menu a { text-decoration: none; font-size: 15px; font-weight: 500; color: #1a1a1a; padding: 13px 24px; border-bottom: 1px solid #f0f0ec; }
                .hero-title { font-family: 'Sora',sans-serif; font-size: clamp(28px, 5vw, 76px); font-weight: 800; line-height: 1.08; letter-spacing: -2px; color: #fff; }
                .stat-card { background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 20px 16px; text-align: center; backdrop-filter: blur(8px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; }
                .pill-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 999px; font-size: 15px; font-weight: 600; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border: none; }
                .pill-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.18); }

                /* MARQUEE */
                // .mq-track-fwd { display: flex; gap: 10px; width: max-content; animation: mq-fwd 28s linear infinite; }
                // .mq-track-rev { display: flex; gap: 10px; width: max-content; animation: mq-rev 32s linear infinite; }
                // @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                // @keyframes mq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
                // .t-chip { display: inline-flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 999px; white-space: nowrap; flex-shrink: 0; font-size: 13px; font-weight: 500; border: 1px solid; transition: transform .2s; }
                // .t-chip:hover { transform: scale(1.04); }
                // .chip-purple { background: rgba(83,74,183,0.08);  border-color: rgba(83,74,183,0.25);  color: #3b3580; }
                // .chip-teal   { background: rgba(29,158,117,0.08); border-color: rgba(29,158,117,0.25); color: #0f6e56; }
                // .chip-amber  { background: rgba(239,159,39,0.1);  border-color: rgba(239,159,39,0.3);  color: #854F0B; }
                // .chip-pink   { background: rgba(216,90,48,0.08);  border-color: rgba(216,90,48,0.25);  color: #a33a1a; }
                // .chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
                // .dot-purple { background: #534AB7; box-shadow: 0 0 7px rgba(83,74,183,0.7); }
                // .dot-teal   { background: #1D9E75; box-shadow: 0 0 7px rgba(29,158,117,0.7); }
                // .dot-amber  { background: #EF9F27; box-shadow: 0 0 7px rgba(239,159,39,0.7); }
                // .dot-pink   { background: #D85A30; box-shadow: 0 0 7px rgba(216,90,48,0.7); }
                .mq-track-fwd { display: flex; gap: 10px; width: max-content; animation: mq-fwd 28s linear infinite; }
    .mq-track-rev { display: flex; gap: 10px; width: max-content; animation: mq-rev 32s linear infinite; }
    @keyframes mq-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @keyframes mq-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
    .t-chip { display: inline-flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: 999px; white-space: nowrap; flex-shrink: 0; font-size: 13px; font-weight: 500; border: 1px solid; transition: transform .2s; }
    .t-chip:hover { transform: scale(1.04); }
    .chip-purple { background: rgba(174,167,236,0.25); border-color: rgba(174,167,236,0.5); color: #CECBF6; }
    .chip-teal   { background: rgba(93,202,165,0.25);  border-color: rgba(93,202,165,0.5);  color: #9FE1CB; }
    .chip-amber  { background: rgba(239,159,39,0.25);  border-color: rgba(239,159,39,0.5);  color: #FAC775; }
    .chip-pink   { background: rgba(240,153,123,0.25); border-color: rgba(240,153,123,0.5); color: #F5C4B3; }
    .chip-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
    .dot-purple { background: #AFA9EC; box-shadow: 0 0 7px rgba(174,167,236,0.7); }
    .dot-teal   { background: #5DCAA5; box-shadow: 0 0 7px rgba(93,202,165,0.7); }
    .dot-amber  { background: #EF9F27; box-shadow: 0 0 7px rgba(239,159,39,0.7); }
    .dot-pink   { background: #F0997B; box-shadow: 0 0 7px rgba(240,153,123,0.7); }

                /* FEATURES */
                .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
                .feature-card {
                    background: #fff; border-radius: 22px; border: 1.5px solid #f0eff5;
                    padding: 30px 26px 28px; position: relative; overflow: hidden; cursor: default;
                    transition: transform 0.3s cubic-bezier(.22,1,.36,1), border-color 0.25s, box-shadow 0.3s;
                }
                .feature-card-bar {
                    position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
                    border-radius: 0 0 22px 22px; transform: scaleX(0); transform-origin: left;
                    transition: transform 0.4s cubic-bezier(.22,1,.36,1);
                }
                .feature-card:hover .feature-card-bar { transform: scaleX(1); }
                .feature-card:hover .feature-card-blob { opacity: 0.65 !important; transform: scale(1.2); }
                .feature-card:hover .feature-card-icon { transform: scale(1.08) rotate(-3deg); }
                .feature-card-blob {
                    position: absolute; bottom: -30px; right: -30px; width: 110px; height: 110px;
                    border-radius: 50%; opacity: 0.35;
                    transition: opacity 0.3s, transform 0.4s cubic-bezier(.22,1,.36,1);
                }
                .feature-card-icon {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 52px; height: 52px; border-radius: 14px; font-size: 26px;
                    margin-bottom: 18px; position: relative;
                    transition: transform 0.3s cubic-bezier(.22,1,.36,1);
                }

                /* HOW IT WORKS */
                .hiw-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; position: relative; }
                .hiw-step-card {
                    position: relative; background: #fff; border-radius: 24px; padding: 32px;
                    border: 1px solid #e9e9e5; transition: all 0.3s; cursor: default; overflow: hidden;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.06); z-index: 1;
                }
                .hiw-step-card:hover { transform: translateY(-8px); }
                .hiw-watermark {
                    position: absolute; bottom: -10px; right: 16px;
                    font-family: 'Sora',sans-serif; font-size: 100px; font-weight: 900;
                    opacity: 0.06; line-height: 1; pointer-events: none; user-select: none;
                }
                .hiw-connector-1 {
                    position: absolute; top: 52px; left: calc(33.33% + 20px);
                    width: calc(33.33% - 40px); height: 2px;
                    background: linear-gradient(90deg, #AFA9EC, #5DCAA5); border-radius: 2px; z-index: 0;
                }
                .hiw-connector-2 {
                    position: absolute; top: 52px; left: calc(66.66% + 20px);
                    width: calc(33.33% - 40px); height: 2px;
                    background: linear-gradient(90deg, #5DCAA5, #EF9F27); border-radius: 2px; z-index: 0;
                }

                /* FADE ANIMATIONS */
                @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .fade-up { animation: fadeUp 0.7s ease forwards; }
                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.2s; }
                .delay-3 { animation-delay: 0.3s; }
                .delay-4 { animation-delay: 0.4s; }
                .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; pointer-events: none; }

                .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 64px; }
                .hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

                /* FOOTER */
                .ft-top {
                    padding: 64px 48px 48px;
                    display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr;
                    gap: 40px; border-bottom: 1px solid rgba(255,255,255,0.06);
                }
                .ft-col-label { font-size: 10.5px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 20px; }
                .ft-link { display: block; font-size: 14px; color: rgba(255,255,255,0.45); margin-bottom: 12px; cursor: pointer; text-decoration: none; transition: color .2s; width: fit-content; position: relative; }
                .ft-link::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 0; height: 1px; background: #5DCAA5; transition: width .25s; }
                .ft-link:hover { color: rgba(255,255,255,0.85); }
                .ft-link:hover::after { width: 100%; }
                .ft-social { width: 34px; height: 34px; border-radius: 10px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); display: flex; align-items: center; justify-content: center; font-size: 14px; cursor: pointer; transition: background .2s, border-color .2s; color: rgba(255,255,255,0.5); text-decoration: none; }
                .ft-social:hover { background: rgba(167,139,250,0.15); border-color: rgba(167,139,250,0.4); color: #a78bfa; }
                .ft-badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 999px; }
                .ft-badge-teal { background: rgba(93,202,165,0.1); color: #5DCAA5; border: 1px solid rgba(93,202,165,0.25); }
                .ft-badge-purple { background: rgba(83,74,183,0.1); color: #9F99E8; border: 1px solid rgba(83,74,183,0.25); }
                .ft-bottom { padding: 20px 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
                .ft-legal-link { font-size: 12.5px; color: rgba(255,255,255,0.2); text-decoration: none; cursor: pointer; transition: color .2s; }
                .ft-legal-link:hover { color: rgba(255,255,255,0.55); }

                /* RESPONSIVE */
                @media (max-width: 1024px) {
                    .inner { padding: 0 28px; }
                    .features-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
                    .stats-grid { grid-template-columns: repeat(2,1fr); gap: 10px; margin-top: 48px; }
                    .ft-top { grid-template-columns: 1fr 1fr; padding: 48px 28px 40px; gap: 28px; }
                    .ft-bottom { padding: 18px 28px; }
                }
                @media (max-width: 768px) {
                    .inner { padding: 0 20px; }
                    .nav-desktop { display: none !important; }
                    .hamburger { display: flex !important; }
                    .features-grid { grid-template-columns: repeat(2,1fr); gap: 14px; }
                    .hiw-grid { grid-template-columns: 1fr; gap: 16px; }
                    .hiw-connector-1, .hiw-connector-2 { display: none !important; }
                    .hero-title { font-size: clamp(28px, 6vw, 52px) !important; letter-spacing: -1px !important; }
                    .stats-grid { grid-template-columns: repeat(2,1fr); gap: 10px; margin-top: 40px; }
                    .hero-btns { flex-direction: column; align-items: center; gap: 10px; }
                    .cta-inner { margin: 0 16px 56px !important; padding: 56px 24px !important; border-radius: 24px !important; }
                    .cta-btns { flex-direction: column !important; align-items: center !important; gap: 10px !important; }
                    .ft-top { grid-template-columns: 1fr 1fr; padding: 40px 20px 32px; gap: 24px; }
                    .ft-bottom { padding: 16px 20px; flex-direction: column; align-items: flex-start; gap: 10px; }
                    .section-pad { padding: 72px 0 !important; }
                }
                @media (max-width: 480px) {
                    .inner { padding: 0 16px; }
                    .features-grid { grid-template-columns: 1fr; gap: 12px; }
                    .feature-card { padding: 22px 18px; border-radius: 18px; }
                    .stats-grid { grid-template-columns: repeat(2,1fr); gap: 8px; margin-top: 32px; }
                    .pill-btn { padding: 11px 18px; font-size: 13.5px; }
                    .hero-btns { flex-direction: column; align-items: center; }
                    .cta-inner { margin: 0 12px 48px !important; padding: 48px 18px !important; border-radius: 20px !important; }
                    .ft-top { grid-template-columns: 1fr; padding: 36px 16px 28px; gap: 24px; }
                    .ft-bottom { padding: 14px 16px; }
                    .section-pad { padding: 60px 0 !important; }
                }
                @media (max-width: 360px) {
                    .inner { padding: 0 12px; }
                    .hero-title { font-size: 26px !important; letter-spacing: -0.5px !important; }
                    .pill-btn { padding: 10px 14px; font-size: 13px; }
                    .stats-grid { grid-template-columns: 1fr 1fr; gap: 6px; }
                    .feature-card { padding: 18px 14px; }
                    .cta-inner { margin: 0 8px 40px !important; padding: 40px 14px !important; border-radius: 16px !important; }
                    .ft-top { padding: 28px 12px 24px; }
                    .section-pad { padding: 48px 0 !important; }
                }
            `}</style>
            {/* ── NAV ── */}
            <nav style={{
                background: 'rgba(250,250,248,0.9)',
                backdropFilter: 'blur(16px)',
                height: 64,
                position: 'sticky',
                top: 0,
                zIndex: 100,
                width: '100vw',
                marginLeft: '50%',
                transform: 'translateX(-50%)',
                borderBottom: 'none',
            }}>
                <div style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    borderBottom: '1px solid #e9e9e5',
                    padding: '0 40px',
                }}>
                    <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Sora,sans-serif', fontWeight: 800, fontSize: 20, background: 'linear-gradient(135deg,#534AB7 0%,#1D9E75 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.5px', flexShrink: 0 }}>
                        LifeInnovior
                    </Link>

                    <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Link to="/find-psychologist" className="nav-link"
                            style={{ color: '#fff', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(79,70,229,0.4)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(79,70,229,0.3)'; }}>
                            🧠 Find Psychologist
                        </Link>

                        <Link to="/blog" className="nav-link"
                            style={{ color: '#fff', background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)', boxShadow: '0 4px 12px rgba(6,182,212,0.3)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(6,182,212,0.4)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(6,182,212,0.3)'; }}>
                            📰 Blog
                        </Link>

                        <Link to="/pricing" className="nav-link"
                            style={{ color: '#fff', background: 'linear-gradient(135deg, #F59E0B, #EF4444)', boxShadow: '0 4px 12px rgba(245,158,11,0.3)' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(245,158,11,0.4)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(245,158,11,0.3)'; }}>
                            🏷️ Pricing
                        </Link>

                        <div style={{ width: 1, height: 20, background: '#e9e9e5', margin: '0 8px' }} />

                        <Link to="/login" className="nav-link"
                            style={{ color: '#4F46E5', background: '#EEF2FF', border: '1.5px solid #C7D2FE' }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#E0E7FF'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#EEF2FF'; e.currentTarget.style.transform = 'none'; }}>
                            Login
                        </Link>

                        <Link to="/register"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, padding: '8px 20px', borderRadius: 10, background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 12px rgba(16,185,129,0.3)', border: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,185,129,0.4)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(16,185,129,0.3)'; }}>
                            Get Started →
                        </Link>
                    </div>

                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                        <span style={{ opacity: menuOpen ? 0 : 1 }} />
                        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/find-psychologist" onClick={() => setMenuOpen(false)}>🧠 Find Psychologist</Link>
                <Link to="/blog" onClick={() => setMenuOpen(false)}>📰 Blog</Link>
                <Link to="/pricing" onClick={() => setMenuOpen(false)}>🏷️ Pricing</Link>
                <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} style={{ color: '#534AB7', fontWeight: 700 }}>Get Started →</Link>
            </div>


            {/* ── HERO ── */}
            <div className="hero-section" style={{
                background: 'linear-gradient(135deg,#1e1752 0%,#2d2490 40%,#0f5e48 100%)',
                padding: '100px 0 80px', position: 'relative', overflow: 'hidden',
                minHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '95vw', marginLeft: '50%', transform: 'translateX(-50%)',
            }}>
                <div className="blob" style={{ width: 500, height: 500, background: '#534AB7', top: -100, right: -100, opacity: 0.3 }} />
                <div className="blob" style={{ width: 400, height: 400, background: '#1D9E75', bottom: -80, left: 50, opacity: 0.25 }} />
                <div className="blob" style={{ width: 300, height: 300, background: '#D85A30', bottom: 50, right: 200, opacity: 0.15 }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
                <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
                        <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '6px 16px', marginBottom: 28, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>
                            <span style={{ width: 7, height: 7, background: '#5DCAA5', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #5DCAA5' }} />
                            Trusted by 12,000+ patients worldwide
                        </div>
                        <h1 className="hero-title fade-up delay-1">
                            Mental Health Care,<br />
                            <span style={{ background: 'linear-gradient(90deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Made Accessible</span>
                        </h1>
                        <p className="fade-up delay-2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', margin: '24px auto 40px', maxWidth: 520, lineHeight: 1.7, fontWeight: 400 }}>
                            Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.
                        </p>
                        <div className="hero-btns fade-up delay-3">
                            <Link to="/find-psychologist" className="pill-btn" style={{ background: '#fff', color: '#534AB7' }}>🧠 Find a Psychologist</Link>
                            <Link to="/register" className="pill-btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}>Join as Psychologist →</Link>
                        </div>
                        <div className="stats-grid fade-up delay-4">
                            {stats.map(s => (
                                <div key={s.label} className="stat-card">
                                    <div className="stat-value" style={{ fontSize: 28, fontFamily: 'Sora,sans-serif', fontWeight: 800, color: '#fff' }}>{s.value}</div>
                                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500, lineHeight: 1.4 }}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── MARQUEE ── */}
            {/* <div style={{
                position: 'relative', background: '#1a1740', padding: '28px 0', overflow: 'hidden',
                borderTop: '1px solid #2d2860', borderBottom: '1px solid #2d2860',
                width: '95vw', maxWidth: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', boxSizing: 'border-box',
            }}> */}

            <div style={{
                position: 'relative', background: '#1a1740', padding: '28px 0', overflow: 'hidden',
                borderTop: '1px solid #2d2860', borderBottom: '1px solid #2d2860',
                width: '95vw', maxWidth: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', boxSizing: 'border-box',
                marginTop: '60px',  // ← এইটা যোগ করো, যতটুকু নামাতে চাও
            }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, #1a1740, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, #1a1740, transparent)', zIndex: 2, pointerEvents: 'none' }} />
                <div style={{ textAlign: 'center', fontSize: 10.5, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(174,167,236,0.5)', marginBottom: 18, position: 'relative', zIndex: 3 }}>
                    What our patients are saying
                </div>
                <div style={{ overflow: 'hidden', marginBottom: 10 }}>
                    <div className="mq-track-fwd">
                        {[...testimonials.slice(0, 6), ...testimonials.slice(0, 6)].map((t, i) => (
                            <div key={i} className={`t-chip chip-${t.color}`}>
                                <span className={`chip-dot dot-${t.color}`} />
                                <span style={{ fontSize: 15 }}>{t.emoji}</span>
                                <span>{t.text}</span>
                                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>— {t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <div className="mq-track-rev">
                        {[...testimonials.slice(2), ...testimonials.slice(2)].map((t, i) => (
                            <div key={i} className={`t-chip chip-${t.color}`}>
                                <span className={`chip-dot dot-${t.color}`} />
                                <span style={{ fontSize: 15 }}>{t.emoji}</span>
                                <span>{t.text}</span>
                                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>— {t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── FEATURES ── */}
            <div className="section-pad" style={{ padding: '100px 0', background: '#FAFAF8' }}>
                <div className="inner">
                    <div style={{ textAlign: 'center', marginBottom: 60 }}>
                        <span style={{ display: 'inline-block', background: '#EEEDFE', color: '#534AB7', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, marginBottom: 16, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Why LifeInnovior</span>
                        <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 40, fontWeight: 800, letterSpacing: '-1px', marginBottom: 12 }}>Everything You Need</h2>
                        <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>A complete platform for modern mental health care</p>
                    </div>
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <div
                                key={f.title}
                                className="feature-card"
                                style={{
                                    borderColor: hoveredFeature === i ? f.border + '55' : '#f0eff5',
                                    boxShadow: hoveredFeature === i ? `0 12px 40px ${f.glow}, 0 2px 8px rgba(0,0,0,0.04)` : '0 2px 8px rgba(0,0,0,0.03)',
                                    transform: hoveredFeature === i ? 'translateY(-6px)' : 'translateY(0)',
                                }}
                                onMouseEnter={() => setHoveredFeature(i)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <div className="feature-card-blob" style={{ background: f.accent }} />
                                <div className="feature-card-icon" style={{ background: f.accent, border: `1px solid ${f.border}` }}>{f.icon}</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                    <h3 style={{ fontSize: 17, fontWeight: 600 }}>{f.title}</h3>
                                    <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: f.accent, color: f.border, border: `1px solid ${f.border}` }}>{f.tag}</span>
                                </div>
                                <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.7 }}>{f.desc}</p>
                                <div className="feature-card-bar" style={{ background: f.border }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── HOW IT WORKS ── */}
            <div className="section-pad" style={{
                padding: '100px 0',
                background: 'linear-gradient(180deg, #fff 0%, #F5F3FF 50%, #fff 100%)',
                position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(83,74,183,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div className="inner">
                    <div style={{ textAlign: 'center', marginBottom: 80 }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg, #EDE9FE, #E1F5EE)', color: '#534AB7', fontSize: 11.5, fontWeight: 700, padding: '7px 18px', borderRadius: 999, marginBottom: 20, letterSpacing: '1px', textTransform: 'uppercase', border: '1px solid rgba(83,74,183,0.15)' }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg, #534AB7, #1D9E75)', display: 'inline-block' }} />
                            Simple Process
                        </span>
                        <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 44, fontWeight: 800, letterSpacing: '-1.5px', color: '#111', marginBottom: 14, lineHeight: 1.15 }}>
                            How It <span style={{ background: 'linear-gradient(135deg, #534AB7, #1D9E75)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Works</span>
                        </h2>
                        <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>Three simple steps to start your mental health journey today</p>
                    </div>
                    <div className="hiw-grid">
                        <div className="hiw-connector-1" />
                        <div className="hiw-connector-2" />
                        {hiwSteps.map((s) => (
                            <div key={s.step} className="hiw-step-card"
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 48px ${s.color}25`; e.currentTarget.style.borderColor = s.border; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#e9e9e5'; }}
                            >
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${s.color}, ${s.color}80)`, borderRadius: '24px 24px 0 0' }} />
                                <div style={{ position: 'absolute', top: 0, right: 0, width: 100, height: 100, borderRadius: '0 24px 0 100px', background: s.cornerBg, opacity: 0.5, pointerEvents: 'none' }} />
                                <div style={{ position: 'relative', display: 'inline-flex', marginBottom: 24 }}>
                                    <div style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: `2px dashed ${s.ringBorder}` }} />
                                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg, ${s.color}, ${s.color}CC)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora,sans-serif', fontSize: 22, fontWeight: 800, position: 'relative', zIndex: 1, boxShadow: `0 12px 32px ${s.color}50` }}>
                                        {s.step}
                                    </div>
                                </div>
                                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: s.color, marginBottom: 10 }}>{s.label}</div>
                                <h3 style={{ fontFamily: 'Sora,sans-serif', fontSize: 20, fontWeight: 700, color: '#111', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                                <p style={{ color: '#6b7280', fontSize: 14.5, lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 999, background: s.accent, color: s.tagColor, border: `1px solid ${s.border}` }}>{s.tag}</div>
                                <div className="hiw-watermark" style={{ color: s.color }}>{s.step}</div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 60 }}>
                        <p style={{ color: '#9CA3AF', fontSize: 14, marginBottom: 16 }}>Ready to start? It only takes 2 minutes</p>
                        <Link to="/register"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 14, background: 'linear-gradient(135deg, #534AB7, #1D9E75)', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15, boxShadow: '0 8px 24px rgba(83,74,183,0.3)', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(83,74,183,0.4)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(83,74,183,0.3)'; }}>
                            Get Started Free →
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── CTA ── */}
            <div className="cta-inner" style={{
                margin: '0 48px 80px', borderRadius: 32,
                background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
                padding: '90px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{ position: 'absolute', width: 400, height: 400, background: 'radial-gradient(circle, rgba(83,74,183,0.6) 0%, transparent 70%)', top: -100, right: -80, borderRadius: '50%', filter: 'blur(40px)' }} />
                <div style={{ position: 'absolute', width: 300, height: 300, background: 'radial-gradient(circle, rgba(29,158,117,0.5) 0%, transparent 70%)', bottom: -80, left: 60, borderRadius: '50%', filter: 'blur(40px)' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div style={{ position: 'absolute', inset: 0, borderRadius: 32, border: '1px solid rgba(255,255,255,0.08)' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, padding: '6px 18px', fontSize: 12, fontWeight: 700, color: '#A5B4FC', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 28 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
                        Free 14-day trial • No credit card required
                    </div>
                    <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 52, fontWeight: 800, color: '#fff', letterSpacing: '-2px', marginBottom: 6, lineHeight: 1.1 }}>Ready to Transform</h2>
                    <h2 style={{ fontFamily: 'Sora,sans-serif', fontSize: 52, fontWeight: 800, letterSpacing: '-2px', marginBottom: 20, lineHeight: 1.1, background: 'linear-gradient(135deg, #818CF8, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Mental Healthcare?</h2>
                    <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 460, margin: '0 auto 48px', lineHeight: 1.7 }}>
                        Join thousands of psychologists and patients on LifeInnovior — the most trusted mental health platform.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 48, marginBottom: 48, flexWrap: 'wrap' }}>
                        {[{ value: '800+', label: 'Psychologists' }, { value: '10k+', label: 'Patients' }, { value: '4.9★', label: 'Rating' }].map(stat => (
                            <div key={stat.label} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', fontFamily: 'Sora,sans-serif' }}>{stat.value}</div>
                                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="cta-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/register"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 700, padding: '16px 36px', borderRadius: 14, background: 'linear-gradient(135deg, #818CF8, #4F46E5)', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 32px rgba(79,70,229,0.4)', border: 'none', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(79,70,229,0.5)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(79,70,229,0.4)'; }}>
                            🚀 Create Free Account
                        </Link>
                        <Link to="/find-psychologist"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 700, padding: '16px 36px', borderRadius: 14, background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', textDecoration: 'none', boxShadow: '0 8px 32px rgba(16,185,129,0.3)', border: 'none', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(16,185,129,0.4)'; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.3)'; }}>
                            🧠 Find a Psychologist
                        </Link>
                        <Link to="/pricing"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 600, padding: '16px 36px', borderRadius: 14, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.15)', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none'; }}>
                            View Pricing →
                        </Link>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 40, flexWrap: 'wrap' }}>
                        {['🔒 HIPAA Compliant', '🎥 HD Video Sessions', '💳 Flexible Plans', '📱 All Devices'].map(badge => (
                            <div key={badge} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{badge}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── FOOTER ── */}
            {/* <footer style={{ background: '#0d0d14', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="ft-top">
                    <div>
                        <div style={{ fontFamily: 'Sora,sans-serif', fontWeight: 800, fontSize: 22, background: 'linear-gradient(135deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 12, display: 'inline-block' }}>LifeInnovior</div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: 240, marginBottom: 20 }}>Modern mental health care for everyone, everywhere — secure, affordable, and always available.</p>
                        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                            <span className="ft-badge ft-badge-teal">✦ HIPAA Compliant</span>
                            <span className="ft-badge ft-badge-purple">✦ E2E Encrypted</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {['𝕏', 'in', '◎', 'f'].map((icon, i) => (
                                <a key={i} className="ft-social">{icon}</a>
                            ))}
                        </div>
                    </div>
                    {[
                        { label: 'Platform', links: ['Find Psychologist', 'How It Works', 'Pricing', 'For Therapists'] },
                        { label: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit'] },
                        { label: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'] },
                    ].map(col => (
                        <div key={col.label}>
                            <div className="ft-col-label">{col.label}</div>
                            {col.links.map(l => <a key={l} className="ft-link">{l}</a>)}
                        </div>
                    ))}
                </div>
                <div className="ft-bottom">
                    <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.2)' }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: 20 }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => (
                            <a key={l} className="ft-legal-link">{l}</a>
                        ))}
                    </div>
                </div>
            </footer> */}
            {/* ── FOOTER ── */}
            <footer style={{
                background: '#0d0d14',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                width: '95vw',
                marginLeft: '50%',
                transform: 'translateX(-50%)',
            }}>
                {/* top grid */}
                <div className="ft-top">
                    {/* Brand */}
                    <div>
                        <div style={{ fontFamily: 'Sora,sans-serif', fontWeight: 800, fontSize: 22, background: 'linear-gradient(135deg,#9F99E8,#5DCAA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 12, display: 'inline-block' }}>LifeInnovior</div>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, maxWidth: 240, marginBottom: 20 }}>Modern mental health care for everyone, everywhere — secure, affordable, and always available.</p>
                        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                            <span className="ft-badge ft-badge-teal">✦ HIPAA Compliant</span>
                            <span className="ft-badge ft-badge-purple">✦ E2E Encrypted</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {['𝕏', 'in', '◎', 'f'].map((icon, i) => (
                                <a key={i} className="ft-social">{icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {[
                        { label: 'Platform', links: ['Find Psychologist', 'How It Works', 'Pricing', 'For Therapists'] },
                        { label: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press Kit'] },
                        { label: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'] },
                    ].map(col => (
                        <div key={col.label}>
                            <div className="ft-col-label">{col.label}</div>
                            {col.links.map(l => <a key={l} className="ft-link">{l}</a>)}
                        </div>
                    ))}
                </div>

                {/* bottom bar */}
                <div className="ft-bottom">
                    <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.2)' }}>© {new Date().getFullYear()} LifeInnovior. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: 20 }}>
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => (
                            <a key={l} className="ft-legal-link">{l}</a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}