// Promise.race()
// Returns first resolved/rejected promise.

const fast = new Promise((res) => setTimeout(() => res("Fast"), 100));
const slow = new Promise((res) => setTimeout(() => res("Slow"), 500));

Promise.race([fast, slow]).then(console.log); // "Fast"

// Explanation:
// In this example, we create two promises: 'fast' which resolves after 100ms
// and 'slow' which resolves after 500ms. When we

const call = new Promise((resolve, reject) => {
  function foo() {
    console.log("foo");
  }
  resolve(true);
});

call
  .then((res) => {
    if (res) {
      console.log("resolved", res);
    }
  })
  .catch((err) => {
    console.log(err);
  });

const call2 = new Promise((resolve, reject) => {
  resolve(true);
});

async function run() {
  const res = await call2;
  console.log("Resolved value:", res); // 👉 true
}

run();
