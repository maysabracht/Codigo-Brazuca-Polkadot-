const randomNumber = () => Math.floor(Math.random() * 100) +1;
const number = randomNumber(); 
const numbersList = [12, 16, 8, 32];

if (numbersList.includes(number)) {
    console.log(`${number} is on the list`);
} else {
    console.log(`${number} isn't on the list`);
}