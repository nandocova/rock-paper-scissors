console.log("Let's play Rock, Paper, Scissors!");
console.log("Default choice is: Scissors");

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

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tIt's a draw!");
            return 0;
        } else if (computerSelection === "paper") {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tYou lose! Paper beats Rock!");
            return -1;
        } else {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tYou win! Rock beats Scissors!");
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tYou win! Paper beats Rock!");
            return 1;
        } else if (computerSelection === "paper") {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tIt's a draw!");
            return 0;
        } else {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tYou lose! Scissors beat Paper!");
            return -1;
        }
    } else {
        if (computerSelection === "rock") {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tYou lose! Rock beats Scissors!");
            return -1;
        } else if (computerSelection === "paper") {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tYou win! Scissors beat Paper!");
            return 1;
        } else {
            console.log(`\t${playerSelection} vs ${computerSelection}`)
            console.log("\tIt's a draw!");
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

console.log(game());