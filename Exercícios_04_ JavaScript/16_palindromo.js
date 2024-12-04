const isPalindrome = (phrase) => {
    // Step 1: Normalize the string
    const normalized = phrase
        .toLowerCase() // Convert to lowercase
        .normalize("NFD") // Normalize accents (e.g., é -> e)
        .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
        .replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters

    // Reverse the string
    const reversed = normalized.split('').reverse().join('');

       //Compare original and reversed strings
       if (normalized === reversed) {
        console.log(`The phrase "${phrase}" is a palindrome.`);
    } else {
        console.log(`The phrase "${phrase}" is not a palindrome.`);
    }
};

//Test cases
isPalindrome("A man, a plan, a canal, Panama!") //Palindrome with punctuation mark
isPalindrome("Roma é amor"); // Palindrome with accet
isPalindrome("Hello World!"); // Not a palindrome