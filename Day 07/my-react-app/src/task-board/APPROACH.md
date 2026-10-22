# Task Board – Implementation Requirements

### 1. Pure Sorting Function (`sortTasks`)
- Implement sorting using a pure function called `sortTasks`.
- Always create a shallow copy using `[...tasks].sort()` to avoid modifying the original array.
- Support three sorting options:
  - `Added`: Keep the original order.
  - `Priority`: Sort by High, Medium, then Low.
  - `A → Z`: Sort alphabetically by task title using `localeCompare`, handling lowercase titles correctly.

### 2. In-Place Title Editing
- Track the currently edited task using `editingTaskId` state.
- Allow editing a specific task title.
- Save changes when the user submits the edit or leaves the input, without resetting unrelated state.

### 3. State Ownership & Architecture
- Use local state for temporary inputs, such as the title being edited.
- Keep the main tasks array and selected sorting option in the parent component.
- Pass data and callback functions to child components when needed.