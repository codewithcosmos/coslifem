import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust URL as per your backend setup

const apiService = {
  // Auth API calls
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  // Other API calls (products, quotes, invoices, etc.)
};

export default apiService;
