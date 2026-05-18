import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Home from './pages/Home';
import FindPsychologist from './pages/FindPsychologist';
import PsychologistProfile from './pages/PsychologistProfile';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Pricing from './pages/Pricing';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminUsers from './pages/Admin/Users';
import AdminPayments from './pages/Admin/Payments';
import AdminPlans from './pages/Admin/Plans';
import AdminBlogs from './pages/Admin/Blogs';
import PsychologistDashboard from './pages/Psychologist/Dashboard';
import PsychologistPatients from './pages/Psychologist/Patients';
import PsychologistAppointments from './pages/Psychologist/Appointments';
import PsychologistSession from './pages/Psychologist/SessionNotes';
import PsychologistProfilePage from './pages/Psychologist/Profile';
import PsychologistBlog from './pages/Psychologist/Blog';
import PatientDashboard from './pages/Patient/Dashboard';
import PatientAppointments from './pages/Patient/Appointments';
import PatientSessions from './pages/Patient/Sessions';
import VideoCall from './pages/VideoCall';

const ProtectedRoute = ({ children, roles }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="loading-screen"><div className="spinner" /></div>;
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/dashboard" />;
  return children;
};

const DashboardRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role === 'superadmin') return <Navigate to="/admin" />;
  if (user.role === 'psychologist') return <Navigate to="/psychologist" />;
  return <Navigate to="/patient" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-psychologist" element={<FindPsychologist />} />
          <Route path="/psychologist/:id" element={<PsychologistProfile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardRedirect /></ProtectedRoute>} />

          <Route path="/admin" element={<ProtectedRoute roles={['superadmin']}><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute roles={['superadmin']}><AdminUsers /></ProtectedRoute>} />
          <Route path="/admin/payments" element={<ProtectedRoute roles={['superadmin']}><AdminPayments /></ProtectedRoute>} />
          <Route path="/admin/plans" element={<ProtectedRoute roles={['superadmin']}><AdminPlans /></ProtectedRoute>} />
          <Route path="/admin/blogs" element={<ProtectedRoute roles={['superadmin']}><AdminBlogs /></ProtectedRoute>} />

          <Route path="/psychologist" element={<ProtectedRoute roles={['psychologist']}><PsychologistDashboard /></ProtectedRoute>} />
          <Route path="/psychologist/appointments" element={<ProtectedRoute roles={['psychologist']}><PsychologistAppointments /></ProtectedRoute>} />
          <Route path="/psychologist/patients" element={<ProtectedRoute roles={['psychologist']}><PsychologistPatients /></ProtectedRoute>} />
          <Route path="/psychologist/sessions" element={<ProtectedRoute roles={['psychologist']}><PsychologistSession /></ProtectedRoute>} />
          <Route path="/psychologist/profile" element={<ProtectedRoute roles={['psychologist']}><PsychologistProfilePage /></ProtectedRoute>} />
          <Route path="/psychologist/blog" element={<ProtectedRoute roles={['psychologist']}><PsychologistBlog /></ProtectedRoute>} />

          <Route path="/patient" element={<ProtectedRoute roles={['patient']}><PatientDashboard /></ProtectedRoute>} />
          <Route path="/patient/appointments" element={<ProtectedRoute roles={['patient']}><PatientAppointments /></ProtectedRoute>} />
          <Route path="/patient/sessions" element={<ProtectedRoute roles={['patient']}><PatientSessions /></ProtectedRoute>} />

          <Route path="/video/:appointmentId" element={<ProtectedRoute><VideoCall /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;