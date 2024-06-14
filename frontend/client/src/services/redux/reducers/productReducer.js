import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    products: [],
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          error: null,
        };
      case FETCH_PRODUCTS_FAILURE:
      case ADD_PRODUCT_FAILURE:
      case UPDATE_PRODUCT_FAILURE:
      case DELETE_PRODUCT_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          products: [...state.products, action.payload],
          error: null,
        };
      case UPDATE_PRODUCT_SUCCESS:
        return {
          ...state,
          products: state.products.map((product) =>
            product._id === action.payload._id ? action.payload : product
          ),
          error: null,
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          products: state.products.filter(
            (product) => product._id !== action.payload
          ),
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  