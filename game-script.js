const btnR = document.querySelector('#rock');
const btnP = document.querySelector('#paper');
const btnS = document.querySelector('#scissors');
const divR = document.querySelector('#results');
const rslt = document.createElement('p');
const mssg = document.createElement('p');

function getComputerChoice() {
    // Return randomly "Rock", "Paper" or "Scissors"
    let value = Math.random();

    if (value < 1/3) {
        return "rock";
    } else if (value < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    divR.appendChild(rslt);
    divR.appendChild(mssg);

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "It's a draw";
            return 0;
        } else if (computerSelection === "paper") {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "You lose! Paper beats Rock!";
            return -1;
        } else {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "You win! Rock beats Scissors!";
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "You win! Paper beats Rock!";
            return 1;
        } else if (computerSelection === "paper") {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "It's a draw!";
            return 0;
        } else {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "You lose! Scissors beat Paper!";
            return -1;
        }
    } else {
        if (computerSelection === "rock") {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "You lose! Rock beats Scissors!";
            return -1;
        } else if (computerSelection === "paper") {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "You win! Scissors beat Paper!";
            return 1;
        } else {
            rslt.textContent = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            mssg.textContent = "It's a draw!";
            return 0;
        }
    }
}

function game() {
    let score = 0;
    let totalGames = 5;

    for (let i = 0; i < totalGames; i++) {
        // Play five rounds
        score = score + playRound(prompt("Choose: ").trim().toLowerCase(), getComputerChoice());
        console.log(`round ${i+1}: ${score}`)
    }

    if (score > 0) {
        return "You win the game!";
    } else if (score === 0) {
        return "The game ended in a draw!";
    } else {
        return "You lose the game!";
    }
}

btnR.addEventListener('click', () => playRound("rock", getComputerChoice()));
btnP.addEventListener('click', () => playRound("paper", getComputerChoice()));
btnS.addEventListener('click', () => playRound("scissors", getComputerChoice()));