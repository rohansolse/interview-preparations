setTimeout(() => {
  console.log('timeout 1')
}, 0);

Promise.resolve().then(() => {
  console.log('promise 1')
});

setTimeout(() => {
  console.log('timeout 2')
}, 0);

Promise.resolve().then(() => {
  console.log('promise 2')
});
console.log('script end');