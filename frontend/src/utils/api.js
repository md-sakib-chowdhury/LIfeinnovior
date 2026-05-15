import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('lifeinnovior_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

API.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.status === 401) {
            localStorage.removeItem('lifeinnovior_token');
            window.location.href = '/login';
        }
        return Promise.reject(err);
    }
);

export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);
export const getMe = () => API.get('/auth/me');
export const forgotPassword = (email) => API.post('/auth/forgot-password', { email });
export const resetPassword = (token, password) => API.put(`/auth/reset-password/${token}`, { password });
export const updatePassword = (data) => API.put('/auth/update-password', data);

export const getPsychologists = (params) => API.get('/psychologist', { params });
export const getPsychologist = (id) => API.get(`/psychologist/${id}`);
export const updatePsychologistProfile = (data) => API.put('/psychologist/profile/me', data);
export const getMyPatients = () => API.get('/psychologist/my/patients');

export const createAppointment = (data) => API.post('/appointments', data);
export const getAppointments = (params) => API.get('/appointments', { params });
export const getAppointment = (id) => API.get(`/appointments/${id}`);
export const updateAppointmentStatus = (id, data) => API.put(`/appointments/${id}/status`, data);
export const getVideoToken = (id) => API.get(`/appointments/${id}/video-token`);

export const createSessionNote = (data) => API.post('/sessions', data);
export const getSessionNotes = () => API.get('/sessions');
export const updateSessionNote = (id, data) => API.put(`/sessions/${id}`, data);

export const createSubscription = (data) => API.post('/payments/subscribe', data);
export const createAppointmentPayment = (data) => API.post('/payments/appointment', data);
export const getMyPayments = () => API.get('/payments/my');

export const getBlogs = (params) => API.get('/blog', { params });
export const getBlog = (slug) => API.get(`/blog/${slug}`);
export const createBlog = (data) => API.post('/blog', data);
export const updateBlog = (id, data) => API.put(`/blog/${id}`, data);
export const deleteBlog = (id) => API.delete(`/blog/${id}`);

export const getAdminStats = () => API.get('/admin/stats');
export const getAllUsers = (params) => API.get('/admin/users', { params });
export const updateUser = (id, data) => API.put(`/admin/users/${id}`, data);
export const deleteUser = (id) => API.delete(`/admin/users/${id}`);
export const getPlans = () => API.get('/admin/plans');
export const createPlan = (data) => API.post('/admin/plans', data);
export const updatePlan = (id, data) => API.put(`/admin/plans/${id}`, data);
export const deletePlan = (id) => API.delete(`/admin/plans/${id}`);
export const getAllPayments = (params) => API.get('/admin/payments', { params });

export default API;