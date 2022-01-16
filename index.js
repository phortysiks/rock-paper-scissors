const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

function playerPlay() {
    let rawInput = prompt("What is your choice? ");
    let playerChoice = rawInput.toLowerCase();
    if (choices.includes(playerChoice)) {
        return playerChoice
    } else {
        console.log("Invalid selection. Please try again.");
        return playerPlay();
    }
}

let playerScore = 0;
let computerScore = 0;

function round() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    if (computerSelection == playerSelection) {
        playerScore++;
        computerScore++;
        return `Tie! You both selected ${playerSelection}.`;
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "rock")) {
        computerScore++;
        return `You lost as ${computerSelection} beat your ${playerSelection}.`;
    } else if ((computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "rock" && playerSelection == "paper")) {
        playerScore++;
        return `You won as your ${playerSelection} beat ${computerSelection}.`;
    }
}

function game() {
    console.log(round());
    console.log(`Scores: Player - ${playerScore}, Computer - ${computerScore}.`);
    console.log(round());
    console.log(`Scores: Player - ${playerScore}, Computer - ${computerScore}.`);
    console.log(round());
    console.log(`Scores: Player - ${playerScore}, Computer - ${computerScore}.`);
    console.log(round());
    console.log(`Scores: Player - ${playerScore}, Computer - ${computerScore}.`);
    console.log(round());
    console.log(`Scores: Player - ${playerScore}, Computer - ${computerScore}.`);
    if (playerScore > computerScore) {
        console.log("You won! Thanks for playing.")
    } else if (computerScore > playerScore) {
        console.log("You lost, bad luck. Thanks for playing.")
    } else if (computerScore == playerScore) {
        console.log("Match tied! Thanks for playing.")
    }
}

game();
