// Import action types
import { GET_INVOICES, ADD_INVOICE, DELETE_INVOICE } from './types';

// Example action creators
export const getInvoices = () => {
  // Dispatch an action to get invoices from API or other source
  return {
    type: GET_INVOICES,
  };
};

export const addInvoice = (invoiceData) => {
  // Dispatch an action to add an invoice
  return {
    type: ADD_INVOICE,
    payload: invoiceData,
  };
};

export const deleteInvoice = (invoiceId) => {
  // Dispatch an action to delete an invoice
  return {
    type: DELETE_INVOICE,
    payload: invoiceId,
  };
};
