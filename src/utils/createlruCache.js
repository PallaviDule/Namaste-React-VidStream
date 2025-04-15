export const createLRUCache = (limit = 20) => {
    const cache = new Map(); // Map: preserves insertion order. first key is the oldest one = least recently used.
  
    const get = (key) => {
      if (!cache.has(key)) return null; // if suggestion key is not in cache, better call api
      
      const value = cache.get(key); // get value for that key
      cache.delete(key);  // delete the key
      cache.set(key, value); // re-insert to update order so that it would make that key as recently viewed item
      return value;
    };
  
    const set = (key, value) => {
      if (cache.has(key)) { // if key is in cache,
        cache.delete(key);  // always re-insert the search key as recent, so delete older insertion
      } else if (cache.size >= limit) { 
        // cache= {a:1, b:2, c:3}
        // .keys() gives keys in order -> Map iterator{'a', 'b', 'c'}, 
        // next() gives you very first key -> {value: 'a', done: false}
        // .value will give you this value -> a 
        const lruKey = cache.keys().next().value; 
        cache.delete(lruKey); // deleting very first key i.e. oldest key, least recently used key
      }
      cache.set(key, value);
    };
  
    const has = (key) => {
      return cache.has(key);
    }
    const clear = () => cache.clear();
  
    const keys = () => Array.from(cache.keys());
  
    return { get, set, has, clear, keys };
  };
  