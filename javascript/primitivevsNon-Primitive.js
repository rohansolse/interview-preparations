// | Feature              | Primitive Data Types                               | Non-Primitive Data Types                     |
// |----------------------|-----------------------------------------------------|-----------------------------------------------|
// | Definition           | Basic immutable data types                          | Complex data structures                       |
// | Stored As            | Value                                               | Reference (memory address)                    |
// | Mutability           | Immutable                                           | Mutable                                       |
// | Memory Allocation    | Stack                                               | Heap                                          |
// | Comparison           | Compares actual values                              | Compares references                           |
// | Examples             | Number, String, Boolean, Null, Undefined, Symbol    | Object, Array, Function, Date, Map, Set       |
// | Usage                | Used for simple data representation                 | Used for complex data structures and objects  |


let a = 10;
let b = a;   
b = 20;

console.log(a); // 10 (NOT affected)
console.log(b); // 20

let s1 = "Rohan";
let s2 = s1;
s2 = "RJ";

console.log(s1); // "Rohan"
console.log(s2); // "RJ"


let obj1 = { name: "Rohan" };
let obj2 = obj1;  

obj2.name = "RJ";

console.log(obj1.name); // "RJ" (same memory reference)

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]