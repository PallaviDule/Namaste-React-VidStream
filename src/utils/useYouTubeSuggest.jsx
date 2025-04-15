import { useState, useEffect } from 'react';
import { SEARCH_SUGGESTION_URL } from './constants';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchCacheResult } from './searchSlice';
import {createLRUCache} from './createlruCache'; 

const suggestionCache = createLRUCache(5);

const useYouTubeSuggest = (query) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //  const {searchCache} = useSelector((store) => store.search); // before we cached search in store
  // const dispatch = useDispatch();   
  // if(searchCache[query]) {
  //   setSuggestions(searchCache[query]);
  //   setLoading(false);
  //   return;
  // }

  useEffect(() => {
    if (!query) return;

    if(suggestionCache.has(query)) {
      const searchCache = suggestionCache.get(query);
      setSuggestions(searchCache[query]);
      setLoading(false);
      return;
    }
  
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
       // dispatch(searchCacheResult({[query]: formattedSuggestions}));
        suggestionCache.set(query, formattedSuggestions)
      } catch (err) {
        setError('Error fetching suggestions');
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
        getYouTubeSuggestions()
    }, 500);

    return () => {
        clearTimeout(timer);
    }
  }, [query]);

  return { suggestions, loading, error };
};

export default useYouTubeSuggest;
