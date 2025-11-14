console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN(NaN)); // true

// Explanation:
// In JavaScript, NaN (Not-a-Number) is a special value that is not equal to itself.
// Therefore, both loose equality (==) and strict equality (===) comparisons between NaN values return false.
// To check if a value is NaN, we can use the Number.isNaN() method, which correctly identifies NaN values.
// The global isNaN() function also returns true for NaN, but it has different behavior for non-numeric values.