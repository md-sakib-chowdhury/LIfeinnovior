import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getVideoToken } from '../utils/api';
import toast from 'react-hot-toast';

export default function VideoCall() {
    const { appointmentId } = useParams();
    const navigate = useNavigate();
    const [roomUrl, setRoomUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getVideoToken(appointmentId)
            .then(r => setRoomUrl(r.data.roomUrl))
            .catch(() => { toast.error('Unable to join session'); navigate(-1); })
            .finally(() => setLoading(false));
    }, [appointmentId]);

    if (loading) return <div className="loading-screen"><div className="spinner" /></div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#000' }}>
            <div style={{ background: '#1a1a2e', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'Sora', fontSize: 16 }}>🧠 LifeInnovior — Therapy Session</span>
                <button className="btn btn-danger btn-sm" onClick={() => navigate(-1)}>End Session</button>
            </div>
            <iframe
                src={roomUrl}
                allow="camera; microphone; fullscreen; display-capture"
                style={{ flex: 1, border: 'none' }}
                title="Video Therapy Session"
            />
        </div>
    );
}