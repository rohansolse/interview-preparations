function Person() {
  this.name = "Rohan";

  setTimeout(function () {
    console.log("printing :", this.name); // ❌ undefined
  }, 1000);
}

// this inside the normal function refers to window, not Person object.

// function Person() {
//   this.name = "Rohan";

//   setTimeout(() => {
//     console.log("printing 2:", this.name); // ✅ Rohan
//   }, 1000);
// }

// Arrow functions inherit this from their parent, so no confusion.

Person();

// another example:

const obj = {
  a: 10,
  fn: function () {
    console.log(this.a); // 10
  }
};

obj.fn();

const obj2 = {
  a: 10,
  fn: () => {
    console.log(this.a); // undefined (this is NOT obj)
  }
};
obj2.fn();