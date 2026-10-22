# Approach: Star Rating Component

### 1. Validation & Edge Cases
- Check whether `max` and `value` are valid finite numbers using `Number.isFinite()`.
- Ensure `max > 0`; otherwise, return `null`.
- Clamp `value` between `0` and `max` to prevent ratings from exceeding the allowed range.

### 2. Star Generation
- Use `Array.from()` or array mapping to generate `max` stars.
- Display a filled star (`★`) when the index is less than the rounded rating value.
- Display an empty star (`☆`) for the remaining stars.

### 3. Accessibility (a11y)
- Wrap the stars in a container with `role="img"`.
- Add an `aria-label` describing the rating, such as `"3 out of 5 stars"`.
- This allows screen readers to announce the rating clearly instead of reading each star separately.

### Key Takeaway
A good Star Rating component should handle invalid inputs, display the correct number of stars, prevent values from exceeding the allowed range, and remain accessible to all users.