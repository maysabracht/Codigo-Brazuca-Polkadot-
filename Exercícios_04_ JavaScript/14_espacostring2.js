//This version splits the string into characters, filters out spaces, and joins the remaining characters back into a single string.
let string = "Have a nice day.";

// Convert to array, filter out spaces, then join back
let result = string
  .split('') // Split into an array of characters
  .filter(char => char !== ' ') // Remove spaces
  .join(''); // Join back into a single string

console.log(`The string without spaces is: "${result}"`);