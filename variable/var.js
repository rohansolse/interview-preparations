var x = 10;
{
  var x = 20;
  console.log(x);
}
console.log(x);
// Output: 20
// Explanation:
// The variable x declared with var inside the block does not have block scope.
// It is hoisted to the function or global scope, so the outer x is overwritten and logs 20.


console.log(y);
var y = "Hello";
console.log(y);

// Output:
// undefined
// Hello

// Explanation:
// Due to hoisting, the declaration of x is moved to the top, but not its assignment.
// Therefore, the first console.log(x) outputs undefined, and after the assignment, the second console.log(x) outputs "Hello".