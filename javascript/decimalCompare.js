console.log(0.1 + 0.2 === 0.3); // Output: false
// Explanation:
// Due to the way floating-point numbers are represented in binary,
// the sum of 0.1 and 0.2 results in a value slightly greater than 0.3,
// leading to the comparison returning false.

// Because of floating-point precision issues in JavaScript.
// JavaScript uses 64-bit binary floating-point numbers (IEEE 754).
// Some decimal numbers cannot be represented exactly in binary.