# Day 04 Notes

## Line Counts Comparison
- Day 03 library line count: ~55 lines
- Day 04 library line count: ~100 lines (with modular structured pure functions)

## Function Signature Comparison
- Old version (Day 03): `function formatRow(student) { ... }` (Requires reading inside the function body to know what properties are expected).
- New version (Day 04): `function formatRow({ name = "Unknown", score = 0, attendance = 0 } = {})` (Instantly reveals the exact shape and default values right in the signature).

## Why the new signature is better:
1. It explicitly documents the expected data properties at a glance.
2. It safely handles missing data/holes using default fallback parameters.