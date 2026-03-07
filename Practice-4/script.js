let gameNum = 25;
 userNum = prompt("Guess the game number : ");
while(userNum != gameNum){
    userNum = prompt("You entered the wrong number. Guess again: ");
}
console.log("Congratulations! You guessed the correct number: ", gameNum);