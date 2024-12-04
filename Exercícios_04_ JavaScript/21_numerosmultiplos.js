a = 64;
b = 5;

function areMultiples(a, b) {
    if (a % b === 0) {
        return true; // a is a multiple of b
    } else {
        return false; // a is not a multiple of b
    }
}

console.log(areMultiples(a, b)); 
