import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (token) {
      getUserProfile();
    }
    setLoading(false);
  }, []);

  const login = async (identifier, password) => {
    try {
      setError('');
      const response = await api.post('/auth/login', { identifier, password });

      const { accessToken, refreshToken } = response.data.data;
      Cookies.set('accessToken', accessToken, { sameSite: 'Lax' });
      Cookies.set('refreshToken', refreshToken, { sameSite: 'Lax' });

      await getUserProfile(); // fetch user data after login

      return { success: true };
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      setError(message);
      return { success: false, message };
    }
  };

  const signup = async (userData) => {
    try {
      setError('');
      const response = await api.post('/auth/signup', userData);

      if (response.data.success) return { success: true, message: response.data.message };
    } catch (err) {
      const message = err.response?.data?.message || 'Signup failed';
      setError(message);
      return { success: false, message };
    }
  };

  const logout = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    setUser(null);
  };

  const getUserProfile = async () => {
    try {
      const response = await api.get('/auth/user');
      setUser(response.data.user); // user data from backend
    } catch (err) {
      console.error('Failed to get user profile:', err);
      logout();
    }
  };

  const updateProfile = async (userId, userData) => {
    try {
      const response = await api.put(`/auth/user/update/${userId}`, userData);
      setUser(response.data.data);
      return { success: true, message: response.data.message };
    } catch (err) {
      const message = err.response?.data?.message || 'Profile update failed';
      return { success: false, message };
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
    updateProfile,
    getUserProfile,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
