let x = 10;
{
  let x = 20;
}
console.log(x); // Output: 10
// Explanation:
// The variable x declared with let inside the block has block scope.
// Therefore, the outer x remains unchanged and logs 10.

