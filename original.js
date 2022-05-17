let playerScore = 0;
let computerScore = 0;
let totalScore = 0;

function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    const computerSelection = moves[Math.floor(Math.random() * moves.length)];
    return computerSelection;
  }

let playerWinsRound = `Player wins the round!`;
let computerWinsRound = `Computer wins the round!`;
let draw = `It's a draw!`;
let playerWinsGame = `The player has won the game!`;
let computerWinsGame = `The computer has won the game!`;


function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == computerSelection) {
            return draw;
        } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "paper") {
           return computerWinsRound;
        } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "scissors") {
           return playerWinsRound;
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "rock") {
           return playerWinsRound;
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "scissors") {
           return computerWinsRound;
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "paper") {
          return playerWinsRound;
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "rock") {
           return computerWinsRound;
        } else {
            return `Please enter a valid answer.`;
        }
}

    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Rock, paper, scissors?', '');
        const computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === playerWinsRound) {
            playerScore++;
            totalScore++;
        } else if (roundResult === computerWinsRound) {
            computerScore++;
            totalScore++;
        } else if (roundResult === draw) {
            totalScore++;
        }

        console.log(roundResult);
        console.log(`You chose ${playerSelection}, computer chose ${computerSelection}. Your score is ${playerScore}. Computer's score is ${computerScore}.`);

        if (totalScore === 5 && (playerScore > computerScore)) {
            console.log(playerWinsGame);
        } else if (totalScore === 5 && (computerScore > playerScore)) {
            console.log(computerWinsGame);
        } else if (totalScore === 5 && (computerScore === playerScore)) {
            console.log(draw);
        }
        
    }