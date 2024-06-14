import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // If using asynchronous actions
import { composeWithDevTools } from 'redux-devtools-extension'; // For development environment

// Import reducers
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import quoteReducer from './reducers/quoteReducer';
import invoiceReducer from './reducers/invoiceReducer';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  quotes: quoteReducer,
  invoices: invoiceReducer,
});

// Middleware setup (you can add more middleware as needed)
const middleware = [thunk];

// Create Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
