import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import QuoteForm from './components/QuoteForm';
import InvoiceForm from './components/InvoiceForm';
import './App.css';

const App = () => {
  const handleInvoiceSubmit = (formData) => {
    // Logic to handle invoice form submission
    console.log('Submitted Invoice:', formData);
  };

  const handleQuoteSubmit = (formData) => {
    // Logic to handle quote form submission
    console.log('Submitted Quote:', formData);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/products" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/quote" render={() => <QuoteForm onSubmit={handleQuoteSubmit} />} />
          <Route path="/invoice" render={() => <InvoiceForm onSubmit={handleInvoiceSubmit} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
