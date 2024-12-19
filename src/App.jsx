import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateUser  from "./components/Auth/CreateUser";
import Login from './components/Auth/Login';
import UpdateUser  from './components/Auth/UpdateUser';
import DeleteUser  from './components/Auth/DeleteUser';
import ShoppingCart from './components/Cart/ShoppingCart';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update-user" element={<UpdateUser  />} />
        <Route path="/delete-user" element={<DeleteUser  />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
