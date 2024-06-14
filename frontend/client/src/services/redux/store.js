import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';
import quoteReducer from './reducers/quoteReducer';
import invoiceReducer from './reducers/invoiceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  quotes: quoteReducer,
  invoices: invoiceReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
