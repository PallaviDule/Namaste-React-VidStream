export const createLRUCache = (limit = 20) => {
    const cache = new Map(); // Map: preserves insertion order. first key is the oldest one = least recently used.
  
    const get = (key) => {
      console.log('Hello Pallavi in get');
      if (!cache.has(key)) return null; // if suggestion key is not in cache, better call api
      
      const value = cache.get(key); // get value for that key
      cache.delete(key);  // delete the key
      cache.set(key, value); // re-insert to update order so that it would make that key as recently viewed item
      console.log('cache entry in get:', cache)
      return value;
    };
  
    const set = (key, value) => {
      if (cache.has(key)) { // if key is in cache,
        cache.delete(key);  // always re-insert the search key as recent, so delete older insertion
        console.log('cache has key:', cache.get(key));
      } else if (cache.size >= limit) { 
        // cache= {a:1, b:2, c:3}
        // .keys() gives keys in order -> Map iterator{'a', 'b', 'c'}, 
        // next() gives you very first key -> {value: 'a', done: false}
        // .value will give you this value -> a 
        const lruKey = cache.keys().next().value; 
        cache.delete(lruKey); // deleting very first key i.e. oldest key, least recently used key
        console.log('cache limit reached:', cache.get(key));
      }
      cache.set(key, value);
      console.log('cache entry:', cache)
    };
  
    const has = (key) => {
      console.log('Hello Pallavi in has');
      return cache.has(key);
    }
    const clear = () => cache.clear();
  
    const keys = () => Array.from(cache.keys());
  
    return { get, set, has, clear, keys };
  };
  