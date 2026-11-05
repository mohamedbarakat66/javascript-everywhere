# Day 07 Notes – Reflections & Bug Report

### 1. Props vs State
Props are read-only values passed from parent components to children, while state stores data managed by a component. Updating state triggers a re-render when needed.

### 2. Why Never Mutate
Mutating state directly can prevent React from detecting changes correctly and lead to unexpected UI behavior. Instead, create new arrays or objects when updating state.

### 3. Derived vs Stored State
Derived state is calculated from existing props or state, while stored state keeps data separately. Using derived values avoids unnecessary duplication and synchronization.

### 4. One Real Bug and How I Fixed It
- **The Bug:** During Task 5, I encountered an issue with task sorting and inline editing because directly modifying the original array could lead to unexpected behavior.
- **The Fix:** I used spread syntax (`[...tasks]`) to create a shallow copy before sorting and used immutable state updates with methods like `map` and `filter`.