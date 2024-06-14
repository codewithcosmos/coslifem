import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  } from '../actions/authActions';
  
  const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          isAuthenticated: true,
          error: null,
        };
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          error: action.payload.message || 'Authentication failed.',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  