console.log([] == ![]);
console.log([] === ![]);

console.log([] == 0);
console.log([0] == [0]);
// Explanation:
// In the first comparison, [] is coerced to 0, and ![] is coerced to true (which is 1).
// So the comparison becomes 0 == 1, which is false.
// In the second comparison, [0] and [0] are two different array objects in memory,
// so they are not equal, resulting in false.

console.log("----2-----");
const x = "he".split('');
const y = ['h', 'e'];
console.log(x === y);
