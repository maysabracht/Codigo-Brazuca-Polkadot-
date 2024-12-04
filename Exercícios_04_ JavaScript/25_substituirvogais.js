const phrase = "Your input string here"; // Original string
const vowels = ['a', 'e', 'i', 'o', 'u']; // Vowels to replace

// Split the string into an array of characters
const stringArray = phrase.split('');

// Replace vowels with '*'
const replacedArray = stringArray.map(char => {
    // Check if the character (lowercased) is a vowel
    return vowels.includes(char.toLowerCase()) ? '*' : char;
});

// Join the array back into a string
const result = replacedArray.join(''); // Combine modified array into a single string

console.log(`The updated string is: ${result}`);
