const arr = [1, 21, 30, 4];
arr.sort();
console.log(arr);
// Output: [1, 21, 30, 4]

// Explanation: The sort() method, when called without a compare function,
// converts elements to strings and compares their sequences of UTF-16 code unit values.
// Hence, the array is sorted lexicographically, not numerically.

arr.sort((a, b) => a - b);
console.log(arr);
// Output: [1, 4, 21, 30]

// Explanation: By providing a compare function that subtracts b from a,
// we ensure that the array is sorted numerically in ascending order.   