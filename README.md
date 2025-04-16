# 📺 Namaste-React-VidStream

This repository documents my learning journey through the **Namaste React** course by Akshay Saini. I’ve built a mini video streaming app using modern tools like **Vite**, **React Router**, **Redux Toolkit**, and **Tailwind CSS**.

### 🔧 Installation & Setup

1. **Clone this repository**:
   ```bash
   git clone https://github.com/PallaviDule/Namaste-React-VidStream.git
   cd Namaste-React-VidStream
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open in browser:  
   [http://localhost:5173](http://localhost:5173)


### 📚 What You'll Learn from This Project

✅ Vite + React setup  
✅ Tailwind CSS styling  
✅ Debounced YouTube search suggestions  
✅ Custom LRU Caching logic (functional!)  
✅ Live chat with Redux state  
✅ Component communication via props/hooks  
✅ Real-world React architecture + patterns  

### 🗂️ Learning Docs

All of my personal notes and deep dives are in the `doc/` folder:

1. 📦 [React + Vite Setup](doc/React+Vite.md)  
2. 📡 [YouTube API Integration](doc/Youtube.md)  
3. 🎨 [CSS & Tailwind Styling](doc/Styling.md)  
4. 🧠 [LRU Caching Strategy](doc/Cache.md)  
5. 💬 [Live Chat using Redux](doc/LiveChat.md)  
6. 🛠️ [Errors & Fixes](doc/ErrorsAndFixes.md)


### 🔗 API References

- [Google Workspace API](https://developers.google.com/workspace/cloud-search/docs/reference/rest)
- [YouTube Data API v3](https://developers.google.com/youtube/v3/docs)

These APIs were used for fetching search suggestions and video metadata.


### 💡 Pro Tips

- Use `onMouseDown` instead of `onClick` for chat send buttons to avoid losing focus before clicks register.
- LRU cache implementation uses a functional closure-based approach — it's light, fast, and React-friendly.
- Debounced search prevents flooding the API and makes for smoother UX.

### 🌟 Connect

If you’re also taking the course or found this repo helpful, feel free to **⭐️ star** it and connect on GitHub!


