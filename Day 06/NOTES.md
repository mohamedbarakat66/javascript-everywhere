### 1. TypeScript Fundamentals
- Types are erased during compilation.
- Running `.ts` directly doesn't guarantee type safety.
- Learned to read TypeScript errors and identify type mismatches and undefined values.

### 2. Types & Variables
- `const`  often infers literal types, while `let` infers broader types.
- Explored primitives, strict mode, arrays, tuples, and objects.
- `any` bypasses checks, `unknown` requires validation, and `as` asserts a type.

### 3. Functions & Control Flow
- Used optional, default, and rest parameters.
- Applied type narrowing, guards, and discriminated unions.

### 4. Interfaces & Classes
- `interface` defines object shapes; `type` supports unions and other flexible types.
- Structural typing checks object shapes.
- Explored `#private`, access modifiers, and `readonly`.

### 5. Generics & Utility Types
- Generics (`<T>`) enable reusable, type-safe code.
- Constraints like `T extends { length: number }` restrict accepted inputs.
- Practiced `Partial<T>`, `Required<T>`, and `keyof typeof`.