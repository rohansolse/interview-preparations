const arr = [1, 2];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
