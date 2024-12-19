import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Search</button>
    </form>
  );
};

export default SearchBar;