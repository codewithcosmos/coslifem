import {
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE,
    ADD_QUOTE_SUCCESS,
    ADD_QUOTE_FAILURE,
    UPDATE_QUOTE_SUCCESS,
    UPDATE_QUOTE_FAILURE,
    DELETE_QUOTE_SUCCESS,
    DELETE_QUOTE_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    quotes: [],
    error: null,
  };
  
  const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUOTES_SUCCESS:
        return {
          ...state,
          quotes: action.payload,
          error: null,
        };
      case FETCH_QUOTES_FAILURE:
      case ADD_QUOTE_FAILURE:
      case UPDATE_QUOTE_FAILURE:
      case DELETE_QUOTE_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case ADD_QUOTE_SUCCESS:
        return {
          ...state,
          quotes: [...state.quotes, action.payload],
          error: null,
        };
      case UPDATE_QUOTE_SUCCESS:
        return {
          ...state,
          quotes: state.quotes.map((quote) =>
            quote._id === action.payload._id ? action.payload : quote
          ),
          error: null,
        };
      case DELETE_QUOTE_SUCCESS:
        return {
          ...state,
          quotes: state.quotes.filter((quote) => quote._id !== action.payload),
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  