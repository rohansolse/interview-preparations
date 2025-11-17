let obj = { age: 24 };

let { age: userage } = obj;

// console.log(age);
console.log(userage);


const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 'value B';
a[c] = 'value C';

console.log(a);
console.log(a[b]);
console.log(a[c]);