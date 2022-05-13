let playerScore = 0;
let computerScore = 0;
let totalScore = 0;

function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    const computerSelection = moves[Math.floor(Math.random() * moves.length)];
    return computerSelection;
  };

let computerSelection = computerPlay();
console.log(computerSelection);
  
let playerWinsRound = `Player wins the round!`;
let computerWinsRound = `Computer wins the round!`;
let draw = `It's a draw!`;
let playerWinsGame = `The player has won the game!`;
let computerWinsGame = `The computer has won the game!`;

document.getElementById('rock').addEventListener('click', function() {
    let a, b;
    a = document.getElementById('text');
    b = document.getElementById('rock').value = 'rock';
    for (let i = 0; i < 1; i++) {
        if (b == 'rock' && computerPlay() == 'paper') {
            return console.log(computerWinsRound);
        } else if (b == 'rock' && computerPlay() == 'scissors') {
            return console.log(playerWinsRound);
        } else if (b =='rock' && computerPlay() == 'rock') {
            return console.log(draw);
        } 
    }
})

document.getElementById('paper').addEventListener('click', function() {
    let a, b;
    a = document.getElementById('paper');
    b = document.getElementById('paper').value = 'paper';
    for (let i = 0; i < 1; i++) {
        if (b == 'paper' && computerPlay() == 'rock') {
            return console.log(playerWinsRound);
        } else if (b == 'paper' && computerPlay() == 'scissors') {
            return console.log(computerWinsRound);
        } else if (b == 'paper' && computerPlay() == 'paper') {
            return console.log(draw);
        } 
    }
})

document.getElementById('scissors').addEventListener('click', function () {
    let a, b; 
    a = document.getElementById('scissors');
    b = document.getElementById('scissors').value = 'scissors';
    for (let i = 0; i < 1; i++) {
        if (b == 'scissors' && computerPlay() == 'paper') {
            return console.log(playerWinsRound);
        } else if (b == 'scissors' && computerPlay() == 'rock') {
            return console.log(computerWinsRound);
        } else if (b == 'scissors' && computerPlay() == 'scissors') {
            return console.log(draw);
        }
    }
})

const resultsContainer = document.querySelector('#resultsContainer');

const results = document.createElement('div');
results.classList.add('content');
results.textContent = "Hello World";
results.style.cssText = "color: magenta; background-color: aquamarine;";

resultsContainer.appendChild(results);





/* function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return draw;
        } else if (playerSelection == 'rock' && computerSelection == "paper") {
           return computerWinsRound;
        } else if (playerSelection == 'rock' && computerSelection == "scissors") {
           return playerWinsRound;
        } else if (playerSelection == 'paper' && computerSelection == "rock") {
           return playerWinsRound;
        } else if (playerSelection == 'paper' && computerSelection == "scissors") {
           return computerWinsRound;
        } else if (playerSelection == 'scissors' && computerSelection == "paper") {
          return playerWinsRound;
        } else if (playerSelection == 'scissors' && computerSelection == "rock") {
           return computerWinsRound;
        } else {
            return `Please enter a valid answer.`;
        }
} */

   /* for (let i = 0; i < 5; i++) {
      //  let playerSelection = window.prompt('Rock, paper, scissors?', '');
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

      /*  if (totalScore === 5 && (playerScore > computerScore)) {
            console.log(playerWinsGame);
        } else if (totalScore === 5 && (computerScore > playerScore)) {
            console.log(computerWinsGame);
        } else if (totalScore === 5 && (computerScore === playerScore)) {
            console.log(draw);
        } */

        
        
  //   } 
 

