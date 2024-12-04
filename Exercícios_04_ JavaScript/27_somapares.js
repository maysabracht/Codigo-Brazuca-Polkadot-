const numbers = [2, 6, 7, 14, 21];

function sumEven(numbers) {
    let sum = 0;

    for (let number of numbers) {
        if (number % 2 === 0) { // Check if the number is even
            sum += number; // Add the even number to the sum
    }
}
    return sum; // Return the final sum
}

    const result = sumEven(numbers);
    console.log(`The sum of the even numbers is: ${result}`);