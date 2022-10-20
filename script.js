// GUESS THAT NUMBER
//Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero.`;

// for restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the number that the user will guess
let randomNum;

// For storing the number of attempts the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing the user's response to play again or not play again
let playAgain;

// ===========
// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has a value of true

while (restartGame) {
    // Asks user to engter a number to set the upper bound for the random number that will be created.
    rangeNum = prompt(`Please enter a maximum number for the range.`);

    // Using parseInt to attempt to convert the user's response into a number value
    rangeNum = parseInt(rangeNum);

    // Verifies the user's entry for a range number is a number greater than zero (NOTE: All numbers, positive or negative, have a default boolean value of true, except for zero which has a default boolean valute of false. Also, NaN has a default boolean value of false.)
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt (rangeNum);
    }

    // Create the random number using the range number entered by the user

    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    restartGame = false

}