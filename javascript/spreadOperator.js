function getAge(...args) {
  console.log(typeof args);
  console.log(args);
}
console.log("----1----");
getAge(21);

// Explanation:
// The spread operator (...) collects all the arguments passed to the function
// into an array called args. Therefore, typeof args returns "object",
// and args contains the array of arguments [21].


console.log("----2----");
const numbers = [1, 2, 3, 4, 5];
const [x, ...y] = numbers;
console.log(x, y);
// explanation:
// Here, the spread operator is used in array destructuring.
// The first element of the numbers array is assigned to x (which is 1),
// and the rest of the elements are collected into an array y ([2, 3, 4, 5]).