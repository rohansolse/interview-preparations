const Obj1 = { x: 1, y: 2 };
const Obj2 = { a: 3, b: 4 };

const merged = { ...Obj1, ...Obj2 };
console.log(merged);


console.log("----2-----");

let finalOut = 0;
let testArray = [1,0,0,1,0];
let tempOut = 0;

for(let i = 0; i < testArray.length; i++){
    if(testArray[i] === 1){
        tempOut += 1;
    } else {
        tempOut = 0;
    }
    
    if(tempOut > finalOut){
        finalOut = tempOut;
    }
}

console.log(finalOut);
