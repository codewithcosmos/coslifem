import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Quote from './components/Quote';
import Invoice from './components/Invoice';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/products" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/quote" component={Quote} />
          <Route path="/invoice" component={Invoice} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
