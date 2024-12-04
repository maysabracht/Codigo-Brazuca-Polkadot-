function getLargerNumber(a, b) {
    if (a > b) {
        return a + " is greater than " + b;
    } else if (a === b) {
        return a + " is equal to " + b;
    } else {
        return a + " is less than " + b;
    }
}

// Test the function
console.log(getLargerNumber(20, 7));
