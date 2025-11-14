setTimeout(() => {
  console.log("timeout");
});
console.log("Hello");

// setTimeout is asynchronous. The callback goes to the event queue and
// executes only after the call stack is empty. console.log("Hello") runs
// first because it is synchronous, so the output is Hello then timeout.
