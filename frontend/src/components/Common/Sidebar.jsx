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
        { to: '/', icon: FiGlobe, label: 'Home', color: '#06B6D4' },
        { to: '/admin', icon: FiActivity, label: 'Dashboard', color: '#4F46E5' },
        { to: '/admin/users', icon: FiUsers, label: 'Users', color: '#7C3AED' },
        { to: '/admin/plans', icon: FiList, label: 'Subscription Plans', color: '#F59E0B' },
        { to: '/admin/payments', icon: FiDollarSign, label: 'Payments', color: '#10B981' },
        { to: '/admin/blogs', icon: FiBook, label: 'Blog Posts', color: '#EF4444' },
    ]
}];

const psychologistNav = [
    {
        label: 'Main', items: [
            { to: '/', icon: FiGlobe, label: 'Home', color: '#06B6D4' },
            { to: '/psychologist', icon: FiActivity, label: 'Dashboard', color: '#4F46E5' },
            { to: '/psychologist/appointments', icon: FiCalendar, label: 'Appointments', color: '#7C3AED' },
            { to: '/psychologist/patients', icon: FiUsers, label: 'My Patients', color: '#10B981' },
            { to: '/psychologist/sessions', icon: FiFileText, label: 'Session Notes', color: '#F59E0B' },
            { to: '/psychologist/blog', icon: FiBook, label: 'My Blog', color: '#EF4444' },
        ]
    },
    {
        label: 'Account', items: [
            { to: '/psychologist/profile', icon: FiSettings, label: 'Profile & Settings', color: '#6B7280' },
        ]
    }
];

const patientNav = [{
    label: 'Main', items: [
        { to: '/', icon: FiGlobe, label: 'Home', color: '#06B6D4' },
        { to: '/patient', icon: FiActivity, label: 'Dashboard', color: '#4F46E5' },
        { to: '/patient/appointments', icon: FiCalendar, label: 'My Appointments', color: '#7C3AED' },
        { to: '/patient/sessions', icon: FiFileText, label: 'Session History', color: '#F59E0B' },
        { to: '/find-psychologist', icon: FiUsers, label: 'Find Psychologist', color: '#10B981' },
    ]
}];

const navByRole = { superadmin: adminNav, psychologist: psychologistNav, patient: patientNav };

const roleConfig = {
    superadmin: { label: 'Admin Panel', color: '#EF4444', bg: '#FEF2F2', gradient: 'linear-gradient(135deg, #EF4444, #F97316)' },
    psychologist: { label: 'Psychologist Panel', color: '#7C3AED', bg: '#F5F3FF', gradient: 'linear-gradient(135deg, #7C3AED, #4F46E5)' },
    patient: { label: 'Patient Portal', color: '#06B6D4', bg: '#ECFEFF', gradient: 'linear-gradient(135deg, #06B6D4, #4F46E5)' },
};

export default function Sidebar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const nav = navByRole[user?.role] || patientNav;
    const config = roleConfig[user?.role] || roleConfig.patient;

    const handleLogout = () => { logout(); navigate('/login'); };

    return (
        <aside style={{ width: 260, background: '#fff', borderRight: '1px solid #E5E7EB', height: '100vh', position: 'fixed', overflowY: 'auto', zIndex: 100, display: 'flex', flexDirection: 'column' }}>

            {/* Logo */}
            <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid #F3F4F6' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: config.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(79,70,229,0.3)' }}>
                        <span style={{ color: '#fff', fontWeight: 900, fontSize: 18 }}>L</span>
                    </div>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: 17, color: '#111827', letterSpacing: '-0.5px' }}>LifeInnovior</div>
                        <div style={{ fontSize: 10, fontWeight: 700, color: config.color, background: config.bg, padding: '2px 8px', borderRadius: 20, display: 'inline-block', marginTop: 2 }}>
                            {config.label}
                        </div>
                    </div>
                </Link>
            </div>

            {/* Nav */}
            <nav style={{ padding: '8px 0', flex: 1 }}>
                {nav.map(section => (
                    <div key={section.label}>
                        <div style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '14px 20px 6px' }}>
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
                                    gap: 12,
                                    padding: '9px 12px',
                                    margin: '2px 8px',
                                    borderRadius: 10,
                                    textDecoration: 'none',
                                    fontWeight: isActive ? 600 : 500,
                                    fontSize: 14,
                                    color: isActive ? '#fff' : '#6B7280',
                                    background: isActive ? config.gradient : 'transparent',
                                    boxShadow: isActive ? `0 4px 12px ${item.color}40` : 'none',
                                    transition: 'all 0.2s',
                                })}>
                                {({ isActive }) => (
                                    <>
                                        <div style={{
                                            width: 32, height: 32, borderRadius: 8,
                                            background: isActive ? 'rgba(255,255,255,0.2)' : `${item.color}15`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <item.icon size={16} color={isActive ? '#fff' : item.color} />
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
            <div style={{ padding: '12px', borderTop: '1px solid #F3F4F6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', background: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)', borderRadius: 12, marginBottom: 8, border: '1px solid #E5E7EB' }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: config.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: 15, flexShrink: 0, boxShadow: '0 2px 8px rgba(79,70,229,0.3)' }}>
                        {user?.avatar
                            ? <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                            : user?.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#111827' }}>{user?.name}</div>
                        <div style={{ fontSize: 11, color: config.color, fontWeight: 600, textTransform: 'capitalize' }}>{user?.role}</div>
                    </div>
                </div>
                <button onClick={handleLogout}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px', width: '100%', border: '1px solid #FEE2E2', borderRadius: 10, background: '#FFF5F5', cursor: 'pointer', color: '#EF4444', fontWeight: 600, fontSize: 13, transition: 'all 0.2s' }}
                    onMouseOver={e => { e.currentTarget.style.background = '#EF4444'; e.currentTarget.style.color = '#fff'; }}
                    onMouseOut={e => { e.currentTarget.style.background = '#FFF5F5'; e.currentTarget.style.color = '#EF4444'; }}>
                    <FiLogOut size={15} /> Logout
                </button>
            </div>
        </aside>
    );
}