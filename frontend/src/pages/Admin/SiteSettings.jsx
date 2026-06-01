import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getSettings, saveSetting } from '../../utils/api';
import { FiSave, FiPlus, FiTrash2, FiEdit2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

const DEFAULT_FEATURES = [
    { icon: '🎥', title: 'Video Therapy', desc: 'Secure HD video sessions from the comfort of your home.', accent: '#E1F5EE', border: '#0F6E56', glow: 'rgba(15,110,86,0.15)', tag: 'Live Sessions' },
    { icon: '📅', title: 'Easy Booking', desc: 'Book appointments with licensed psychologists in minutes.', accent: '#EEEDFE', border: '#534AB7', glow: 'rgba(83,74,183,0.18)', tag: 'Instant' },
    { icon: '📋', title: 'Session Notes', desc: 'Psychologists maintain detailed, confidential session records.', accent: '#FAEEDA', border: '#854F0B', glow: 'rgba(133,79,11,0.15)', tag: 'Private' },
    { icon: '💳', title: 'Flexible Plans', desc: 'Affordable subscription plans for every practice size.', accent: '#FAECE7', border: '#993C1D', glow: 'rgba(153,60,29,0.15)', tag: 'From $29' },
    { icon: '🔒', title: 'Fully Secure', desc: 'Your data is encrypted and protected at every step.', accent: '#EAF3DE', border: '#3B6D11', glow: 'rgba(59,109,17,0.15)', tag: 'E2E Encrypted' },
    { icon: '📱', title: 'Any Device', desc: 'Works seamlessly on mobile, tablet, and desktop.', accent: '#E6F1FB', border: '#185FA5', glow: 'rgba(24,95,165,0.15)', tag: 'Cross-platform' },
];

const DEFAULT_STATS = [
    { value: '12,000+', label: 'Patients Helped' },
    { value: '800+', label: 'Licensed Psychologists' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '4.9★', label: 'Average Rating' },
];

const DEFAULT_STEPS = [
    { step: '01', label: 'Step One', title: 'Find a Psychologist', desc: 'Browse verified psychologists by specialization, language, and availability.', tag: '🧠 Browse Profiles', color: '#534AB7', accent: '#EEEDFE', border: '#AFA9EC', tagColor: '#534AB7', cornerBg: '#EEEDFE', ringBorder: 'rgba(83,74,183,0.3)' },
    { step: '02', label: 'Step Two', title: 'Book a Session', desc: 'Choose a time slot that works for you and confirm your booking in seconds.', tag: '📅 Pick a Time', color: '#1D9E75', accent: '#E1F5EE', border: '#5DCAA5', tagColor: '#0F6E56', cornerBg: '#E1F5EE', ringBorder: 'rgba(29,158,117,0.3)' },
    { step: '03', label: 'Step Three', title: 'Start Your Journey', desc: 'Join a secure video call and take the first step toward better mental health.', tag: '🎥 Join Session', color: '#EF9F27', accent: '#FAEEDA', border: '#EF9F27', tagColor: '#854F0B', cornerBg: '#FAEEDA', ringBorder: 'rgba(239,159,39,0.3)' },
];

export default function SiteSettingsPage() {
    const [tab, setTab] = useState('stats');
    const [saving, setSaving] = useState(false);
    const [stats, setStats] = useState(DEFAULT_STATS);
    const [features, setFeatures] = useState(DEFAULT_FEATURES);
    const [steps, setSteps] = useState(DEFAULT_STEPS);
    const [hero, setHero] = useState({
        badge: 'Trusted by 12,000+ patients worldwide',
        title1: 'Mental Health Care,',
        title2: 'Made Accessible',
        subtitle: 'Connect with licensed psychologists through secure video sessions. Professional care from the comfort of your home.',
    });

    useEffect(() => {
        getSettings().then(r => {
            const data = r.data.data;
            if (data.stats) setStats(data.stats);
            if (data.features) setFeatures(data.features);
            if (data.steps) setSteps(data.steps);
            if (data.hero) setHero(data.hero);
        }).catch(() => { });
    }, []);

    const handleSave = async (key, value) => {
        setSaving(true);
        try {
            await saveSetting(key, value);
            toast.success('Saved successfully!');
        } catch { toast.error('Save failed'); }
        finally { setSaving(false); }
    };

    const TABS = [
        { key: 'stats', label: '📊 Stats' },
        { key: 'hero', label: '🦸 Hero' },
        { key: 'features', label: '⚡ Features' },
        { key: 'steps', label: '👣 How It Works' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFF' }}>
            <Sidebar />
            <div style={{ marginLeft: 260, flex: 1 }}>
                {/* Header */}
                <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Site Settings</h1>
                        <p style={{ fontSize: 13, color: '#6B7280' }}>Manage Home page content</p>
                    </div>
                </div>

                <div style={{ padding: 28 }}>
                    {/* Tabs */}
                    <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
                        {TABS.map(t => (
                            <button key={t.key} onClick={() => setTab(t.key)}
                                style={{ padding: '10px 20px', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 14, fontFamily: 'inherit', background: tab === t.key ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : '#fff', color: tab === t.key ? '#fff' : '#6B7280', border: tab === t.key ? 'none' : '1px solid #E5E7EB', boxShadow: tab === t.key ? '0 4px 12px rgba(79,70,229,0.3)' : 'none' }}>
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* ── STATS TAB ── */}
                    {tab === 'stats' && (
                        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                                <h2 style={{ fontSize: 18, fontWeight: 700 }}>📊 Hero Stats</h2>
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <button onClick={() => setStats([...stats, { value: '', label: '' }])}
                                        style={{ padding: '8px 16px', background: '#EEF2FF', color: '#4F46E5', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <FiPlus size={14} /> Add Stat
                                    </button>
                                    <button onClick={() => handleSave('stats', stats)} disabled={saving}
                                        style={{ padding: '8px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                                        <FiSave size={14} /> Save Stats
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
                                {stats.map((s, i) => (
                                    <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 16, border: '1px solid #E5E7EB', position: 'relative' }}>
                                        <button onClick={() => setStats(stats.filter((_, j) => j !== i))}
                                            style={{ position: 'absolute', top: 10, right: 10, background: '#FEF2F2', border: 'none', borderRadius: 6, padding: '4px 6px', cursor: 'pointer', color: '#EF4444' }}>
                                            <FiTrash2 size={13} />
                                        </button>
                                        <div style={{ marginBottom: 10 }}>
                                            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Value</label>
                                            <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit', fontWeight: 700, color: '#4F46E5' }}
                                                value={s.value} onChange={e => { const arr = [...stats]; arr[i].value = e.target.value; setStats(arr); }} placeholder="12,000+" />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Label</label>
                                            <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                                value={s.label} onChange={e => { const arr = [...stats]; arr[i].label = e.target.value; setStats(arr); }} placeholder="Patients Helped" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── HERO TAB ── */}
                    {tab === 'hero' && (
                        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                                <h2 style={{ fontSize: 18, fontWeight: 700 }}>🦸 Hero Section</h2>
                                <button onClick={() => handleSave('hero', hero)} disabled={saving}
                                    style={{ padding: '8px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                                    <FiSave size={14} /> Save Hero
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {[
                                    { key: 'badge', label: 'Badge Text', placeholder: 'Trusted by 12,000+ patients worldwide' },
                                    { key: 'title1', label: 'Title Line 1', placeholder: 'Mental Health Care,' },
                                    { key: 'title2', label: 'Title Line 2 (gradient)', placeholder: 'Made Accessible' },
                                    { key: 'subtitle', label: 'Subtitle', placeholder: 'Connect with licensed psychologists...' },
                                ].map(field => (
                                    <div key={field.key}>
                                        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>{field.label}</label>
                                        <input style={{ width: '100%', padding: '10px 14px', border: '1px solid #E5E7EB', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                            value={hero[field.key] || ''} onChange={e => setHero({ ...hero, [field.key]: e.target.value })} placeholder={field.placeholder} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── FEATURES TAB ── */}
                    {tab === 'features' && (
                        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                                <h2 style={{ fontSize: 18, fontWeight: 700 }}>⚡ Feature Cards</h2>
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <button onClick={() => setFeatures([...features, { icon: '✨', title: '', desc: '', accent: '#EEF2FF', border: '#4F46E5', glow: 'rgba(79,70,229,0.15)', tag: 'New' }])}
                                        style={{ padding: '8px 16px', background: '#EEF2FF', color: '#4F46E5', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <FiPlus size={14} /> Add Feature
                                    </button>
                                    <button onClick={() => handleSave('features', features)} disabled={saving}
                                        style={{ padding: '8px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                                        <FiSave size={14} /> Save Features
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {features.map((f, i) => (
                                    <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 20, border: '1px solid #E5E7EB' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                <span style={{ fontSize: 24 }}>{f.icon}</span>
                                                <span style={{ fontWeight: 600, color: '#111827' }}>{f.title || 'New Feature'}</span>
                                            </div>
                                            <button onClick={() => setFeatures(features.filter((_, j) => j !== i))}
                                                style={{ background: '#FEF2F2', border: 'none', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', color: '#EF4444', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13 }}>
                                                <FiTrash2 size={13} /> Remove
                                            </button>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                                            <div>
                                                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Icon (emoji)</label>
                                                <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 20, outline: 'none', textAlign: 'center' }}
                                                    value={f.icon} onChange={e => { const arr = [...features]; arr[i].icon = e.target.value; setFeatures(arr); }} />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Title</label>
                                                <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                                    value={f.title} onChange={e => { const arr = [...features]; arr[i].title = e.target.value; setFeatures(arr); }} placeholder="Feature title" />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Tag</label>
                                                <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                                    value={f.tag} onChange={e => { const arr = [...features]; arr[i].tag = e.target.value; setFeatures(arr); }} placeholder="Live Sessions" />
                                            </div>
                                            <div style={{ gridColumn: '1/-1' }}>
                                                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Description</label>
                                                <textarea style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit', resize: 'vertical', minHeight: 60 }}
                                                    value={f.desc} onChange={e => { const arr = [...features]; arr[i].desc = e.target.value; setFeatures(arr); }} placeholder="Feature description..." />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── STEPS TAB ── */}
                    {tab === 'steps' && (
                        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #E5E7EB', padding: 28, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                                <h2 style={{ fontSize: 18, fontWeight: 700 }}>👣 How It Works Steps</h2>
                                <button onClick={() => handleSave('steps', steps)} disabled={saving}
                                    style={{ padding: '8px 20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                                    <FiSave size={14} /> Save Steps
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {steps.map((s, i) => (
                                    <div key={i} style={{ background: '#F9FAFB', borderRadius: 12, padding: 20, border: `2px solid ${s.color}20` }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                                            <div style={{ width: 40, height: 40, borderRadius: '50%', background: s.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16 }}>{s.step}</div>
                                            <span style={{ fontWeight: 600, color: '#111827' }}>{s.label}</span>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                            <div>
                                                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Title</label>
                                                <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                                    value={s.title} onChange={e => { const arr = [...steps]; arr[i].title = e.target.value; setSteps(arr); }} />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Tag</label>
                                                <input style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit' }}
                                                    value={s.tag} onChange={e => { const arr = [...steps]; arr[i].tag = e.target.value; setSteps(arr); }} />
                                            </div>
                                            <div style={{ gridColumn: '1/-1' }}>
                                                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6B7280', marginBottom: 4 }}>Description</label>
                                                <textarea style={{ width: '100%', padding: '8px 12px', border: '1px solid #E5E7EB', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit', resize: 'vertical', minHeight: 60 }}
                                                    value={s.desc} onChange={e => { const arr = [...steps]; arr[i].desc = e.target.value; setSteps(arr); }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}