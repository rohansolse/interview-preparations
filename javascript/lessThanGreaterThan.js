console.log(5 < 8 < 2);
console.log(1 > 19 < 2);
// Explanation:
// In the first expression, 5 < 8 evaluates to true (which is coerced to 1).
// Then, 1 < 2 evaluates to true.
// In the second expression, 1 > 19 evaluates to false (which is coerced to 0).
// Then, 0 < 2 evaluates to true.