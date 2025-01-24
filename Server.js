/*const choices = ["rock", "paper", "scissors"];
const randomindex = Math.floor(Math.random() * 3);
return choices[randomindex];
console.log(choices[randomindex]);*/

const paperBtn = document.getElementById("paper")
const rockBtn = document.getElementById("rock")
const scissorsBtn = document.getElementById("scissors")
const resultEl = document.getElementById("results")

rockBtn.addEventListener("click", playRock)
paperBtn.addEventListener("click", playPaper)
scissorsBtn.addEventListener("click", playScissor)

//rock function
function playRock() {
    const computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        resultEl.textContent = "It's a tie!";
    } else if (computerChoice === 'paper') {
        resultEl.textContent = "You lose! Paper beats rock.";
    } else if (computerChoice === 'scissors') {
        resultEl.textContent = "You win! Rock beats scissors.";
    }
}
// play Scissors function
function playScissor() {
    const computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        resultEl.textContent = "You loose! Rock Beats Scissors";
    } else if (computerChoice === 'paper') {
        resultEl.textContent = "You Win! Sciccors beats Paper.";
    } else if (computerChoice === 'scissors') {
        resultEl.textContent = "It's a tie!";
    }
}

// play paper function
function playPaper() {
    const computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        resultEl.textContent = "You Win! Paper Beats Rock";
    } else if (computerChoice === 'paper') {
        resultEl.textContent = "Its a tie.";
    } else if (computerChoice === 'scissors') {
        resultEl.textContent = "You loose! Scissors beats paper";
    }
}


// set computer choic fuction
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];

}
