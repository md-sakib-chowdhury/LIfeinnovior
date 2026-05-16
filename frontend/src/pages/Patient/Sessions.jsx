import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getSessionNotes } from '../../utils/api';

export default function PatientSessions() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSessionNotes().then(r => setNotes(r.data.notes || [])).finally(() => setLoading(false));
    }, []);

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Session History</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Notes shared by your psychologist</p>
                    </div>
                </div>
                <div className="page-content">
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: 60 }}><div className="spinner" style={{ margin: '0 auto' }} /></div>
                    ) : notes.length === 0 ? (
                        <div className="empty-state"><div className="empty-icon">📋</div><p>No session records shared with you yet</p></div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {notes.map(n => (
                                <div key={n._id} className="card">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                                        <div style={{ fontWeight: 600 }}>Session on {new Date(n.createdAt).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</div>
                                        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Dr. {n.psychologist?.name}</span>
                                    </div>
                                    {n.treatmentPlan && (
                                        <div style={{ marginBottom: 12 }}>
                                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Treatment Plan</div>
                                            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{n.treatmentPlan}</p>
                                        </div>
                                    )}
                                    {n.homework && (
                                        <div style={{ marginBottom: 12 }}>
                                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Homework</div>
                                            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{n.homework}</p>
                                        </div>
                                    )}
                                    {n.nextSessionGoals && (
                                        <div>
                                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Next Session Goals</div>
                                            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{n.nextSessionGoals}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}