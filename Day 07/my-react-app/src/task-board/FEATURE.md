# Feature Architecture Notes

### 1. Sorting State
- Store the selected sort option in the parent `TaskBoard` component.
- Apply the sorting preference consistently to all task rows.
- Keep sorting logic separate in a pure function to avoid modifying the original tasks array.

### 2. Editing State
- Store the editing state locally inside each task row, or track the active task using `editingTaskId` in `TaskBoard`.
- Keep temporary title input changes separate from the main tasks state until saved.
- Update only the selected task when the title is submitted.

### 3. State Management
- The parent `TaskBoard` manages the main tasks array and sorting preference.
- Individual task rows manage their temporary editing input.
- Use callback functions to communicate saved changes to the parent.