import axios from 'axios';

const API_BASE_URL = 'http://your-api-base-url.com'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
});

// API functions for login, signup, getUserProfile, getProducts, getCartItems, getQuotes, getInvoices, etc.

export const loginUser = async (email, password) => {
  return await api.post('/login', { email, password });
};

export const signupUser = async (name, email, password) => {
  return await api.post('/signup', { name, email, password });
};

export const getUserProfile = async () => {
  return await api.get('/profile');
};

// Other API functions here...

export default api;
