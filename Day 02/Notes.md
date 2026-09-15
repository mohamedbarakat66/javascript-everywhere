const vs let: let allows variable reassignment, while const locks the variable reference. const still allows push into arrays because the memory reference to the array object remains unchanged.

7 Primitive Types: string, number, bigint, boolean, undefined, symbol, and null.

Why typeof null returns "object": Due to a historical bug in early JavaScript implementations. Use value === null for correct checking.

8 Falsy Values: false, 0, -0, 0n, "", null, undefined, and NaN.

=== vs ==: === checks both value and type strictly, whereas == performs type coercion, which can lead to bugs (e.g., 0 == false).

?? vs ||: Use ?? (nullish coalescing) for fallbacks strictly on null or undefined, while || triggers on any falsy value (like 0 or empty strings).

Loops Overview:

for: For iterating a specific number of times.

while: For repeating while a condition remains true.

do...while: Executes at least once before checking the condition.

for...of: Iterates over iterable values (arrays, strings).

for...in: Loops through object property keys.

break vs continue: break stops and exits the loop entirely, while continue skips the current iteration and moves to the next.