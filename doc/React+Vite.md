### React+Vite
This project is created using [vite](https://react.dev/learn/build-a-react-app-from-scratch). This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- [tailwindcss](https://tailwindcss.com/docs/installation/using-vite) - we are using tailwindcss in this project. Here, you can check how you can configure tailwind with vite.
    - it does not config file explicitly. installed [@tailwindcss/vite] and configured tailwindcss in `vite.config.cs`.



### React-Router-Dom
- In this project, we are using react-router-dom for routing with [createBrowserRouter](../src/App.jsx).
- If you see the url for the path `/watch?v={xyz}`, we also get id of the video in the url. How would you read it?
    - We read pathParam using useParams();
    - We read searchParam using [useSearchParams](https://reactrouter.com/6.30.0/hooks/use-search-params).
        - In this project, in [watchPage](../src/component/WatchPage.jsx)

### Custom Hooks
- [useYouTubeSuggest](../src/utils/useYouTubeSuggest.jsx) : We created this custom hook, as we have to make a api call as well as some logic. So, it was better to move it altogether as a new hook rather than using useEffect in the same file. It might make project complicted, un-readable.