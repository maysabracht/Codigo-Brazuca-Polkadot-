const sortNumbers = (numbers) => {
    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);

    // Print the result
    console.log("Sorted numbers:", numbers);
};

sortNumbers([5, 2, 8, 3, 1]);