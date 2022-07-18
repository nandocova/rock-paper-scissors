console.log("Rock, paper, scissors!");

function GetComputerChoice() {
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

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock"){
        if (computerSelection === "rock") {
            return "It's a draw!";
        } else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock!";
        } else if (computerSelection === "paper") {
            return "It's a draw!";
        } else {
            return "You lose! Scissors beat Paper!";
        }
    } else {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors!";
        } else if (computerSelection === "paper") {
            return "You win! Scissors beat Paper!";
        } else {
            return "It's a draw!";
        }
    }
}

console.log(playRound("rock", GetComputerChoice()));