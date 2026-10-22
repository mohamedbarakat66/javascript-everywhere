# Day 07 – Approach: Product Catalog

### 1. Data Grouping & Derivation
- Group products dynamically by `category` using native JavaScript array methods such as `reduce()`.
- Keep all operations pure to ensure the original `products` prop remains unchanged and the original ID order (`1–6`) is preserved.

### 2. Sorting & Filtering
- Sort products within each category according to the requirements, including consistent price tie-breaking rules.
- Filter out sold-out products when the "hide sold-out" option is enabled, without modifying the original data.

### 3. Rendering & Keys
- Use stable, unique keys derived from the data for both category sections and individual products.
- Do not use `useState`; derive the displayed categories and products directly from props.

### 4. Empty States & Edge Cases
- Handle an empty catalog by displaying an appropriate message when no products are provided.
- Handle empty categories gracefully when no products remain after filtering.

### Key Takeaway
Build a predictable Product Catalog by deriving data directly from props, preserving immutability, applying consistent sorting and filtering, and handling empty states without unnecessary state management.