console.log(data()); // data is not a function

var data = function() {
  return "1";
};

// Explanation:
// In JavaScript, function declarations are hoisted, meaning they are loaded 
// into memory during the compilation phase before the code is executed.

console.log("----1-----");
console.log(data2()); // data is not a function

function data2() {
  return "1";
};