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