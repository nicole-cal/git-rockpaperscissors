function computerPlay() {
    const moves = ["rock", "paper", "scissors"];
    const computerSelection = moves[Math.floor(Math.random() * moves.length)];
    return computerSelection;
  }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() == computerSelection) {
            return `You both selected ${playerSelection.toLowerCase()}!`;
        } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "paper") {
            return `Computer wins! Paper beats Rock`;
        } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == "scissors") {
            return `Player wins! Rock beats Scissors`;
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "rock") {
            return `Player wins! Paper beats Rock`;
        } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == "scissors") {
            return `Computer wins! Scissors beats Paper`;
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "paper") {
            return `Player wins! Scissors beats Paper`;
        } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == "rock") {
            return `Computer wins! Rock beats Scissors`;
        } else {
            return `Please enter a valid answer.`
        }
    

}


const playerSelection = 'Rock';
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));





