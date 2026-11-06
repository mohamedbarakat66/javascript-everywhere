### Task 1.1 – My Plan

I will validate the due date to prevent users from selecting a past date.

I will limit the description to 200 characters and add a live character counter that turns red after 180 characters.

I will use `role="alert"` to make error messages accessible.


### Task 2.1 – My Plan

I will add a sort select component with three options: Default, Title A–Z, and Due date.

I will use a separate sorting function to sort a copy of the tasks without changing the original array.

Tasks without a due date will always appear last when sorting by due date.

### Task 3.1 – My Plan

I will calculate the number of tasks after applying the filters and display it with the total number of tasks.

I will show the Clear filters button only when a text, status, or sort filter is active.

When clicked, the button will reset all filters to their default values.


**### Task 4.1 – My Plan**

I will add a Duplicate button to each TaskCard.

I will create a copy with a new id and a title starting with "Copy of".

I will reuse the existing add logic to make sure the duplicated task starts as To Do.

**### Task 5.1 – Reflection**

**1. Why does `useState(initialValues)` not update when `initialValues` changes?**

`useState` uses the initial value only when the component renders for the first time. Changing `initialValues` later does not automatically update the state.

**2. When is `as StatusFilter` safe, and when is it risky?**

It is safe when I know the value matches one of the allowed status options. It is risky when the value comes from user input because TypeScript does not check it at runtime.

**3. Why do we turn an empty date into `undefined`?**

An empty date means the user did not select a date. We use `undefined` to represent that there is no due date instead of storing an empty string.