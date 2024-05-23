import inquirer from "inquirer";
let randNum = Math.floor(Math.random() * 5) + 1; // Generate random number between 1 and 5 (inclusive)
let numAttempts = 0; // Initialize attempt counter
let keepPlaying = true;
while (keepPlaying) {
    let userGuess = await inquirer.prompt([
        {
            type: "number",
            message: `Guess a Number between 1 & 5 (Attempt ${numAttempts + 1}): `,
            name: "guess",
        },
    ]);
    numAttempts++; // Update attempt counter
    if (userGuess.guess === randNum) {
        console.log(`You guessed the correct number in ${numAttempts} attempts!`);
        keepPlaying = false; // Exit the loop on correct guess
    }
    else {
        console.log("Incorrect guess. Try again.");
    }
}
