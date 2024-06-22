import { useState, useEffect } from 'react';

export const useFetchCharacters = (searchQuery, pageNumber) => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?search=${searchQuery}&page=${pageNumber}`
        );
        const data = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [searchQuery, pageNumber]);

  return { characters, isLoading, error };
};
