const x = (0 ?? 2) || 3;
console.log(x); // Output: 3


console.log(0 || "Hello"); // "Hello"
console.log(0 ?? "Hello"); // 0
// Explanation:
// In the first case, 0 is falsy, so the || operator returns "Hello".
// In the second case, 0 is neither null nor undefined, so the ?? operator returns 0.