# Bug Hunt Report

## Summary
- TypeScript Errors: 14
- Runtime Bugs Fixed: 3

## Error Analysis

| Code | Bug | Fix |
|---|---|---|
| `function getGrade(score)` | Missing parameter type | Add `score: number` |
| `let result = []` | Missing array type | Define the array type |
| `runTwice(sayHi())` | Function called instead of passed | Use `runTwice(sayHi)` |

## Reflection

TypeScript helps detect missing types and coding mistakes. It makes code safer and easier to maintain.
