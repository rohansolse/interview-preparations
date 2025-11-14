let x = [20, 1, 3].sort();
console.log(x); // Output: [1, 20, 3]
// Explanation:
// By default, the sort() method sorts elements as strings.
// Therefore, the array is sorted based on the Unicode code point values of the characters.
// As a result, "1" comes before "20" and "3", leading to the output [1, 20, 3].

let y = [20, 1, 3].sort((a, b) => a - b);
console.log(y); // Output: [1, 3, 20]