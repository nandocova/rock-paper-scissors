const btnR        = document.querySelector('#rock');
const btnP        = document.querySelector('#paper');
const btnS        = document.querySelector('#scissors');
const divR        = document.querySelector('#results');
const buttons     = document.querySelector('#buttons');
const body        = document.querySelector('body');
const round       = document.createElement('p');
const outcome     = document.createElement('p');
const score       = document.createElement('p');
const match       = document.createElement('p');
const rules       = document.createElement('p');
const results     = document.createElement('h3');
const totalRounds = 5;
var   wins        = 0;
var   rounds      = 0;


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
    // Match your choice agains the computer's
    divR.appendChild(round);
    divR.appendChild(outcome);

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "It's a draw!";
            return 0;
        } else if (computerSelection === "paper") {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "Rock loses to Paper!";
            return -1;
        } else {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "Rock beats Scissors!";
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "Paper beats Rock!";
            return 1;
        } else if (computerSelection === "paper") {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "It's a draw!";
            return 0;
        } else {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "Paper loses to Scissors!";
            return -1;
        }
    } else {
        if (computerSelection === "rock") {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "Scissors lose to Rock!";
            return -1;
        } else if (computerSelection === "paper") {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "Scissors beat Paper!";
            return 1;
        } else {
            round.textContent   = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}`
            outcome.textContent = "It's a draw!";
            return 0;
        }
    }
}

function play(choice) {
    // Play a number of rounds and keep player's score
    if (rounds < totalRounds) {
        wins += playRound(choice, getComputerChoice());
        score.textContent = `Score: ${wins}`;
        divR.appendChild(score);

        rounds++;
    }

    match.textContent = "Rounds left: " + (totalRounds - rounds).toString();
    divR.appendChild(match);
    
    if (rounds === totalRounds) {
        if (wins > 0) {
            results.textContent = "YOU WIN!";
        } else if (wins < 0) {
            results.textContent = "YOU LOSE!";
        } else {
            results.textContent = "IT WAS A DRAW";
        }
        divR.appendChild(results);
    }
}

rules.textContent = "Play " + totalRounds + " rounds against the machine...";
body.insertBefore(rules, buttons);

btnR.addEventListener('click', () => play("rock"));
btnP.addEventListener('click', () => play("paper"));
btnS.addEventListener('click', () => play("scissors"));