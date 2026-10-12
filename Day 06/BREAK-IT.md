# Break It — and Prove It Survives

### 1. High Failure Rate (`FAIL_RATE=0.5`)
- **Test:** Simulated 50% request failure.
- **Result:** Error toast with retry, rollback on failure, and partial clear support.
- **Handling:** `catch` blocks and state rollback.

### 2. Slow Network (`SLOW=3000`)
- **Test:** Added a 3-second delay.
- **Result:** Loading spinner and disabled submit button to prevent duplicates.
- **Handling:** `loadingState` and `button.disabled`.

### 3. Request Timeout (`SLOW=6000`)
- **Test:** Added a 6-second delay.
- **Result:** Timeout warning displayed.
- **Handling:** `AbortController` with a 5-second timeout.

### 4. Server Down
- **Test:** Stopped the backend server.
- **Result:** Offline banner with a retry option.
- **Handling:** Catching `fetch` errors and showing fallback UI.

### 5. XSS Injection
- **Test:** Entered `<script>alert('xss')</script>` as a task title.
- **Result:** Displayed as plain text without executing JavaScript.
- **Handling:** Used `textContent` and `createElement` instead of unsafe `innerHTML`.

### 6. Cancelled Requests
- **Test:** Triggered reload twice during a slow request.
- **Result:** Previous request was cancelled; the latest request completed.
- **Handling:** `AbortController.abort()`.

### 7. Invalid Data Shape
- **Test:** API returned `"done": "yes"` instead of a boolean.
- **Result:** Friendly validation error instead of an application crash.
- **Handling:** Runtime type validation or Zod schema parsing before updating state.