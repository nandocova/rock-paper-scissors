const btnR        = document.querySelector('#rock');
const btnP        = document.querySelector('#paper');
const btnS        = document.querySelector('#scissors');
const divR        = document.querySelector('#results');
const buttons     = document.querySelector('#buttons');
const images      = document.querySelector('#images');
const body        = document.querySelector('body');
const round       = document.createElement('div');
const outcome     = document.createElement('div');
const score       = document.createElement('div');
const match       = document.createElement('div');
const line        = document.createElement('hr');
const rules       = document.createElement('p');
const results     = document.createElement('h2');
const button      = document.createElement('button');
const user        = document.createElement('div');
const site        = document.createElement('div');
const vs          = document.createElement('div');
const totalRounds = 5;
var   wins        = 0;
var   rounds      = 0;

vs.textContent = "vs";
round.style.display = 'flex';
round.style.flexDirection = 'row';
round.style.gap = '8px';

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
    round.appendChild(user);
    round.appendChild(vs);
    round.appendChild(site);
    divR.appendChild(outcome);
    divR.appendChild(line);

    if (playerSelection === "rock") {
        user.style.color = "magenta";
        if (computerSelection === "rock") {
            site.style.color    = "magenta";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "It's a draw!";
            return 0;
        } else if (computerSelection === "paper") {
            site.style.color    = "cyan";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "Rock loses to Paper!";
            return -1;
        } else {
            site.style.color    = "yellow";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "Rock beats Scissors!";
            return 1;
        }
    } else if (playerSelection === "paper") {
        user.style.color = "cyan";
        if (computerSelection === "rock") {
            site.style.color    = "magenta";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "Paper beats Rock!";
            return 1;
        } else if (computerSelection === "paper") {
            site.style.color    = "cyan";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "It's a draw!";
            return 0;
        } else {
            site.style.color    = "yellow";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "Paper loses to Scissors!";
            return -1;
        }
    } else {
        user.style.color = "yellow";
        if (computerSelection === "rock") {
            site.style.color    = "magenta";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "Scissors lose to Rock!";
            return -1;
        } else if (computerSelection === "paper") {
            site.style.color    = "cyan";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "Scissors beat Paper!";
            return 1;
        } else {
            site.style.color    = "yellow";
            user.textContent    = `${playerSelection.toUpperCase()}`;
            site.textContent    = `${computerSelection.toUpperCase()}`;
            outcome.textContent = "It's a draw!";
            return 0;
        }
    }
}

function play(choice) {
    // Play a number of rounds and keep player's score
    if (rounds < totalRounds) {
        let points = playRound(choice, getComputerChoice());
        wins += points;
        score.textContent = `Score: ${wins}`;
        score.style.color = 'rgb(204, 204, 204)';
        divR.appendChild(score);

        // Only count as a round if it's not a draw
        if (points != 0) {
            rounds++;
        }
    }
    
    match.textContent = "Rounds left: " + (totalRounds - rounds).toString();
    match.style.color = 'rgb(204, 204, 204)';
    divR.appendChild(match);
    
    if (rounds === totalRounds) {
        if (wins > 0) {
            results.textContent = "YOU WIN!";
            results.style.color = "green";
        } else if (wins < 0) {
            results.textContent = "YOU LOSE!";
            results.style.color = "red";
        } else {
            results.textContent = "IT'S A DRAW!";
        }
        button.textContent = "Replay";
        button.addEventListener('click', () => document.location.href = './index.html');
        divR.appendChild(results);
        divR.appendChild(button);
    }
}

rules.textContent = "Play " + totalRounds + " rounds against the machine... choose your weapon!";
body.insertBefore(rules, images);

btnR.addEventListener('click', () => play("rock"));
btnP.addEventListener('click', () => play("paper"));
btnS.addEventListener('click', () => play("scissors"));