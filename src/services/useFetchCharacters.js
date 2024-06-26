import { useState, useEffect } from 'react';

export const useFetchCharacters = (searchQuery, pageNumber) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?search=${searchQuery}&page=${pageNumber}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (err) {
        console.error('Error fetching names:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [searchQuery, pageNumber]);

  return { characters, isLoading, totalPages };
};
