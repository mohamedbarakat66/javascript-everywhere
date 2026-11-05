# Day 07 – Predictions & Results

### 1. Snippet 1 – Component A
- **Prediction:** Runtime Error
- **Actual Result:** Runtime Error: Objects are not valid as a React child.
- **Explanation:** React cannot render JavaScript objects directly inside JSX. We must render a specific property or convert the object into a renderable value.

### 2. Snippet 2 – Component B
- **Prediction:** Renders `0`
- **Actual Result:** Displays `<div>0</div>`.
- **Explanation:** In JavaScript, `0 && <UI />` evaluates to `0` because `0` is falsy. React renders the result, so `0` appears on the screen.

### 3. Snippet 3 – Component C
- **Prediction:** The console shows `1, 2, 3`, but the button remains at `0`.
- **Actual Result:** The console logs `1, 2, 3`, while the button still displays `0`.
- **Explanation:** Updating a local variable does not trigger a re-render in React. State should be used when a value needs to update the UI.

### 4. Snippet 4 – Component D
- **Prediction:** Displays `3`.
- **Actual Result:** Displays `1`.
- **Explanation:** React batches state updates, and each `setN(n + 1)` call uses the same initial value of `n` from the current render. Therefore, all three updates set the state to `1`.

### 5. Snippet 5 – Component E
- **Prediction:** Displays `3`.
- **Actual Result:** Displays `3`.
- **Explanation:** Using the functional updater `setN((c) => c + 1)` allows each update to use the latest queued state value. As a result, all three increments are applied correctly.

### 6. Snippet 6 – Component F
- **Prediction:** The screen updates to show `1, 2, 3`.
- **Actual Result:** Nothing changes on the screen.
- **Explanation:** The `.push()` method mutates the existing array instead of creating a new one. Because the array reference stays the same, React may skip the re-render. Use a new array, such as `[...items, newItem]`, to update the state correctly.

---

**Key Takeaway:** Understanding React rendering, state updates, batching, and immutability helps prevent common bugs and makes components behave as expected.