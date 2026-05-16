import React, { useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { useAuth } from '../../context/AuthContext';
import { updatePsychologistProfile } from '../../utils/api';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SPECS = ['Anxiety', 'Depression', 'Trauma', 'PTSD', 'OCD', 'ADHD', 'Bipolar', 'Relationships', 'Grief', 'Stress', 'Addiction', 'Eating Disorders', 'Sleep Disorders'];
const LANGS = ['English', 'Bengali', 'Hindi', 'Arabic', 'French', 'Spanish', 'German'];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function PsychologistProfile() {
    const { user, updateUser } = useAuth();
    const p = user?.psychologistProfile || {};
    const [tab, setTab] = useState('basic');
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState({
        name: user?.name || '', phone: user?.phone || '',
        psychologistProfile: {
            bio: p.bio || '', specializations: p.specializations || [],
            experience: p.experience || 0, sessionFee: p.sessionFee || 0,
            languages: p.languages || [], license: p.license || '',
            availableSlots: p.availableSlots || [],
            education: p.education?.length ? p.education : [{ degree: '', institution: '', year: '' }]
        }
    });

    const setP = (key, val) => setForm(prev => ({ ...prev, psychologistProfile: { ...prev.psychologistProfile, [key]: val } }));
    const toggleSpec = (s) => { const c = form.psychologistProfile.specializations; setP('specializations', c.includes(s) ? c.filter(x => x !== s) : [...c, s]); };
    const toggleLang = (l) => { const c = form.psychologistProfile.languages; setP('languages', c.includes(l) ? c.filter(x => x !== l) : [...c, l]); };

    const handleSave = async () => {
        setSaving(true);
        try {
            const { data } = await updatePsychologistProfile(form);
            updateUser(data.user);
            toast.success('Profile updated!');
        } catch (err) { toast.error(err.response?.data?.message || 'Save failed'); }
        finally { setSaving(false); }
    };

    const sub = p.subscription || {};

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <h1 style={{ fontSize: 20, fontWeight: 700 }}>Profile & Settings</h1>
                    <button className="btn btn-primary" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save Changes'}</button>
                </div>
                <div className="page-content">
                    <div className="card" style={{ marginBottom: 20, borderLeft: `4px solid ${sub.status === 'active' ? '#10B981' : sub.status === 'trial' ? '#F59E0B' : '#EF4444'}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>Subscription: <span style={{ textTransform: 'capitalize' }}>{sub.status || 'None'}</span></div>
                                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
                                    {sub.status === 'trial' ? `Trial ends: ${sub.trialEndsAt ? new Date(sub.trialEndsAt).toLocaleDateString() : 'N/A'}` :
                                        sub.status === 'active' ? `Renews: ${sub.currentPeriodEnd ? new Date(sub.currentPeriodEnd).toLocaleDateString() : 'N/A'}` : 'No active subscription'}
                                </div>
                            </div>
                            <Link to="/pricing" className="btn btn-primary btn-sm">Manage Subscription</Link>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                        {['basic', 'specializations', 'availability', 'education'].map(t => (
                            <button key={t} onClick={() => setTab(t)} className={`btn btn-sm ${tab === t ? 'btn-primary' : 'btn-outline'}`}>
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="card">
                        {tab === 'basic' && (
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div className="form-group"><label className="form-label">Full Name</label><input className="form-control" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} /></div>
                                <div className="form-group"><label className="form-label">Phone</label><input className="form-control" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} /></div>
                                <div className="form-group"><label className="form-label">Years of Experience</label><input className="form-control" type="number" value={form.psychologistProfile.experience} onChange={e => setP('experience', e.target.value)} /></div>
                                <div className="form-group"><label className="form-label">Session Fee ($)</label><input className="form-control" type="number" value={form.psychologistProfile.sessionFee} onChange={e => setP('sessionFee', e.target.value)} /></div>
                                <div className="form-group"><label className="form-label">License Number</label><input className="form-control" value={form.psychologistProfile.license} onChange={e => setP('license', e.target.value)} placeholder="License / Registration No." /></div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}><label className="form-label">Professional Bio</label><textarea className="form-control" rows={5} value={form.psychologistProfile.bio} onChange={e => setP('bio', e.target.value)} placeholder="Tell patients about yourself..." /></div>
                            </div>
                        )}

                        {tab === 'specializations' && (
                            <div>
                                <div className="form-group">
                                    <label className="form-label">Specializations</label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                                        {SPECS.map(s => <button key={s} type="button" onClick={() => toggleSpec(s)} className={`btn btn-sm ${form.psychologistProfile.specializations.includes(s) ? 'btn-primary' : 'btn-outline'}`}>{s}</button>)}
                                    </div>
                                </div>
                                <div className="form-group" style={{ marginTop: 24 }}>
                                    <label className="form-label">Languages Spoken</label>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                                        {LANGS.map(l => <button key={l} type="button" onClick={() => toggleLang(l)} className={`btn btn-sm ${form.psychologistProfile.languages.includes(l) ? 'btn-primary' : 'btn-outline'}`}>{l}</button>)}
                                    </div>
                                </div>
                            </div>
                        )}

                        {tab === 'availability' && (
                            <div>
                                <label className="form-label" style={{ marginBottom: 12, display: 'block' }}>Available Time Slots</label>
                                {DAYS.map(day => {
                                    const slot = form.psychologistProfile.availableSlots?.find(s => s.day === day);
                                    return (
                                        <div key={day} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                                            <div style={{ width: 40, fontWeight: 600, fontSize: 14 }}>{day}</div>
                                            <input type="time" className="form-control" style={{ width: 130 }} value={slot?.startTime || ''}
                                                onChange={e => { const slots = form.psychologistProfile.availableSlots.filter(s => s.day !== day); setP('availableSlots', [...slots, { day, startTime: e.target.value, endTime: slot?.endTime || '' }]); }} />
                                            <span style={{ color: 'var(--text-muted)' }}>to</span>
                                            <input type="time" className="form-control" style={{ width: 130 }} value={slot?.endTime || ''}
                                                onChange={e => { const slots = form.psychologistProfile.availableSlots.filter(s => s.day !== day); setP('availableSlots', [...slots, { day, startTime: slot?.startTime || '', endTime: e.target.value }]); }} />
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {tab === 'education' && (
                            <div>
                                {form.psychologistProfile.education.map((edu, i) => (
                                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 12, marginBottom: 12, padding: 16, background: 'var(--bg)', borderRadius: 10 }}>
                                        <div className="form-group" style={{ margin: 0 }}>
                                            <label className="form-label">Degree</label>
                                            <input className="form-control" value={edu.degree} placeholder="e.g. PhD Psychology" onChange={e => { const ed = [...form.psychologistProfile.education]; ed[i].degree = e.target.value; setP('education', ed); }} />
                                        </div>
                                        <div className="form-group" style={{ margin: 0 }}>
                                            <label className="form-label">Institution</label>
                                            <input className="form-control" value={edu.institution} placeholder="University name" onChange={e => { const ed = [...form.psychologistProfile.education]; ed[i].institution = e.target.value; setP('education', ed); }} />
                                        </div>
                                        <div className="form-group" style={{ margin: 0 }}>
                                            <label className="form-label">Year</label>
                                            <div style={{ display: 'flex', gap: 8 }}>
                                                <input className="form-control" type="number" value={edu.year} placeholder="2020" style={{ width: 90 }} onChange={e => { const ed = [...form.psychologistProfile.education]; ed[i].year = e.target.value; setP('education', ed); }} />
                                                {form.psychologistProfile.education.length > 1 && (
                                                    <button className="btn btn-danger btn-sm" onClick={() => setP('education', form.psychologistProfile.education.filter((_, j) => j !== i))}>✕</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className="btn btn-outline btn-sm" onClick={() => setP('education', [...form.psychologistProfile.education, { degree: '', institution: '', year: '' }])}>+ Add Education</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}