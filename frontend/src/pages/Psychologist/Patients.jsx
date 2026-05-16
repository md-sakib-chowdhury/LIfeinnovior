import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Common/Sidebar';
import { getMyPatients } from '../../utils/api';
import { FiSearch } from 'react-icons/fi';

export default function PsychologistPatients() {
    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMyPatients().then(r => setPatients(r.data.patients || [])).finally(() => setLoading(false));
    }, []);

    const filtered = patients.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-content">
                <div className="page-header">
                    <div>
                        <h1 style={{ fontSize: 20, fontWeight: 700 }}>My Patients</h1>
                        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{patients.length} patients assigned</p>
                    </div>
                </div>
                <div className="page-content">
                    <div className="card">
                        <div style={{ marginBottom: 16 }}>
                            <div className="search-bar">
                                <FiSearch className="search-icon" size={16} />
                                <input className="form-control" placeholder="Search patients..." value={search} onChange={e => setSearch(e.target.value)} />
                            </div>
                        </div>
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr><th>Patient</th><th>Phone</th><th>Gender</th><th>Concerns</th><th>Member Since</th></tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan={5} style={{ textAlign: 'center', padding: 40 }}><div className="spinner" style={{ margin: '0 auto' }} /></td></tr>
                                    ) : filtered.map(p => (
                                        <tr key={p._id}>
                                            <td>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                                    <div className="user-avatar" style={{ background: '#ECFEFF', color: '#06B6D4' }}>{p.name?.charAt(0)}</div>
                                                    <div>
                                                        <div style={{ fontWeight: 600 }}>{p.name}</div>
                                                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ color: 'var(--text-secondary)' }}>{p.phone || '—'}</td>
                                            <td style={{ color: 'var(--text-secondary)', textTransform: 'capitalize' }}>{p.patientProfile?.gender || '—'}</td>
                                            <td>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                                    {p.patientProfile?.currentConcerns?.slice(0, 2).map(c => <span key={c} className="badge badge-info">{c}</span>)}
                                                </div>
                                            </td>
                                            <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{new Date(p.createdAt).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                    {!loading && filtered.length === 0 && (
                                        <tr><td colSpan={5}><div className="empty-state"><p>No patients found</p></div></td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}