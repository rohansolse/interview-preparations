let result = 5 + "3";
console.log(result);
console.log(typeof result);

// In the above code, JavaScript performs type coercion.
// It converts the number 5 to a string "5" and then concatenates it with "3".
// So the final result is the string "53".

let result2 = 5 + +"3";
console.log(result2);
console.log(typeof result2);

// Here, the unary plus operator (+) before "3" converts the string to a number.
// So the expression becomes 5 + 3, which results in the number 8.