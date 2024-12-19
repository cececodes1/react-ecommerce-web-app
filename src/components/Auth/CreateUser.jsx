import React, { useState } from 'react';
import axios from 'axios';

const CreateUser  = () => {
  const [userData, setUser Data] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setUser Data({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://fakestoreapi.com/users', userData);
      alert('User  created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser ;