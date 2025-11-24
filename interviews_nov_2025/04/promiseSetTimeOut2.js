console.log("Start");

const p = new Promise((resolve) => {
  // Promise will resolve after 60 seconds
  setTimeout(() => {
    resolve("Promise resolved");
  }, 6000);
});

p.then((msg) => {
  console.log(msg);
});

setTimeout(() => {
  console.log("setTimeout 10s");
}, 0);

console.log("End");
