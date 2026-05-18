import React, { createContext, useContext, useState, useEffect } from 'react';
import { getMe, login as apiLogin, register as apiRegister } from '../utils/api';
import toast from 'react-hot-toast';
import React from 'react';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('lifeinnovior_token');
        if (token) fetchMe();
        else setLoading(false);
    }, []);

    const fetchMe = async () => {
        try {
            const { data } = await getMe();
            setUser(data.user);
        } catch {
            localStorage.removeItem('lifeinnovior_token');
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        const { data } = await apiLogin({ email, password });
        localStorage.setItem('lifeinnovior_token', data.token);
        setUser(data.user);
        return data.user;
    };

    const register = async (formData) => {
        const { data } = await apiRegister(formData);
        localStorage.setItem('lifeinnovior_token', data.token);
        setUser(data.user);
        return data.user;
    };

    const logout = () => {
        localStorage.removeItem('lifeinnovior_token');
        setUser(null);
        toast.success('Logged out successfully');
    };

    const updateUser = (updatedUser) => setUser(prev => ({ ...prev, ...updatedUser }));

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser, fetchMe }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);