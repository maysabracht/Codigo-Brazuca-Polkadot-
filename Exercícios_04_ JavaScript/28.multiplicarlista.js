const numbers = [2, 6, 15, 19];

if (numbers.length === 0) {
    console.log("The list is empty. No product to calculate.");
} else {
    const product = numbers.reduce((product, number) => product * number, 1);
    console.log(`The product of this list of numbers is ${product}`);
}