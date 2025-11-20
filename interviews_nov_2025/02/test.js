let input = [0, 7, 8, 0, 2, 0, 4, 0];

let index = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== 0) {
    input[index] = input[i];
    index++;
  }
}

// Fill remaining positions with 0
while (index < input.length) {
  input[index] = 0;
  index++;
}

console.log(input);  // [7, 8, 2, 4, 0, 0, 0, 0]
