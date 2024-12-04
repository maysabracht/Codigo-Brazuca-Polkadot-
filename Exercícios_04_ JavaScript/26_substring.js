function containsSubstring(text, substring) {
    return text.includes(substring);
}

// Example usage
const mainString = "Hello, world!";
const searchString = "world";

console.log(containsSubstring(mainString, searchString)); // true