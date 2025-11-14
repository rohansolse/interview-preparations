var arrA = [0];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA);

// Explanation:
// In JavaScript, arrays are reference types. When we assign arrA to arrB,
// both variables point to the same array in memory. Therefore, modifying
// arrB also affects arrA. The output will be [42].