// Function to reverse a string
const reverseString = (str) => {
    if (!str) return "Input string is empty."; // Handle empty strings
    return str.split('').reverse().join('');
};

// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("")); // "Input string is empty."
console.log(reverseString("12345")); // "54321"