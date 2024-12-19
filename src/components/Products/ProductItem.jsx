import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id: product.id, title: product.title, price: product.price, quantity: 1 }));
    alert('Product added to cart!');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto' }} />
      <button onClick={handleAddToCart} style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;