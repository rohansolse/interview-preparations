console.log("---- Using filter ----");
// Method 1: Using filter to create a new array without the specific item
const arr = [1, 2, 3, 4];
const result = arr.filter(item => item !== 3);

console.log(result); 
// [1, 2, 4]

console.log("---- 1 ----");
const arr2 = [1, 2, 3, 4];
arr2.splice(2, 1);   // remove 1 item at index 2
// arr2 is modified in place
console.log(arr2);
// [1, 2, 4]

console.log("---- 2 ----");
const arr3 = [1, 2, 3, 4];
const index = arr3.indexOf(3);

if (index !== -1) {
  arr3.splice(index, 1);
}

console.log(arr3);
// [1, 2, 4]
