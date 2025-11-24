for (const char of name) {
    if (char !== ' ') {
        obj[char] = (obj[char] || 0) + 1;
        if (obj[char] > highestValue) {
            highestValue = obj[char];
            mostAppearedChar = char;
        }
    }
}


let name = 'rohan solse';

const obj = {};
let highestValue = 0;
let mostAppearedChar = '';

for (let i = 0; i < name.length; i++) {
    const char = name[i];

    if (char !== ' ') {              // ignore spaces
        obj[char] = (obj[char] || 0) + 1;
        
        if (obj[char] > highestValue) {
            highestValue = obj[char];
            mostAppearedChar = char;
        }
    }
}

console.log(obj);                      // Frequency of all characters
console.log("Most Appearing Character:", mostAppearedChar, "-", highestValue, "times");
