console.log("2" > "10"); // true
// Explanation:
// When comparing two strings, JavaScript compares them lexicographically (dictionary order).
// Here, it compares the first characters of both strings: '2' and '1'.
// Since '2' comes after '1' in lexicographical order, "2" > "10" evaluates to true.

console.log("2" > 10); // false

// Explanation:
// When comparing a string and a number, JavaScript converts the string to a number.
// Here, "2" is converted to 2, so the comparison becomes 2 > 10, which is false.

console.log("5" == 5); // true
// Explanation:
// When using the loose equality operator (==), JavaScript performs type coercion.
// It converts the string "5" to the number 5 before making the comparison.
// Since both values are now 5, the comparison evaluates to true.