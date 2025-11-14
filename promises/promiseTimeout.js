setTimeout(() => {
  console.log('timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('promise 1');
});
