console.log("----1-----");
console.log(5 && 1);
console.log(5 || 1);

// Explanation:
// ✔ && returns the first falsy value
// If all are truthy → returns the last value
// ✔ || returns the first truthy value
console.log("----2-----");
console.log(false || null || "Hello");
console.log(false && null && "Hello");
// Explanation:
// In the first expression, false is falsy, so || evaluates the next operand.
// null is also falsy, so it evaluates the next operand, which is "Hello" (truthy).
// Therefore, the result is "Hello".
// In the second expression, false is falsy, so && returns false immediately without evaluating further operands.

console.log("----3-----");
console.log(0 || 1);
console.log(1 || 2);
console.log(0 && 1);
console.log(1 && 2);
