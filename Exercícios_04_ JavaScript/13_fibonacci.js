const number = 10; // Number of terms in the Fibonacci sequence
const fibonacci = [0, 1]; // Start the sequence with the first two terms

for (let i = 2; i < number; i++) { // Start from the 3rd term
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]); // Add the sum of the last two terms
  }

  console.log(`The Fibonacci sequence up to ${number} terms is: ${fibonacci.join(', ')}`);