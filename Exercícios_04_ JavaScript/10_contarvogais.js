const phrase = "Your input string here".toLowerCase(); // Convert to lowercase
const stringArray = phrase.split(''); //  Split the string into an array based on the delimiter you specify, characters = ('') and stores it
const vowels = ['a', 'e', 'i', 'o', 'u']; // Define the vowels to look for
const vowelCount = stringArray.filter(char => vowels.includes(char)).length; // Count vowels

console.log(`The string contains ${vowelCount} vowels.`);