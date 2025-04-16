### Here We are using tailwind along with CSS in this project.
- Tailwind is easy and quick 
- using CSS in very few places so that we won't forget basic.

### tailwind setup
- 


## What we have used in this Project
### CSS Styling
1. [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) : for Header Layout

### tailwind Styling
1. Live Chat
    - overflow-y-scroll - Adds a scrollbar vertically when the content overflows the container.
        - A chat box or message feed that needs vertical scrolling.
    - flex 
        - Makes the container a flexbox, enabling its children to align horizontally or vertically depending on direction.
        - Lay out children side-by-side by default.
        - Combine with flex-col for vertical stacking : if we needed to have newest message at the top.
    - flex-col-reverse
        - Stacks child elements vertically, but in reverse order.
        - New elements appear at the bottom instead of the top.
            - Super handy for for our chat box, where we want new messages at the bottom, but still scroll to view older ones above.