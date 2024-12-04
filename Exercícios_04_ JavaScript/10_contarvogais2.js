// This version counts the occurrences of each vowel in the string. It also handles cases where no vowels are found. This makes it more robust and user-friendly.
const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelCount = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }; // Object to store counts

    // Convert string to lowercase and split it into an array of characters
    const stringArray = str.toLowerCase().split('');

    // Count the vowels
    stringArray.forEach(char => {
        if (vowels.includes(char)) {
            vowelCount[char]++; // Increment the count for the vowel
        }
    });

    // Format the result
    let result = '';
    for (let vowel in vowelCount) {
        if (vowelCount[vowel] > 0) {
            result += `${vowelCount[vowel]} ${vowel}(s), `;
        }
    }

    // Remove the last comma and space, and return the result
    return result.slice(0, -2) || 'No vowels found';
};

// Test cases
console.log(countVowels("hello")); // "1 e(s), 1 o(s)"
console.log(countVowels("JavaScript")); // "2 a(s), 1 i(s)"
console.log(countVowels("")); // "No vowels found"