const calculateAverage = (numbers) => { // Calculate the average of a list of numbers
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    // Acumulator = keeps a running total starting at 0, Current = represent each number in the array
    return sum / numbers.length;
    //The sum is divided by the count of numbers in the array
};

const numeros = [5, 10, 15, 20];

// Calculate the average
const average = calculateAverage(numeros);

console.log(`The average of the numbers is: ${average}`);