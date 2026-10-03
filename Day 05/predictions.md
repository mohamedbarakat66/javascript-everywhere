# Day 05 — Predictions Summary

## Part 1: Promises & Async/Await

### 1. Snippet #1
**Output:** `a, b, c`  
**Key idea:** Promise constructor runs synchronously.

### 2. Snippet #2
**Output:** `first`  
**Key idea:** A Promise can settle only once.

### 3. Snippet #3
**Output:** `undefined`  
**Key idea:** No `return` from `.then()` means the next `.then()` gets `undefined`.

### 4. Snippet #4
**Output:** `sync, then, timeout`  
**Key idea:** Execution order is **Sync → Microtask → Macrotask**.

### 5. Snippet #5
**Output:** `A, B, C, D`  
**Key idea:** `await` pauses the async function and resumes it later.

### 6. Snippet #6
**Output:** `done, 1, 2, 3`  
**Key idea:** `forEach` does not wait for async callbacks.

### 7. Snippet #7
**Output:** `["slow", "fast"]`  
**Key idea:** `Promise.all` waits for all promises and keeps the original order.

### 8. Snippet #8
**Output:** `all: b failed`  
**Key idea:** `Promise.all` rejects when any promise rejects.

### 9. Snippet #9
**Output:** `race: failed at 100`, `any: win`  
**Key idea:** `race` returns the first settled promise, while `any` returns the first successful one.

### 10. Snippet #10
**Output:** `caught outside: boom`  
**Key idea:** An error thrown in an async function becomes a rejected Promise.

---

## Part 2: CommonJS & ESM Modules

### 11. Snippet #11
**Output:** `{ x: 1 }`  
**Key idea:** Reassigning `exports` does not change `module.exports`.

### 12. Snippet #12
**Output:** `1, 2, 3`  
**Key idea:** A closure keeps access to its private counter.

### 13. Snippet #13
**Output:** `b, main`  
**Key idea:** ESM imports are evaluated before the module body runs.

### 14. Snippet #14
**Output:** `hello`  
**Key idea:** `function.name` returns the function's name.

### 15. Snippet #15
**Output:** `2`  
**Key idea:** ESM exports use live bindings.

### 16. Snippet #16
**Output:** `0`  
**Key idea:** CommonJS primitive values are exported as copied values.

### 17. Snippet #17
**Output:** `TypeError: Assignment to constant variable`  
**Key idea:** Imported ESM bindings cannot be reassigned.

### 18. Snippet #18
**Output:** `undefined` or import error  
**Key idea:** ESM imports are case-sensitive.

---

## Part 3: Git Scenarios

### 19. Snippet #19
**Output:**
- First `git status --short`: `M notes.txt`
- Second `git status --short`: `M notes.txt`
- Committed version: **v2**

**Key idea:** `git add` stages a specific version, and `git commit` commits the staged version.

### 20. Snippet #20
**Output:** `feature.txt` is not shown on `main`.

**Key idea:** Each branch has its own working tree state. A file existing only on `feature` is not available on `main`.

### 21. Snippet #21
**Output:** `Fast-forward`

**Key idea:** Git moves the branch pointer forward directly when there are no conflicting commits on the current branch.

---

# Quick Review

- Promise constructor → **Synchronous**
- `.then()` → **Microtask**
- `setTimeout()` → **Macrotask**
- `await` → **Pause and resume**
- `forEach()` → **Does not await**
- `Promise.all()` → **All must succeed + keeps order**
- `Promise.race()` → **First settled**
- `Promise.any()` → **First fulfilled**
- `async throw` → **Rejected Promise**
- `exports` ≠ `module.exports`
- Closure → **Keeps private state**
- ESM → **Live bindings**
- Imported bindings → **Cannot be reassigned**
- ESM → **Case-sensitive**
- `git add` → **Stage**
- `git commit` → **Commit staged changes**
- `Fast-forward` → **Move branch pointer directly**