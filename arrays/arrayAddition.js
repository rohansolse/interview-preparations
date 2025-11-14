console.log([1, 2, 3] + [1, 3, 4]);
console.log(typeof([1, 2, 3] + [1, 3, 4]));
// Explanation:
// In JavaScript, using the + operator with arrays converts them to strings.
// Therefore, [1, 2, 3] becomes "1,2,3" and [1, 3, 4] becomes "1,3,4".
// The result of the addition is the concatenation of these two strings: "1,2,31,3,4".

console.log("----2-----");
console.log([] + []);
console.log(typeof([] + []));
console.log([1] + []);
console.log(typeof([1] + []));
console.log([1] + "abc");
// Explanation:
// An empty array converted to a string results in an empty string.
// Thus, [] + [] results in "" (an empty string).
// When adding [1] and [], [1] converts to "1" and [] converts to "", resulting in "1".
// When adding [1] and "abc", [1] converts to "1", leading to the result "1abc".

console.log("----3-----");
const x = [1];
const y = [2];
console.log(x + y);
console.log(typeof(x + y));