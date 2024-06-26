import React, { useState } from 'react';
import { SearchInput, SearchButton } from './style/SearchBar.styled.js';

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <SearchInput
        type="text"
               placeholder="Search in the Star Wars library.."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}  
      />
      <SearchButton onClick={handleSearch}>SEARCH</SearchButton>
    </>
  );
};
