let name1 = 'rohan solse';

for (const char of name1) {
    if (char !== ' ') {
        obj[char] = (obj[char] || 0) + 1;
        if (obj[char] > highestValue) {
            highestValue = obj[char];
            mostAppearedChar = char;
        }
    }
}



const obj = {};
let highestValue = 0;
let mostAppearedChar = '';

for (let i = 0; i < name1.length; i++) {
    const char = name1[i];

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
