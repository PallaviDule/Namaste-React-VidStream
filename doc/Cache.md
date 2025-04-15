### Cache
1. We are caching suggestions in [store](../src/utils/searchSlice.jsx)

### Least Recently Used (LRU) cache
1. An LRU cache is a memory management algorithm used to store a limited number of items while discarding the least recently accessed item when space is full.
2. Key Concepts:
- "Least Recently Used": If the cache is full, it removes the data that hasn’t been used for the longest time.
- Often implemented using a combination of a HashMap + Doubly Linked List to achieve `O(1)` time for both get and put operations.
- Common in browsers, databases, and memory systems.
3. How we can implement LRU in project to store suggestions:
    - You need Max size of cache
    - When adding a new item:
        - If it’s already there, move it to the "most recently used" position.
        - If not and the cache is full, evict the least recently used item (the one you accessed least recently - oldest item viewed)
4. Here we have implemented it: [LruCache](../src//utils/lruCache.js).
