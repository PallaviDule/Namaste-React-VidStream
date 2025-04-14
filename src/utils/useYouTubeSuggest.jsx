import { useState, useEffect } from 'react';
import { SEARCH_SUGGESTION_URL } from './constants';

const useYouTubeSuggest = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getYouTubeSuggestions = async () => {
      setLoading(true);
      try {
        const res =  await fetch(SEARCH_SUGGESTION_URL + query);
        const text = await res.text();

        let result;
        const fakeWindow = {
          google: {
            ac: {
              h: (parsed) => {
                result = parsed;
              }
            }
          }
        };

        const func = new Function('window', text);
        func(fakeWindow);

        const formattedSuggestions = result[1].map(item => item[0]);
        setSuggestions(formattedSuggestions);
      } catch (err) {
        setError('Error fetching suggestions');
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => getYouTubeSuggestions(), 500);

    return () => {
        clearTimeout(timer);
    }
  }, [query]);

  return { suggestions, loading, error };
};

export default useYouTubeSuggest;
