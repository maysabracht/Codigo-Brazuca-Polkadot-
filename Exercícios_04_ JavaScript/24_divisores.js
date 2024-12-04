function findDivisors(n) {
    let divisors = []; // Array to store the divisors

    // Loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        // Check if i is a divisor of n
        if (n % i === 0) {
            divisors.push(i); // If it divides evenly, add it to the array
        }
    }

    // Print all the divisors with .join
    console.log(`The divisors of ${n} are: ${divisors.join(', ')}`);
}

// Test the function
findDivisors(12);
findDivisors(10);
