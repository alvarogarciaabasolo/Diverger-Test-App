import React, { useState } from 'react';

export const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSearch = () => {
    onSearch(query)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a character..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
