const randomNumber = () => Math.floor(Math.random() * 100) +1;  // Generate a random number between 0 and 100
const number = randomNumber(); // Store the generated number in the variable `number`

// Check if a number is prime
const isPrime = (num) => {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i < num; i++) { // Loop through numbers from 2 to num - 1
        if (num % i === 0) return false; // If divisible by any number, it's not prime
    }
    return true; // If no divisors were found, it's a prime number
};

// Output whether the number is prime or not
console.log(`The number ${number} is ${isPrime(number) ? "prime" : "not prime"}`);