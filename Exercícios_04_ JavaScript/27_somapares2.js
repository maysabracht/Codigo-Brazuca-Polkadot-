// This version uses .filter and .reduce for cleaner and more concise syntax
const numbers = [2, 6, 7, 14, 21];

function sumEvenNumbers(numbers) {
    return numbers
        .filter(number => number % 2 === 0) // Filter even numbers
        .reduce((sum, number) => sum + number, 0); // Sum the filtered numbers
}

const result = sumEvenNumbers(numbers);
console.log(`The sum of the even numbers is: ${result}`);