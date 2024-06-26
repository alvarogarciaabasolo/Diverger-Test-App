import { useState, useEffect } from 'react';

export const useFetchCharacters = (searchQuery, pageNumber) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);

      const cacheKey = searchQuery || `All list page ${pageNumber}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setCharacters(parsedData.results);
        setTotalPages(parsedData.totalPages);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?search=${searchQuery}&page=${pageNumber}`
        );
        const data = await response.json();
        const cacheValue = {
          results: data.results,
          totalPages: Math.ceil(data.count / 10),
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
        setCharacters(data.results);
        setTotalPages(cacheValue.totalPages);
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
