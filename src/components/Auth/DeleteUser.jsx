import React from 'react';
import axios from 'axios';

const DeleteUser  = () => {
  const handleDelete = async () => {
    const token = sessionStorage.getItem('token');
    if (window.confirm('Are you sure you want to delete your account?')) {
      try {
        await axios.delete('https://fakestoreapi.com/users/1', {
          headers: { Authorization: `Bearer ${token}` },
        });
        sessionStorage.removeItem('token');
        alert('User  deleted successfully!');
      } catch (error) {
        console.error(error);
        alert('Error deleting user');
      }
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteUser ;