function computerPlay() {
    const moves = ["Rock", "Paper", "Scissors"];
    const computerMove = Math.floor(Math.random() * moves.length);
    return moves[computerMove];
    
}

// console.log(computerPlay());
