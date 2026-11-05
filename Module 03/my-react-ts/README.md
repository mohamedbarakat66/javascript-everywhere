### Assignment 1.1 – Task Status

I will create a typed function to move tasks between statuses.
It will return the next status in the cycle.
I will use `map` and object spread to update tasks without mutation.

### Assignment 2.1 – Task Progress

I will use `filter` to count completed tasks.
I will calculate the completion percentage based on the total tasks.
The values will be calculated from the tasks array, not stored in state.

### Assignment 3.1 – Undo Delete

I will add a state to store the last deleted task.
When a task is deleted, I will save it before removing it.
The Undo button will restore the deleted task with the same ID.


### Assignment 4.1 – Task Sorting

I will add a state to track the current sort mode.
I will sort a copy of the tasks array by title when needed.
The original tasks array will remain unchanged.


# Assignment 5.1 – Reflection

### 1. Why does `tasks.push(task)` followed by `setTasks(tasks)` not update the screen?

`push()` changes the original array instead of creating a new one. React may not detect the change because the array reference is still the same. I should use `setTasks([...tasks, task])` to create a new array.

### 2. Why is the index a bad key for this list?

The index can change when tasks are added, deleted, or reordered. This can confuse React when updating the list. Using a unique task ID is a better choice.

### 3. Which values in your TaskList are state, and which are derived?

The tasks array and the selected task are state because they can change over time. Values like the number of tasks or completed tasks are derived because they can be calculated from the tasks array.