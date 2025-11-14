// let x = {
//     flag:1,
//     toString: function(){
//         return this.flag++;
//     }
// }

let x = {
  flag: 1,
  toString() {
    return this.flag++;
  },
};

// let x = {
//   counter: 0,
//   valueOf() {
//     this.counter++;
//     return this.counter;   // returns 1, then 2, then 3
//   }
// }

if (x == 1 && x == 2 && x == 3) {
  console.log("Hello");
}
