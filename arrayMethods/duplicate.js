// One Liner Js
// Remove Duplicates
// Find Max in Array

const array1 = [1, 2, 2, 3, 4, 4];
const array2 = [10, 5, 20, 15];
console.log("-----1-----");
const newArraySet = [...new Set(array1)];
console.log(newArraySet);


console.log("-----2-----");
let tempObj = {};
let newArray = [];
for (let ele of array1) {
  if (!tempObj[ele]) {
    tempObj[ele] = true;
    newArray.push(ele);
  }
}
console.log(tempObj);
console.log(newArray);

console.log("-----3-----");
const newArrayFilter = array1.filter((element, index )=> array1.indexOf(element) === index)
console.log(newArrayFilter)

console.log("-----4-----");
const resultArray = [];
for(let i= 0; i<array1.length; i++){
  if(!resultArray.includes(array1[i])){
    resultArray.push(array1[i])
  }
}
console.log(resultArray);

