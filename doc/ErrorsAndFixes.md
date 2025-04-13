### 1. When I created my first JS file.
- **ERROR**: [plugin:vite:import-analysis] Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension. 
- Parcel is more forgiving - it uses Babel to auto-parse JSX in .js files by default.
Vite doesn’t, because it relies on ESBuild, which is strict about file extensions for performance reasons.