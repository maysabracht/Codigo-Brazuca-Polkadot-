const n = 10; // Number to calculate the factorial
let factorial = 1; // Initialize a variable to store the factorial, it starts at 1 because multiplying by 0 would make everything 0.

for (let i = 1; i <= n; i++) { // Loop from 1 to n
    factorial *= i; // Multiply the current number to factorial
  }

console.log(`The factorial of the number is: ${factorial}`);


