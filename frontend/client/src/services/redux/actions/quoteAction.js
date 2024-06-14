// Import action types
import { GET_QUOTES, ADD_QUOTE, DELETE_QUOTE } from './types';

// Example action creators
export const getQuotes = () => {
  // Dispatch an action to get quotes from API or other source
  return {
    type: GET_QUOTES,
  };
};

export const addQuote = (quoteData) => {
  // Dispatch an action to add a quote
  return {
    type: ADD_QUOTE,
    payload: quoteData,
  };
};

export const deleteQuote = (quoteId) => {
  // Dispatch an action to delete a quote
  return {
    type: DELETE_QUOTE,
    payload: quoteId,
  };
};
