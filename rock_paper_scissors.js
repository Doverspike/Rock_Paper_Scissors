//Generate Computer Guess
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 300) + 3;
    if (randomNumber <= 100) {
        return "Rock";
    }
    else if (randomNumber <= 200) {
        return "Paper";
    }
    else if (randomNumber >= 201) {
        return "Scissors";
    }
}

