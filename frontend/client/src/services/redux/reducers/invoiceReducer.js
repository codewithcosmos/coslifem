import {
    FETCH_INVOICES_SUCCESS,
    FETCH_INVOICES_FAILURE,
    ADD_INVOICE_SUCCESS,
    ADD_INVOICE_FAILURE,
    UPDATE_INVOICE_SUCCESS,
    UPDATE_INVOICE_FAILURE,
    DELETE_INVOICE_SUCCESS,
    DELETE_INVOICE_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    invoices: [],
    error: null,
  };
  
  const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_INVOICES_SUCCESS:
        return {
          ...state,
          invoices: action.payload,
          error: null,
        };
      case FETCH_INVOICES_FAILURE:
      case ADD_INVOICE_FAILURE:
      case UPDATE_INVOICE_FAILURE:
      case DELETE_INVOICE_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case ADD_INVOICE_SUCCESS:
        return {
          ...state,
          invoices: [...state.invoices, action.payload],
          error: null,
        };
      case UPDATE_INVOICE_SUCCESS:
        return {
          ...state,
          invoices: state.invoices.map((invoice) =>
            invoice._id === action.payload._id ? action.payload : invoice
          ),
          error: null,
        };
      case DELETE_INVOICE_SUCCESS:
        return {
          ...state,
          invoices: state.invoices.filter(
            (invoice) => invoice._id !== action.payload
          ),
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default invoiceReducer;
  