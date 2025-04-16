# React + Vite

This project is built using [Vite](https://react.dev/learn/build-a-react-app-from-scratch), a modern build tool known for fast performance, instant HMR (Hot Module Replacement), and minimal config.

Vite supports React via two official plugins:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)  
  Uses **Babel** under the hood for Fast Refresh support.
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react-swc)  
  Uses **[SWC](https://swc.rs/)** for much faster builds and refreshes (good for large projects).

We are also using **Tailwind CSS** with Vite:  
Documentation: [Tailwind with Vite](https://tailwindcss.com/docs/installation/using-vite)
- Installed `@tailwindcss/vite` and configured Tailwind inside [vite.config.js](../vite.config.js).

## React Router DOM

We use `react-router-dom` for client-side routing. The routing setup is defined in:  
→ [`App.jsx`](../src/App.jsx)

### Key Routing Concepts in This Project:

- For navigation, we use `createBrowserRouter` from React Router v6.
- When the URL path looks like `/watch?v=xyz`, we deal with:
  
  - **Path params** → Accessed using `useParams()`  
  - **Query/search params** → Accessed using [`useSearchParams`](https://reactrouter.com/6.30.0/hooks/use-search-params)

-  In this project, you can see query param usage in:  
→ [`WatchPage.jsx`](../src/component/WatchPage.jsx)

    ```
    const [searchParams] = useSearchParams(); 
    const videoId = searchParams.get('v');
    ```

## Custom Hooks
### Why a custom hook?

Instead of writing all logic inside a component using `useEffect`, it’s cleaner and more reusable to move it into its own hook. This:

- Keeps components less cluttered
- Improves readability
- Makes logic reusable across other components (if needed)

We created the following custom hook to manage suggestions logic separately:

- [`useYouTubeSuggest`](../src/utils/useYouTubeSuggest.jsx) : This hook fetches YouTube-style search suggestions with debouncing, caching, and error handling.”


