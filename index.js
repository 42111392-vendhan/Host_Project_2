const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guess');
const feedback = document.getElementById('feedback');

let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    
    if ( userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        feedback.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        guessButton.textContent = "Reset"; 
        guessButton.removeEventListener("click", checkGuess); 
        guessButton.addEventListener("click", resetGame);  
    } else if (userGuess < targetNumber) {
        feedback.textContent = "Its low! Try again.";
    } else {
        feedback.textContent = "Its high! Try again.";
    }
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = "";
    feedback.textContent = "";
    guessButton.textContent = "Guess";  
    guessButton.removeEventListener("click", resetGame); 
    guessButton.addEventListener("click", checkGuess);  
}

guessButton.addEventListener("click", checkGuess);
