const countCharacter = (str, targetChar) => {
    // Initialize a counter for the target character
    let count = 0;

    // Convert the string to lowercase to make the count case-insensitive
    const stringArray = str.toLowerCase().split('');

    // Loop through the array and count occurrences of the target character
    stringArray.forEach(char => {
        if (char === targetChar) {
            count++; // Increment count when the character matches
        }
    });

    // Return the result
    return count > 0 ? `${count} occurrence(s) of '${targetChar}' found` : `No occurrences of '${targetChar}' found`;
};

// Test case
console.log(countCharacter("Have a nice day!", 'h')); // Count occurrebnces of 'h'
