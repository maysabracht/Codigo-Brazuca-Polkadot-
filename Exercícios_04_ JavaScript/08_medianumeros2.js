//This version is more robust and handles a wider range of scenarios, making it slightly more complex but also more user-friendly and reliable ;)
const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
        return "Cannot calculate average: the list is empty.";
    }
    if (numbers.length === 1) {
        return `Only one number in the list. The average is: ${numbers[0]}`;
    }

    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / numbers.length;

    return `The average of the numbers is: ${average}`;
};

// Test cases
console.log(calculateAverage([])); // Empty list
console.log(calculateAverage([42])); // Single number
console.log(calculateAverage([5, 10, 15, 20])); // Multiple numbers