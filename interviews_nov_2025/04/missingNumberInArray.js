let arr = [5, 3, 1, 2];

const totalNumbers = arr.length + 1;  // 4 + 1 = 5
const expectedSum = (totalNumbers * (totalNumbers + 1)) / 2; // 15
const actualSum = arr.reduce((sum, val) => sum + val, 0); // 11

const missingNumber = expectedSum - actualSum;

console.log("Missing Number:", missingNumber); // 4
