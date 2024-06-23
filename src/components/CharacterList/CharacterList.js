import React, { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { useFetchCharacters } from '../../services/useFetchCharacters';
import { Pagination } from '../Pagination/Pagination';

export const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { characters, isLoading, error, totalPages } = useFetchCharacters(
    searchQuery,
    pageNumber
  );

  console.log(characters); // <-------------

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPageNumber(1);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        {characters.map((character) => (
          <ul key={character.url}>
            <li>{character.name}</li>
          </ul>
        ))}
      </div>

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
    </div>
  );
};