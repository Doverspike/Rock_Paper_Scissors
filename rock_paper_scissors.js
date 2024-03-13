//Generate Computer Guess
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 300) + 3;
    if (randomNumber <= 100) {
        return "rock";
    }
    else if (randomNumber <= 200) {
        return "paper";
    }
    else if (randomNumber >= 201) {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
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
        }
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))