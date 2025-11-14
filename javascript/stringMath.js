console.log("----1-----");
console.log(1 + 2 + '3'); // '33'
console.log('1' + 2 + 3); // '123'

console.log("----2-----");
console.log('5' - 2); // 3
// JavaScript converts '5' into a number because the minus operator cannot 
// work with strings. So '5' - 2 becomes 5 - 2 = 3.

console.log("----3-----");
console.log('5' + 2); // 52
console.log('10' - '4'); // 6

console.log("----4-----");
const str = "abc" + +"def";
console.log(str);
// Explanation:
// In this expression, the unary plus operator (+) is applied to the string "def".
// The unary plus operator attempts to convert its operand into a number.
// Since "def" cannot be converted to a valid number, it results in NaN (Not-a-Number).
// Therefore, the expression becomes "abc" + NaN, which results in the string "abcNaN".