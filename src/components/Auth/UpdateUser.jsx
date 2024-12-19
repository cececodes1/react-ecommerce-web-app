import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser   = () => {
  const [userData, setUser Data] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setUser Data({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('token');
    try {
      await axios.put('https://fakestoreapi.com/users/1', userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('User  updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser ;