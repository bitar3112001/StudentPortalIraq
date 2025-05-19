import axios from 'axios';
import store from '@/store';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000', // Replace with your actual API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = store.getters['auth/token'];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication methods
export const authService = {
  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      if (response.data.token) {
        await store.dispatch('auth/setToken', response.data.token);
        await store.dispatch('auth/setUser', response.data.user);
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Logout user
  logout: async () => {
    await store.dispatch('auth/clearAuth');
  },

  // Get current user
  getCurrentUser: () => {
    return store.getters['auth/currentUser'];
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return store.getters['auth/isAuthenticated'];
  }
};

export default api; 