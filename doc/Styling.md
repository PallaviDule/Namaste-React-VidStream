# Styling: Tailwind CSS and Traditional CSS

This project uses **Tailwind CSS** for most styling, but also includes a small amount of regular CSS to keep the fundamentals sharp.

### Why Tailwind?

- Faster to prototype and style directly in JSX.
- Class-based approach keeps styles localized and easy to maintain.
- Encourages consistent spacing, typography, and layout using utility classes.

### Why Use Some CSS?

While Tailwind is powerful, writing a few lines of custom CSS helps reinforce core styling skills and gives flexibility when needed (e.g., custom animations, rare layout quirks). But in this project, we have used it to keep fundmentals sharp.


## Tailwind Setup

Tailwind is configured with Vite. Setup Steps:
1. Installed `tailwindcss`, `@tailwindcss/vite`, and `autoprefixer`.
2. Imported Tailwind’s base styles in `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
    but with latest version of tailwindcss, you only need to `@import "tailwindcss";`  
3. If you're using a plugin like `@tailwindcss/vite`, note that configuration happens in [vite.config.js](../vite.config.js)  


## What We Used in This Project

### Traditional CSS (Vanilla)

1. [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)  
   Used for layout in the header (e.g., dividing left, center, right sections).

### Tailwind Classes (Highlights)

#### 1. Live Chat Styling
- **`overflow-y-scroll`**  
  Enables vertical scrolling when chat messages exceed the container height.  
  Useful for long chat message feeds.

- **`flex`**  
  Converts the container into a flex layout.  
  By default, this lays out children horizontally.

- **`flex-col`**  
  Stacks child elements vertically instead of the default row layout.  
  Common in forms, chat layouts, or vertical lists.

- **`flex-col-reverse`**  
  Vertically stacks elements in reverse order.  
  In our chat box, this ensures:
  - Newest messages appear at the bottom
  - Older messages scroll upward
  - Super handy for for our chat box, where we want new messages at the bottom, but still scroll to view older ones above.

  This mimics natural chat behavior.

