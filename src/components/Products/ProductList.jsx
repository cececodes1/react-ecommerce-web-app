import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { data, error, isLoading } = useQuery('products', () =>
    fetch('https://fakestoreapi.com/products').then(res => res.json())
  );

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = data?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  ```javascript
  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;