console.log("---- Const with Primitives ----");
const str = "hello";
str.data = "val";
console.log(str.data);

// Explanation:
// In JavaScript, primitive values (like strings, numbers, booleans) are immutable.
// When you try to add a property to a primitive value, it doesn't persist because
// the primitive is not an object and cannot hold properties.


console.log("---- Const with Objects ----");
const s1 = "hello";
const s2 = new String("hello");

console.log(s1 == s2);
console.log(s1 === s2);
// Explanation:
// In the first comparison (s1 == s2), JavaScript performs type coercion.
// The String object s2 is converted to a primitive string value for the comparison,