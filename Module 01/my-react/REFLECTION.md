# Reflection

### 1. Why is the task card a good candidate for a component?
A task card is reusable and keeps the code clean and organized. It makes the application easier to maintain.

### 2. What happens if a component name starts with a lowercase letter?
React treats it as a normal HTML element instead of a custom component. Component names should start with a capital letter.

### 3. Why do we wrap two sibling elements in `<>...</>`?
A component must return one parent element. A Fragment lets us group elements without adding an extra HTML element.