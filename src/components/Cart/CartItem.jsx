import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
    alert('Item removed from cart!');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>{item.title}</h2>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleRemove} style={{ padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}>Remove</button>
    </div>
  );
};

export default CartItem;