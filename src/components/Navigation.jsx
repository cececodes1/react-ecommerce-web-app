import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create-user">Create User</Link>
      <Link to="/login">Login</Link>
      <Link to="/cart">Shopping Cart</Link>
    </nav>
  );
};

export default Navigation;