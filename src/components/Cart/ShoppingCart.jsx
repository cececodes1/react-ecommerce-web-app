import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../redux/cartSlice';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    alert('Cart cleared!');
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
          <button onClick={handleClearCart} style={{ padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;