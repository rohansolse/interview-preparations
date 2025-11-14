const name = "Saikrishna";
age = 21;

console.log(delete name);
console.log(delete age);

// Variables declared with let/const/var are not deletable and delete returns false.
// But a variable assigned without declaration becomes a global object property,
// and delete works on object properties, so it returns true.
