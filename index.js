const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

let playerChoice = null;

function getPlayerChoice(e) {
    let playerChoice = (e.target.textContent).toLowerCase();
    round(computerPlay(), playerChoice)
}

let playerScore = 0;
let computerScore = 0;

function playerWin() {
    let playerScorecard = document.querySelector('#player-scorecard');
    let announce = document.querySelector('.rules')
    playerScorecard.classList.add('winner');
    announce.textContent = 'You are the winner!';
}

function computerWin() {
    let computerScorecard = document.querySelector('#computer-scorecard');
    let announce = document.querySelector('.rules')
    computerScorecard.classList.add('winner');
    announce.textContent = 'Unlucky! Try again';
}

function draw() {
    let computerScorecard = document.querySelector('#computer-scorecard');
    let playerScorecard = document.querySelector('#player-scorecard');
    let announce = document.querySelector('.rules')
    playerScorecard.classList.add('draw');
    computerScorecard.classList.add('draw');
    announce.textContent = 'Match drawn!';
}

function reloadPage() {
    window.location.reload();
}

function round(computerSelection, playerSelection) {
    let updatedComputerScore = document.querySelector('#computer-score');
    let updatedPlayerScore = document.querySelector('#player-score');
    if (playerScore == 5 || computerScore == 5) {
        return
    } else {
        if (computerSelection == playerSelection) {
            playerScore++;
            computerScore++;
            updatedComputerScore.textContent = computerScore;
            updatedPlayerScore.textContent = playerScore;
        } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "rock")) {
            computerScore++;
            updatedComputerScore.textContent = computerScore;
        } else if ((computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "rock" && playerSelection == "paper")) {
            playerScore++;
            updatedPlayerScore.textContent = playerScore;
        }
        document.querySelector('#computer-choice').textContent = computerSelection;
        document.querySelector('#player-choice').textContent = playerSelection;
        if (playerScore == 5 && computerScore == 5) {
            draw();
            return
        } else if (playerScore == 5) {
            playerWin();
            return
        } else if (computerScore == 5) {
            computerWin();
            return
        }
}};

const buttons = document.querySelectorAll('.play-btn');
buttons.forEach(button => {button.addEventListener('click', getPlayerChoice)});

const reload = document.querySelector('#reload');
reload.onclick = reloadPage;
