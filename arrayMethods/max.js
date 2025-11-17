const array1 = [1, 1, 1, 2, 7, 2, 3, 4, 4];
console.log(Math.max(...array1));

const findMax3 = (arr) => {
  return arr.sort((a, b) => b - a)[0];
};

console.log(findMax3([10, 5, 20, 15]));

const findMax2 = (arr) => {
  return arr.reduce((max, curr) => (curr > max ? curr : max));
};

console.log(findMax2([10, 45, 5, 20, 15]));
