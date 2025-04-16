# 🧠 Cache

### 🧊 Least Recently Used (LRU) Cache

An **LRU cache** is a memory optimization strategy that automatically removes the *least recently accessed* items when space runs out.

### 📌 Why LRU?

Imagine a user searches:
```
"c", "cat", "cat video", "dog", "dogs funny", "c"
```

**Without LRU:**
- We might store every search, even if some are never reused.
- Memory grows without limit.

**With LRU:**
- We only keep the most recent N searches.
- If the user searches `"c"` again, we return cached suggestions in `O(1)` time.

### 🧰 Key Concepts

- **"Least Recently Used"**: Discards the item that hasn’t been used for the longest time.
- Common use cases: **browsers**, **databases**, **operating systems**.
- Often implemented with:
  - 🔁 Doubly Linked List (to maintain order)
  - ⚡ HashMap (for fast access)
- But in this project, we use a simple, lightweight **Map-based functional LRU** using closures.

### 🛠 How We Implement LRU in This Project

- 🔎 Where are suggestions cached?
    - We cache the YouTube search suggestions in the Redux store:  👉 [searchSlice.js](../src/utils/searchSlice.js)
- This prevents redundant API calls when the user types the same query again.
- We set a **max size** of the cache (e.g. 20 entries).
- When a suggestion query is fetched:
  - ✅ If it's already in the cache → we move it to the "most recently used" position.
  - ➕ If it's new:
    - If the cache is full → we evict the oldest (least recently used) key.
    - Then we add the new key to the cache.

- Check out the implementation:  👉 [lruCache.js](../src/utils/lruCache.js)

It uses:
```js
const cache = new Map();
```

Map preserves **insertion order**, so the first key is always the **LRU**.  
We remove it with:
```js
cache.delete(cache.keys().next().value); // deleting very first key i.e. oldest key, least recently used key
```

### 💬 Real-world Analogy

Think of it like a small desk:
- You only have space for 5 books (search queries).
- You keep putting books you’re using on top.
- If a 6th book comes in, you toss the one you haven’t touched in hours.

That’s LRU!

---

### ✅ Summary

- LRU helps us cache smarter — keeping things fast, but memory-efficient.
- We avoid unnecessary API calls.
- Performance and user experience both benefit.
