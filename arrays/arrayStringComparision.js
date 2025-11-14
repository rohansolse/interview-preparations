const arr1 = [1, 2, 3];
const str = "1,2,3";

console.log(arr1 == str); // true (type coercion)
console.log(arr1 === str); // false (different types)

// Because when comparing an array with a string using ==,
// JavaScript converts the array to a string first.

// Arrays are objects, but when compared with a string using ==,
// JavaScript converts the array into a comma-separated string.

console.log([10, 20] == "10,20");  // true
console.log([1] == "1");           // true
console.log([] == "");             // true
