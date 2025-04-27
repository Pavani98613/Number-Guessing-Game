let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  const guess = Number(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  const attemptsText = document.getElementById('attempts');

  if (!guess || guess < 1 || guess > 100) {
    message.innerText = "Please enter a number between 1 and 100!";
    message.style.color = "#ff0000";
    return;
  }

  if (guess === randomNumber) {
    message.innerText = `Congratulations! You guessed the number ${randomNumber}!`;
    message.style.color = "#4caf50"; // Green color
    endGame();
  } else if (guess < randomNumber) {
    message.innerText = "Too low! Try a higher number!";
    message.style.color = "#ff9800"; // Orange
  } else {
    message.innerText = "Too high! Try a lower number!";
    message.style.color = "#2196f3"; // Blue
  }

  attempts--;
  attemptsText.innerText = `Attempts left: ${attempts}`;

  if (attempts === 0 && guess !== randomNumber) {
    message.innerText = `Game Over! The number was ${randomNumber}.`;
    message.style.color = "#e91e63"; // Pink
    endGame();
  }
}

function endGame() {
  document.getElementById('guessInput').disabled = true;
  document.getElementById('restartButton').style.display = "inline-block";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  document.getElementById('guessInput').disabled = false;
  document.getElementById('guessInput').value = '';
  document.getElementById('message').innerText = '';
  document.getElementById('attempts').innerText = '';
  document.getElementById('restartButton').style.display = "none";
}