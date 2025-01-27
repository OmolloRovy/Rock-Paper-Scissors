
const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const resultEl = document.getElementById("results");
const scoreEl = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissor);

// rock function
function playRock() {
  const computerChoice = getComputerChoice();
  let result = "";

  if (computerChoice === 'rock') {
    result = "It's a tie!";
  } else if (computerChoice === 'paper') {
    result = "You lose! Paper beats rock.";
    computerScore++;
  } else if (computerChoice === 'scissors') {
    result = "You win! Rock beats scissors.";
    playerScore++;
  }

  updateScore();
  resultEl.textContent = result;
}

// play Scissors function
function playScissor() {
  const computerChoice = getComputerChoice();
  let result = "";

  if (computerChoice === 'rock') {
    result = "You lose! Rock beats Scissors";
    computerScore++;
  } else if (computerChoice === 'paper') {
    result = "You Win! Scissors beats Paper.";
    playerScore++;
  } else if (computerChoice === 'scissors') {
    result = "It's a tie!";
  }

  updateScore();
  resultEl.textContent = result;
}

// play paper function
function playPaper() {
  const computerChoice = getComputerChoice();
  let result = "";

  if (computerChoice === 'rock') {
    result = "You Win! Paper Beats Rock";
    playerScore++;
  } else if (computerChoice === 'paper') {
    result = "It's a tie.";
  } else if (computerChoice === 'scissors') {
    result = "You lose! Scissors beats paper";
    computerScore++;
  }

  updateScore();
  resultEl.textContent = result;
}

// set computer choice function
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function updateScore() {
  scoreEl.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
}
