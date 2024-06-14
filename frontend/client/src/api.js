import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const createProduct = (product) => axios.post(`${API_URL}/products`, product);

export const fetchQuotes = () => axios.get(`${API_URL}/quotes`);
export const createQuote = (quote) => axios.post(`${API_URL}/quotes`, quote);

export const fetchInvoices = () => axios.get(`${API_URL}/invoices`);
export const createInvoice = (invoice) => axios.post(`${API_URL}/invoices`, invoice);
