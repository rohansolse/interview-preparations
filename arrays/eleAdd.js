const arr = [1, 2, 3];
arr[5] = 6;
console.log(arr);
console.log(arr.length);

// Explanation:
// When we assign a value to an index that is beyond the current length of the array,
// JavaScript creates empty slots for the indices in between.
// Therefore, arr becomes [1, 2, 3, <empty>, <empty>, 6], and the length is updated to 6.