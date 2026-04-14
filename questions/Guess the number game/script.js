let secretNumber = 5;
let guess = Number(prompt("Guess the number (1-10):"));
if (guess === secretNumber) {
   alert("Congratulations! You guessed the number.");
} else {
    alert("Sorry, that's not correct. Try again!");
}