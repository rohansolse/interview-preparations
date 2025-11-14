const arr = [];
let res = arr.every(x => x > 0);
console.log(res);

// Since the array is empty, there is no element that violates the condition.
// So JavaScript says → Yes, all of them satisfy it

[].every(x => x < 0);  // true
[].every(x => false);  // true
[].every(x => x === "Rohan"); // true
[].every(x => x !== undefined); // true