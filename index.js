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
    playRound('rock');
}) 


    document.getElementById('paper').addEventListener('click', function() {
    let a, b;
    a = document.getElementById('paper');
    b = document.getElementById('paper').value = 'paper';
    playRound('paper');
})


    document.getElementById('scissors').addEventListener('click', function () {
    let a, b; 
    a = document.getElementById('scissors');
    b = document.getElementById('scissors').value = 'scissors';
    playRound('scissors');
})

const playerScoreDiv = document.querySelector('#playerScoreDiv');
     const playerContent = document.createElement('div');
     playerContent.classList.add('playerContent');
     
     

const computerScoreDiv = document.querySelector('#computerScoreDiv');
     const computerContent = document.createElement('div');
     computerContent.classList.add('computerContent');
     
     


function playRound(playerSelection) {
    let computerSelection = computerPlay();
   
    playerContent.textContent = `Player's score: ${playerScore}`;
    playerScoreDiv.appendChild(playerContent);

    computerContent.textContent = `Computer's score: ${computerScore}`;
    computerScoreDiv.appendChild(computerContent);


    if (playerScore === 5) {
        gameWon();
    } else if (computerScore === 5) {
        gameWon();
    } else if (playerSelection == 'rock' && computerSelection == "paper") {
        totalScore++;
        computerScore++;
        console.log(`Round ${totalScore}: ${computerWinsRound}`);
        if ((playerScore === 5) || (computerScore === 5)) gameWon();
     } else if (playerSelection == 'rock' && computerSelection == "scissors") {
        totalScore++;
        playerScore++;
        console.log(`Round ${totalScore}: ${playerWinsRound}`);
        if ((playerScore === 5) || (computerScore === 5)) gameWon();
     } else if (playerSelection == 'paper' && computerSelection == "rock") {
        totalScore++;
        console.log(`Round ${totalScore}: ${playerWinsRound}`);
        playerScore++;
        if ((playerScore === 5) || (computerScore === 5)) gameWon();
     } else if (playerSelection == 'paper' && computerSelection == "scissors") {
        totalScore++;
        console.log(`Round ${totalScore}: ${computerWinsRound}`);
        computerScore++;
        if ((playerScore === 5) || (computerScore === 5)) gameWon();
     } else if (playerSelection == 'scissors' && computerSelection == "paper") {
        totalScore++;
       console.log(`Round ${totalScore}: ${playerWinsRound}`);
       playerScore++;
       if ((playerScore === 5) || (computerScore === 5)) gameWon();
     } else if (playerSelection == 'scissors' && computerSelection == "rock") {
        totalScore++;
        console.log(`Round ${totalScore}: ${computerWinsRound}`);
        computerScore++;
        if ((playerScore === 5) || (computerScore === 5)) gameWon();
     } else if (playerSelection === computerSelection) {
        totalScore++;
        console.log(`Round ${totalScore}: ${draw}`);
        if ((playerScore === 5) || (computerScore === 5)) gameWon();
        
     } 
     
     playerContent.textContent = `Player's score: ${playerScore}`;
     playerScoreDiv.appendChild(playerContent);

     computerContent.textContent = `Computer's score: ${computerScore}`;
     computerScoreDiv.appendChild(computerContent);
}

function gameWon() {
    if (playerScore === 5) {
        console.log(playerWinsGame);
        endGame();
    } else if (computerScore === 5) {
        console.log(computerWinsGame);
        endGame();
    }
    
}  

function endGame() {
    if ((playerScore === 5) || (computerScore === 5)) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}


let baseLogFunction = console.log;
console.log = function(){
    baseLogFunction.apply(console, arguments);

    let args = Array.prototype.slice.call(arguments);
    for(let i = 0; i < args.length; i++) {
        let node = createLogNode(args[i]);
        document.querySelector("#results").appendChild(node);
    }
}

function createLogNode(message){
    let node = document.createElement("div");
    let textNode = document.createTextNode(message);
    node.appendChild(textNode);
    return node;
}

