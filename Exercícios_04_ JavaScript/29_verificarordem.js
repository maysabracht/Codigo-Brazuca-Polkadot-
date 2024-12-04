const isAscending = (numbers) => {
    // Create a sorted copy of the original array and sort it
    const sorted = [...numbers].sort((a, b) => a - b);

    // Compare the original array with the sorted array
    return JSON.stringify(numbers) === JSON.stringify(sorted);
};

// Example usage:
const numbers = [5, 2, 8, 3, 1];
console.log(isAscending(numbers)); // Output: false