//Generate Computer Guess
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else if (randomNumber == 3) {
        return "scissors";
}   }

//Plays a round of the game and returns the result
function playRound() {
    computerSelection = getComputerChoice();
    let playerSelection = prompt("Which do you choose. Rock, Paper, or Scissors?").toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper covers Rock.";
        } else if (computerSelection === "scissors") {
            return "You win! Rock smashes Scissors.";
        } else if (computerSelection === "rock") {
            return "You tie! You both picked Rock."
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper covers Rock.";
        } else if (computerSelection === "paper") {
            return "You tie! You both picked Paper.";
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors cuts Paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock crushes Scissors.";
        } else if (computerSelection === "paper") {
            return "You win! Scissors cuts paper.";
        } else if (computerSelection === "scissors") {
            return "You tie! You both picked Scissors.";
}   }  }

//Plays 5 rounds of playRound and keeps score. Then outputs the score in the console log
function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === "You win! Scissors cuts paper."
        || result === "You win! Paper covers Rock."
        || result === "You win! Rock smashes Scissors.") {
            console.log(result);
            playerWins += 1;
        } else if (result === "You lose! Rock crushes Scissors."
        || result === "You lose! Scissors cuts Paper." 
        || result === "You lose! Paper covers Rock.") {
            console.log(result);
            computerWins += 1;
        } else if (result === "You tie! You both picked Scissors."
        || result === "You tie! You both picked Paper."
        || result === "You tie! You both picked Rock.") {
            console.log(result);
            tie += 1;
        }
        
    }
    if (playerWins > computerWins) {
        console.log(`You won! You won ${playerWins} rounds. The computer won ${computerWins} rounds and yall tied ${tie} rounds.`);
    } else if (playerWins < computerWins) {
        console.log(`You lost! You won ${playerWins} rounds. The computer won ${computerWins} rounds and yall tied ${tie} rounds.`)
    } else if (playerWins === computerWins) {
        console.log(`You tied! You won ${playerWins} rounds. The computer won ${computerWins} rounds and yall tied ${tie} rounds.`)
    }
}   

