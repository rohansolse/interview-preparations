// The `this` keyword in JavaScript refers to *the object that is currently executing the code*.
// But its meaning *changes depending on where it is used*.


// # ✅ *What is `this` keyword in JavaScript?*
// `this` = *current context object*
// It depends on *how* and *where* the function is called.

// # 📌 *1. `this` inside an object method*
// Refers to**the same object*.


const user = {
  name: "Rohan",
  getName() {
    console.log(this.name);
  }
};

user.getName(); // "Rohan"


// # 📌 *2. `this` in a regular function (global)*

// In browsers → refers to *window*
// In Node.js → refers to *global object* (or undefined in strict mode)


function show() {
  console.log(this);
}

show(); // window (in browser)

// # 📌 *3. `this` in a constructor*
// Refers to *the new object being created*.

function Person(name) {
  this.name = name;
}

let p = new Person("RJ");
console.log(p.name); // "RJ"


// # 📌 *4. `this` in an event (HTML/browser)*
// Refers to *the element* that triggered the event.

<button onclick="console.log(this)">Click</button>

// # 📌 *5. `this` in Arrow Functions*

// Arrow functions *do not have their own `this`*.
// They take `this` from their surrounding (parent) scope.

const user2 = {
  name: "Rohan",
  show: () => {
    console.log(this.name); // NOT "Rohan"
  }
};

user2.show(); // undefined

// ⭐ Super Simple Definition

// "this" is a special keyword that refers to the object
// that is currently calling/executing the function.
