console.log("Start");
Promise.resolve().then(() => {
  console.log("Promise then");
});

setTimeout(() => {
  console.log("setTimeout 0s");
}, 0);


console.log("End");
