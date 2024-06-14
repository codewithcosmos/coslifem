import apiService from '../../services/apiService';

// Auth action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// Auth actions
export const login = (credentials) => async (dispatch) => {
  try {
    const data = await apiService.login(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const data = await apiService.register(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};
