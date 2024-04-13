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
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let alerted = 0;
let winner = "";
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#reset");
rock.addEventListener('click', () => {
    playRound('rock')
});
paper.addEventListener('click', () => {
    playRound('paper')
});
scissors.addEventListener('click', () => {
    playRound('scissors')
});
reset.addEventListener('click', () => {
    resetGame()
});

const par = document.createElement('p');
const divScore = document.querySelector("#score");
par.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}. Ties ${tieScore}.`;
divScore.appendChild(par);


//Plays a round of the game and returns the result
function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    if (computerScore  === 5) {
        window.alert("You lost! Better luck next time. Reset the game to try again!");
        alerted++;
    } else if (playerScore === 5) {
        window.alert("You won! Congratulations! Reset the game to go again!");
        alerted++;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
             computerScore++;
        } else if (computerSelection === "scissors") {
             playerScore++;
        } else if (computerSelection === "rock") {
             tieScore++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
             playerScore++;
        } else if (computerSelection === "paper") {
             tieScore++;
        } else if (computerSelection === "scissors") {
             computerScore++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
             computerScore++;
        } else if (computerSelection === "paper") {
             playerScore++;
        } else if (computerSelection === "scissors") {
             tieScore++;
}   }  
    par.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}. Ties ${tieScore}.`;
    if (computerScore === 5 && alerted < 1) {
        winner = document.createElement('p')
        winner.textContent = "You Lose! Better luck next time. Hit reset to try again!"
        divScore.appendChild(winner);
        par.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}. Ties ${tieScore}.`;
    } else if (playerScore === 5 && alerted < 1) {
        winner = document.createElement('p')
        winner.textContent = "You Win! Congratulations!. Hit reset to try again!"
        divScore.appendChild(winner);
    }
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    tieScore = 0;
    par.textContent = `Player Score: ${playerScore}. Computer Score: ${computerScore}. Ties ${tieScore}.`;
    divScore.appendChild(par);
    divScore.removeChild(winner);
}