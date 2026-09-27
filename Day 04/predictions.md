# Day 04 Notes
	
1. `1 undefined` — `a` exists, while `typeof b` safely returns `"undefined"`.

2. `ReferenceError` — `{ x: y }` creates `y`, not `x`.

3. `5` — Default values work when the value is `undefined`.

4. `null` — Default values do not work with `null`.

5. `c` — Array destructuring can skip elements using commas.

6. `3` — An alias points to the same array, so changes affect the original.

7. `99` — Spread creates a shallow copy; nested objects are still shared.

8. `{ b: 2, a: 1 }` — Later spread properties override earlier properties.

9. `undefined 7` — `= {}` prevents an error when no argument is passed.

10. `TypeError` — Destructuring `undefined` without a default causes an error.

11. `TypeError` — A property cannot be accessed from `undefined`.

12. `fallback 0` — `||` treats `0` as falsy, while `??` keeps `0`.


13. `a → c → b` — Synchronous code runs before timers.

14. `sync → micro → timeout` — Microtasks run before macrotasks.

15. `3 → 3 → 3` — `var` uses one shared variable in the loop.

16. `undefined` — An asynchronous return does not return from the outer function.

17. `loop finished → timer` — Synchronous code blocks the timer.

18. `outer → first → second → nested` — The nested timer is scheduled later.

19. `timer → micro → timer 2` — Microtasks run before the next timer.

20. `after try → Error` — `try...catch` cannot catch a later asynchronous error.

21. `sync call → after load → async call` — A synchronous callback runs immediately.

22. `D → C → B → A` — Synchronous code runs first, then microtasks, then timers.

