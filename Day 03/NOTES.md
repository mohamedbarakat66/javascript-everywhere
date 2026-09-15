# Day 03 - Grade Library Refactor Notes

Line Count Comparison
Day 02: About 60 lines in a single, mixed file.
Day 03: About 95 lines split across clean, separate modules.
The One-Place Change Example

Change: Moving the pass mark from 60 to 65.

Why it's better: Instead of updating multiple places in a single file, I can now change it once in grade-lib.js, and the new value is used everywhere automatically.

Day 03 Notes

The difference between a parameter and an argument:
A parameter is the placeholder variable defined in a function, while an argument is the actual value passed to the function when it is called.

Declaration vs expression vs arrow:
Function declarations are hoisted, function expressions are assigned to variables, and arrow functions provide a shorter syntax and do not have their own this.

Why return and console.log are not interchangeable:
return sends a value back to the program so it can be used later, while console.log only displays a value in the console.

What a guard clause is and why it beats nested if / else:
Guard clauses handle invalid or special cases early and return immediately, making the code simpler and avoiding deeply nested if / else blocks.

Global vs function vs block scope, one sentence each:
Global scope is accessible throughout the program, function scope is limited to a specific function, and block scope is limited to the nearest {} block.

What the scope chain is, and which direction it searches:
The scope chain searches for a variable from the current local scope outward toward the global scope.

What hoisting actually does:
JavaScript processes declarations before executing the code, allowing function declarations and some variables to be accessed according to their hoisting rules.

What the TDZ is, and why an error there beats undefined:
The Temporal Dead Zone is the period before a let or const variable is initialized, where accessing it causes a ReferenceError instead of returning undefined.

What a closure is, in one sentence, without using the C-word:
A function that keeps access to variables from its outer scope even after the outer function has finished executing.

The difference between passing fn and passing fn():
Passing fn sends the function itself as a callback, while fn() executes the function immediately and passes its returned value.

My Task 5.3 answer — the line counts and the one-place change:
Day 02 had about 60 lines in a single mixed file, while Day 03 has about 95 lines split into clean modules, making changes like updating the pass mark possible in one place.

One bug I hit today, the exact error message, and how I fixed it:
I got Cannot read properties of null (reading 'addEventListener') because of a typo in an element ID. I fixed it by making sure the HTML ID matched the JavaScript selector.