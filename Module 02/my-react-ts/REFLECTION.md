# Reflection

### 1. When would you choose type over interface?

I use `type` when I need union types or combine different types. I use `interface` mainly to describe the structure of an object and its properties.

### 2. Why do we pass the whole task as one prop?

We pass the whole task because all its information belongs together. This makes the component easier to use and avoids passing many separate props.

### 3. What does ?? do differently from ||?

The `??` operator uses the default value only when the original value is `null` or `undefined`. The `||` operator also uses the default when the value is `0`, `false`, or an empty string.