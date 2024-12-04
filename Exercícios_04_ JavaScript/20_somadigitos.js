let number = 28;
let digits = number.toString().split(''); // ["2", "8"]

let sum = 0; // Start with sum = 0
for (let digit of digits) {
    sum += Number(digit); // Add each digit as a number to sum
}

console.log(`The sum of the digits of ${number} is ${sum}`);