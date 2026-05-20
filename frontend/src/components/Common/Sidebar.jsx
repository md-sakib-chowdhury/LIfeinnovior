// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { FiHome, FiUsers, FiCalendar, FiFileText, FiDollarSign, FiBook, FiSettings, FiLogOut, FiList } from 'react-icons/fi';

// const adminNav = [{
//     label: 'Overview', items: [
//         { to: '/admin', icon: FiHome, label: 'Dashboard' },
//         { to: '/admin/users', icon: FiUsers, label: 'Users' },
//         { to: '/admin/plans', icon: FiList, label: 'Subscription Plans' },
//         { to: '/admin/payments', icon: FiDollarSign, label: 'Payments' },
//         { to: '/admin/blogs', icon: FiBook, label: 'Blog Posts' },
//     ]
// }];

// const psychologistNav = [
//     {
//         label: 'Main', items: [
//             { to: '/psychologist', icon: FiHome, label: 'Dashboard' },
//             { to: '/psychologist/appointments', icon: FiCalendar, label: 'Appointments' },
//             { to: '/psychologist/patients', icon: FiUsers, label: 'My Patients' },
//             { to: '/psychologist/sessions', icon: FiFileText, label: 'Session Notes' },
//             { to: '/psychologist/blog', icon: FiBook, label: 'My Blog' },
//         ]
//     },
//     {
//         label: 'Account', items: [
//             { to: '/psychologist/profile', icon: FiSettings, label: 'Profile & Settings' },
//         ]
//     }
// ];

// const patientNav = [{
//     label: 'Main', items: [
//         { to: '/patient', icon: FiHome, label: 'Dashboard' },
//         { to: '/patient/appointments', icon: FiCalendar, label: 'My Appointments' },
//         { to: '/patient/sessions', icon: FiFileText, label: 'Session History' },
//         { to: '/find-psychologist', icon: FiUsers, label: 'Find Psychologist' },
//     ]
// }];

// const navByRole = { superadmin: adminNav, psychologist: psychologistNav, patient: patientNav };

// export default function Sidebar() {
//     const { user, logout } = useAuth();
//     const navigate = useNavigate();
//     const nav = navByRole[user?.role] || patientNav;

//     const handleLogout = () => { logout(); navigate('/login'); };

//     return (
//         <aside className="sidebar">
//             <div className="sidebar-logo">
//                 <h2>LifeInnovior</h2>
//                 <span>{user?.role === 'superadmin' ? 'Admin Panel' : user?.role === 'psychologist' ? 'Psychologist Panel' : 'Patient Portal'}</span>
//             </div>
//             <nav className="sidebar-nav">
//                 {nav.map(section => (
//                     <div key={section.label}>
//                         <div className="nav-section-title">{section.label}</div>
//                         {section.items.map(item => (
//                             <NavLink key={item.to} to={item.to} end={item.to.split('/').length <= 2}
//                                 className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
//                                 <item.icon />{item.label}
//                             </NavLink>
//                         ))}
//                     </div>
//                 ))}
//             </nav>
//             <div className="sidebar-footer">
//                 <div className="user-info" style={{ marginBottom: '10px' }}>
//                     <div className="user-avatar">
//                         {user?.avatar ? <img src={user.avatar} alt={user.name} /> : user?.name?.charAt(0)?.toUpperCase()}
//                     </div>
//                     <div className="user-details">
//                         <div className="user-name">{user?.name}</div>
//                         <div className="user-role">{user?.role}</div>
//                     </div>
//                 </div>
//                 <button className="nav-item" onClick={handleLogout} style={{ color: '#EF4444' }}>
//                     <FiLogOut /> Logout
//                 </button>
//             </div>
//         </aside>
//     );
// }

// import React from 'react';
// import { NavLink, useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { FiHome, FiUsers, FiCalendar, FiFileText, FiDollarSign, FiBook, FiSettings, FiLogOut, FiList, FiGlobe } from 'react-icons/fi';

// const adminNav = [{
//     label: 'Overview', items: [
//         { to: '/', icon: FiGlobe, label: 'Home' },
//         { to: '/admin', icon: FiHome, label: 'Dashboard' },
//         { to: '/admin/users', icon: FiUsers, label: 'Users' },
//         { to: '/admin/plans', icon: FiList, label: 'Subscription Plans' },
//         { to: '/admin/payments', icon: FiDollarSign, label: 'Payments' },
//         { to: '/admin/blogs', icon: FiBook, label: 'Blog Posts' },
//     ]
// }];

// const psychologistNav = [
//     {
//         label: 'Main', items: [
//             { to: '/', icon: FiGlobe, label: 'Home' },
//             { to: '/psychologist', icon: FiHome, label: 'Dashboard' },
//             { to: '/psychologist/appointments', icon: FiCalendar, label: 'Appointments' },
//             { to: '/psychologist/patients', icon: FiUsers, label: 'My Patients' },
//             { to: '/psychologist/sessions', icon: FiFileText, label: 'Session Notes' },
//             { to: '/psychologist/blog', icon: FiBook, label: 'My Blog' },
//         ]
//     },
//     {
//         label: 'Account', items: [
//             { to: '/psychologist/profile', icon: FiSettings, label: 'Profile & Settings' },
//         ]
//     }
// ];

// const patientNav = [{
//     label: 'Main', items: [
//         { to: '/', icon: FiGlobe, label: 'Home' },
//         { to: '/patient', icon: FiHome, label: 'Dashboard' },
//         { to: '/patient/appointments', icon: FiCalendar, label: 'My Appointments' },
//         { to: '/patient/sessions', icon: FiFileText, label: 'Session History' },
//         { to: '/find-psychologist', icon: FiUsers, label: 'Find Psychologist' },
//     ]
// }];

// const navByRole = { superadmin: adminNav, psychologist: psychologistNav, patient: patientNav };

// export default function Sidebar() {
//     const { user, logout } = useAuth();
//     const navigate = useNavigate();
//     const nav = navByRole[user?.role] || patientNav;

//     const handleLogout = () => { logout(); navigate('/login'); };

//     return (
//         <aside className="sidebar">
//             <div className="sidebar-logo">
//                 <Link to="/" style={{ textDecoration: 'none' }}>
//                     <h2 style={{ color: 'var(--primary)' }}>LifeInnovior</h2>
//                 </Link>
//                 <span>{user?.role === 'superadmin' ? 'Admin Panel' : user?.role === 'psychologist' ? 'Psychologist Panel' : 'Patient Portal'}</span>
//             </div>
//             <nav className="sidebar-nav">
//                 {nav.map(section => (
//                     <div key={section.label}>
//                         <div className="nav-section-title">{section.label}</div>
//                         {section.items.map(item => (
//                             <NavLink key={item.to} to={item.to} end={item.to.split('/').length <= 2}
//                                 className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
//                                 <item.icon />{item.label}
//                             </NavLink>
//                         ))}
//                     </div>
//                 ))}
//             </nav>
//             <div className="sidebar-footer">
//                 <div className="user-info" style={{ marginBottom: '10px' }}>
//                     <div className="user-avatar">
//                         {user?.avatar ? <img src={user.avatar} alt={user.name} /> : user?.name?.charAt(0)?.toUpperCase()}
//                     </div>
//                     <div className="user-details">
//                         <div className="user-name">{user?.name}</div>
//                         <div className="user-role">{user?.role}</div>
//                     </div>
//                 </div>
//                 <button className="nav-item" onClick={handleLogout} style={{ color: '#EF4444' }}>
//                     <FiLogOut /> Logout
//                 </button>
//             </div>
//         </aside>
//     );
// }
import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FiHome, FiUsers, FiCalendar, FiFileText, FiDollarSign, FiBook, FiSettings, FiLogOut, FiList, FiGlobe, FiActivity } from 'react-icons/fi';

const adminNav = [{
    label: 'Overview', items: [
        { to: '/', icon: FiGlobe, label: 'Home' },
        { to: '/admin', icon: FiActivity, label: 'Dashboard' },
        { to: '/admin/users', icon: FiUsers, label: 'Users' },
        { to: '/admin/plans', icon: FiList, label: 'Subscription Plans' },
        { to: '/admin/payments', icon: FiDollarSign, label: 'Payments' },
        { to: '/admin/blogs', icon: FiBook, label: 'Blog Posts' },
    ]
}];

const psychologistNav = [
    {
        label: 'Main', items: [
            { to: '/', icon: FiGlobe, label: 'Home' },
            { to: '/psychologist', icon: FiActivity, label: 'Dashboard' },
            { to: '/psychologist/appointments', icon: FiCalendar, label: 'Appointments' },
            { to: '/psychologist/patients', icon: FiUsers, label: 'My Patients' },
            { to: '/psychologist/sessions', icon: FiFileText, label: 'Session Notes' },
            { to: '/psychologist/blog', icon: FiBook, label: 'My Blog' },
        ]
    },
    {
        label: 'Account', items: [
            { to: '/psychologist/profile', icon: FiSettings, label: 'Profile & Settings' },
        ]
    }
];

const patientNav = [{
    label: 'Main', items: [
        { to: '/', icon: FiGlobe, label: 'Home' },
        { to: '/patient', icon: FiActivity, label: 'Dashboard' },
        { to: '/patient/appointments', icon: FiCalendar, label: 'My Appointments' },
        { to: '/patient/sessions', icon: FiFileText, label: 'Session History' },
        { to: '/find-psychologist', icon: FiUsers, label: 'Find Psychologist' },
    ]
}];

const navByRole = { superadmin: adminNav, psychologist: psychologistNav, patient: patientNav };

const roleConfig = {
    superadmin: { label: 'Admin Panel', color: '#EF4444', bg: '#FEF2F2' },
    psychologist: { label: 'Psychologist Panel', color: '#7C3AED', bg: '#F5F3FF' },
    patient: { label: 'Patient Portal', color: '#06B6D4', bg: '#ECFEFF' },
};

export default function Sidebar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const nav = navByRole[user?.role] || patientNav;
    const config = roleConfig[user?.role] || roleConfig.patient;

    const handleLogout = () => { logout(); navigate('/login'); };

    return (
        <aside className="sidebar">
            {/* Logo */}
            <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--border)' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#fff', fontWeight: 800, fontSize: 16 }}>L</span>
                    </div>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--primary)', letterSpacing: '-0.3px' }}>LifeInnovior</div>
                        <div style={{ fontSize: 10, fontWeight: 600, color: config.color, background: config.bg, padding: '1px 8px', borderRadius: 20, display: 'inline-block', marginTop: 2 }}>
                            {config.label}
                        </div>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav style={{ padding: '12px 0', flex: 1, overflowY: 'auto' }}>
                {nav.map(section => (
                    <div key={section.label}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 20px 6px' }}>
                            {section.label}
                        </div>
                        {section.items.map(item => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === '/'}
                                style={({ isActive }) => ({
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    padding: '10px 16px',
                                    margin: '2px 8px',
                                    borderRadius: 8,
                                    textDecoration: 'none',
                                    fontWeight: isActive ? 600 : 500,
                                    fontSize: 14,
                                    color: isActive ? '#4F46E5' : 'var(--text-secondary)',
                                    background: isActive ? 'var(--primary-light)' : 'transparent',
                                    transition: 'all 0.15s',
                                })}>
                                {({ isActive }) => (
                                    <>
                                        <div style={{ width: 32, height: 32, borderRadius: 8, background: isActive ? '#4F46E5' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' }}>
                                            <item.icon size={16} color={isActive ? '#fff' : 'var(--text-secondary)'} />
                                        </div>
                                        {item.label}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div style={{ padding: '16px', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'var(--bg)', borderRadius: 10, marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: 14, flexShrink: 0 }}>
                        {user?.avatar ? <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} /> : user?.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name}</div>
                        <div style={{ fontSize: 11, color: config.color, fontWeight: 500, textTransform: 'capitalize' }}>{user?.role}</div>
                    </div>
                </div>
                <button onClick={handleLogout}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', width: '100%', border: 'none', borderRadius: 8, background: 'transparent', cursor: 'pointer', color: '#EF4444', fontWeight: 500, fontSize: 14, transition: 'all 0.15s' }}
                    onMouseOver={e => e.currentTarget.style.background = '#FEF2F2'}
                    onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <FiLogOut size={16} /> Logout
                </button>
            </div>
        </aside>
    );
}