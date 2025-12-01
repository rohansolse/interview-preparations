
/*
Given a string s, find the length of the longest substring without duplicate characters.
Example 1:
Input: s = "abcabcbb"
a, ab, abc, cab, bca ......
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// const example = "abcabcbb";
// const example = "bbbbb";
const example = "pwwkewabecdwk";


let subLenght = 0;
let subStrArr = [];

for(let i=0; i< example.length; i++){
    if(!subStrArr.includes(example[i])){
        subStrArr.push(example[i])
        if(subLenght < subStrArr.length) {
            subLenght = subStrArr.length;
        }
    } else {
        subStrArr = [];
    }
}

console.log(subLenght);
