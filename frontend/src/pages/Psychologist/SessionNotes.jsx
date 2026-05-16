import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getSessionNotes, createSessionNote, updateSessionNote } from '../../utils/api';
import { FiPlus, FiEdit2, FiFileText } from 'react-icons/fi';
import toast from 'react-hot-toast';

const MOOD_LABELS = { '1': '😞 Very Low', '2': '😕 Low', '3': '😐 Neutral', '4': '🙂 Good', '5': '😊 Very Good' };
const defaultForm = { patient: '', chiefComplaint: '', observations: '', diagnosis: '', treatmentPlan: '', homework: '', nextSessionGoals: '', mood: '3', isConfidential: true };

export default function SessionNotes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [editing, setEditing] = useState(null);
    const [form, setForm] = useState(defaultForm);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        getSessionNotes().then(r => setNotes(r.data.notes || [])).finally(() => setLoading(false));
    }, []);

    const openEdit = (note) => { setEditing(note._id); setForm({ ...note, patient: note.patient?._id || '' }); setModal(true); };
    const openCreate = () => { setEditing(null); setForm(defaultForm); setModal(true); };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            if (editing) {
                const { data } = await updateSessionNote(editing, form);
                setNotes(prev => prev.map(n => n._id === editing ? data.note : n));
                toast.success('Note updated');
            } else {
                const { data } = await createSessionNote(form);
                setNotes(prev => [data.note, ...prev]);
                toast.success('Note created');
            }
            setModal(false);
        } catch (err) { toast.error(err.response?.data?.message || 'Save failed'); }
        finally { setSaving(false); }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Session Notes</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Confidential therapy records</p>
                    </div>
                    <button className="btn btn-primary" onClick={openCreate}><FiPlus /> New Note</button>
                </div>
                <div className="page-content">
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                    ) : notes.length === 0 ? (
                        <div className="empty-state"><div className="empty-icon">📋</div><p>No session notes yet</p></div>
                    ) : (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
                            {notes.map(note => (
                                <div key={note._id} className="card">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                            <div className="user-avatar" style={{ width: 36, height: 36, background: '#ECFEFF', color: '#06B6D4', fontSize: 14 }}>{note.patient?.name?.charAt(0)}</div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: 13 }}>{note.patient?.name}</div>
                                                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{new Date(note.createdAt).toLocaleDateString()}</div>
                                            </div>
                                        </div>
                                        <button className="btn btn-secondary btn-sm" onClick={() => openEdit(note)}><FiEdit2 size={13} /></button>
                                    </div>
                                    {note.chiefComplaint && (
                                        <div style={{ marginBottom: 8 }}>
                                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>Chief Complaint</div>
                                            <p style={{ fontSize: 13 }}>{note.chiefComplaint}</p>
                                        </div>
                                    )}
                                    {note.diagnosis && (
                                        <div style={{ marginBottom: 8 }}>
                                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>Diagnosis</div>
                                            <p style={{ fontSize: 13 }}>{note.diagnosis}</p>
                                        </div>
                                    )}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                                        <span style={{ fontSize: 12 }}>{MOOD_LABELS[note.mood] || '😐 Neutral'}</span>
                                        <span className={`badge ${note.isConfidential ? 'badge-warning' : 'badge-gray'}`} style={{ fontSize: 11 }}>
                                            {note.isConfidential ? '🔒 Confidential' : 'Shared'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {modal && (
                <div className="modal-overlay" onClick={() => setModal(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 640 }}>
                        <div className="modal-header">
                            <h2 className="modal-title"><FiFileText size={18} /> {editing ? 'Edit Note' : 'New Session Note'}</h2>
                            <button className="modal-close" onClick={() => setModal(false)}>✕</button>
                        </div>
                        <form onSubmit={handleSave}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Patient ID *</label>
                                    <input className="form-control" value={form.patient} required onChange={e => setForm(p => ({ ...p, patient: e.target.value }))} placeholder="Patient user ID" />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Chief Complaint</label>
                                    <textarea className="form-control" rows={2} value={form.chiefComplaint} onChange={e => setForm(p => ({ ...p, chiefComplaint: e.target.value }))} />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Observations</label>
                                    <textarea className="form-control" rows={3} value={form.observations} onChange={e => setForm(p => ({ ...p, observations: e.target.value }))} />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Diagnosis</label>
                                    <input className="form-control" value={form.diagnosis} onChange={e => setForm(p => ({ ...p, diagnosis: e.target.value }))} />
                                </div>
                                <div className="form-group" style={{ gridColumn: '1/-1' }}>
                                    <label className="form-label">Treatment Plan</label>
                                    <textarea className="form-control" rows={3} value={form.treatmentPlan} onChange={e => setForm(p => ({ ...p, treatmentPlan: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Homework</label>
                                    <textarea className="form-control" rows={2} value={form.homework} onChange={e => setForm(p => ({ ...p, homework: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Next Session Goals</label>
                                    <textarea className="form-control" rows={2} value={form.nextSessionGoals} onChange={e => setForm(p => ({ ...p, nextSessionGoals: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Patient Mood</label>
                                    <select className="form-control" value={form.mood} onChange={e => setForm(p => ({ ...p, mood: e.target.value }))}>
                                        {Object.entries(MOOD_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                                    </select>
                                </div>
                                <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 28 }}>
                                    <input type="checkbox" id="conf" checked={form.isConfidential} onChange={e => setForm(p => ({ ...p, isConfidential: e.target.checked }))} />
                                    <label htmlFor="conf" style={{ margin: 0, cursor: 'pointer', fontSize: 13 }}>🔒 Mark as confidential</label>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                                <button type="button" className="btn btn-outline" onClick={() => setModal(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? 'Saving...' : 'Save Note'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}