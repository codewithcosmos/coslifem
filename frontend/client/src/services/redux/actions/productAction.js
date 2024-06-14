// Import action types
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from './types';

// Example action creators
export const getProducts = () => {
  // Dispatch an action to get products from API or other source
  return {
    type: GET_PRODUCTS,
  };
};

export const addProduct = (productData) => {
  // Dispatch an action to add a product
  return {
    type: ADD_PRODUCT,
    payload: productData,
  };
};

export const deleteProduct = (productId) => {
  // Dispatch an action to delete a product
  return {
    type: DELETE_PRODUCT,
    payload: productId,
  };
};
