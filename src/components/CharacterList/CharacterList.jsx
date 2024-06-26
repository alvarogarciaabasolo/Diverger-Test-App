import { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { useFetchCharacters } from '../../services/useFetchCharacters';
import { Pagination } from '../Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  CharacterItem,
  Loading,
} from './style/CharacterList.styled';

export const CharacterList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();
  const { characters, isLoading, totalPages } = useFetchCharacters(
    searchQuery,
    pageNumber
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPageNumber(1);
  };

  const handleRouter = (character) => {
    navigate('/CharacterCard', { state: { character } });
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />

      {isLoading && <Loading>Loading...</Loading>}

      {!isLoading && characters.length === 0 && (
        <Loading>Character not found</Loading>
      )}

      {!isLoading && characters.length > 0 && (
        <ul>
          {characters.map((character) => (
            <CharacterItem
              key={character.url}
              onClick={() => handleRouter(character)}
            >
              {character.name}
            </CharacterItem>
          ))}
        </ul>
      )}

      <Pagination
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        totalPages={totalPages}
      />
    </Container>
  );
};
