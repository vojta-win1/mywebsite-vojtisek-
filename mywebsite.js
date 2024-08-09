const ps = require("prompt-sync");
const prompt = ps();

let num = Math.floor(Math.random() * 10);
let num1 = Number(prompt("Guess the number: "));

if (isNaN(num1)) {
    console.log("This is not a number");
} else {
    if (num == num1) {
        console.log("You guessed the number");
    } else if (num < num1) {
        console.log("Your number is larger");
        while (num != num1) {
            num1 = Number(prompt("Try one more time: "));
            if (num == num1) {
                console.log("You guessed the number");
                break;
            }
        }
    } else {
        console.log("Your number is smaller");
        while (num != num1) {
            num1 = Number(prompt("Try one more time: "));
            if (num == num1) {
                console.log("You guessed the number");
                break;
            }
        }
    }
}