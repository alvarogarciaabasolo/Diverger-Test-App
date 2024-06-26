import { useState, useEffect } from 'react';

export const useFetchNames = (urls) => {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNames = async () => {
      if (urls && urls.length > 0) {
        setIsLoading(true);
        try {
          const requests = urls.map((url) =>
            fetch(url).then((res) => res.json())
          );
          const results = await Promise.all(requests);
          setNames(results.map((result) => result.title || result.name));
        } catch (err) {
          console.error('Error fetching names:', err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchNames();
  }, [urls]);

  return { names, isLoading };
};
