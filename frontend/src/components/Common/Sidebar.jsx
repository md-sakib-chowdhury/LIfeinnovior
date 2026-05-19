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

import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FiHome, FiUsers, FiCalendar, FiFileText, FiDollarSign, FiBook, FiSettings, FiLogOut, FiList, FiGlobe } from 'react-icons/fi';

const adminNav = [{
    label: 'Overview', items: [
        { to: '/', icon: FiGlobe, label: 'Home' },
        { to: '/admin', icon: FiHome, label: 'Dashboard' },
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
            { to: '/psychologist', icon: FiHome, label: 'Dashboard' },
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
        { to: '/patient', icon: FiHome, label: 'Dashboard' },
        { to: '/patient/appointments', icon: FiCalendar, label: 'My Appointments' },
        { to: '/patient/sessions', icon: FiFileText, label: 'Session History' },
        { to: '/find-psychologist', icon: FiUsers, label: 'Find Psychologist' },
    ]
}];

const navByRole = { superadmin: adminNav, psychologist: psychologistNav, patient: patientNav };

export default function Sidebar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const nav = navByRole[user?.role] || patientNav;

    const handleLogout = () => { logout(); navigate('/login'); };

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h2 style={{ color: 'var(--primary)' }}>LifeInnovior</h2>
                </Link>
                <span>{user?.role === 'superadmin' ? 'Admin Panel' : user?.role === 'psychologist' ? 'Psychologist Panel' : 'Patient Portal'}</span>
            </div>
            <nav className="sidebar-nav">
                {nav.map(section => (
                    <div key={section.label}>
                        <div className="nav-section-title">{section.label}</div>
                        {section.items.map(item => (
                            <NavLink key={item.to} to={item.to} end={item.to.split('/').length <= 2}
                                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <item.icon />{item.label}
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>
            <div className="sidebar-footer">
                <div className="user-info" style={{ marginBottom: '10px' }}>
                    <div className="user-avatar">
                        {user?.avatar ? <img src={user.avatar} alt={user.name} /> : user?.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <div className="user-details">
                        <div className="user-name">{user?.name}</div>
                        <div className="user-role">{user?.role}</div>
                    </div>
                </div>
                <button className="nav-item" onClick={handleLogout} style={{ color: '#EF4444' }}>
                    <FiLogOut /> Logout
                </button>
            </div>
        </aside>
    );
}