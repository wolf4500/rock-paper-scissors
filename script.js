function getComputerChoice() {
    randomSelection = Math.floor(Math.random() * 9);
    if (randomSelection <= 2) {
        return "Rock";
    }
    else if (randomSelection >= 3 && randomSelection <= 5) {
        return "Scissors";
    }
    else {
        return "Paper";
    }
}

function getHumanChoice() {
    let input = prompt("Enter a choice:").toLowerCase();
    while (input !== "rock" && input !== "scissors" && input != "paper") {
        input = prompt("Invalid choice. Enter 'Rock', 'Paper', or 'Scissors'.")
        .toLowerCase();
    }

    return input;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function playRound(humanChoice, computerChoice) {

    // Capitalize first letter so console outputs strings in correct format.
    // Computer is already capitalized in function getComputerChoice().
    let human = capitalizeFirstLetter(humanChoice);
    let computer = computerChoice; 

    if ((human == "Rock" && computer == "Scissors") 
    ||  (human == "Scissors" && computer == "Paper")
    ||  (human == "Paper" && computer == "Rock")) {
        ++humanScore;
        ++gameCount;
        console.log(`------ Game ${gameCount} ------
                    \nYou Win! ${human} Beats ${computer}!
                    \nYou: ${humanScore} | Computer: ${computerScore}`);
    }
    else if ((human == "Rock" && computer == "Paper") 
    ||  (human == "Scissors" && computer == "Rock")
    ||  (human == "Paper" && computer == "Scissors")) {
        ++computerScore;
        ++gameCount;
        console.log(`------ Game ${gameCount} ------
                    \nYou Lose! ${computer} Beats ${human}!
                    \nYou: ${humanScore} | Computer: ${computerScore}`);
    }
    else {
        ++gameCount;
        console.log(`-------Game ${gameCount} -------
                    \nYou Tied! ${human} and ${computer} are evenly matched!
                    \nYou: ${humanScore} | Computer: ${computerScore}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You Won the Game!")
    }
    else if (humanScore < computerScore) {
        console.log("You Lost the Game!")
    }
    else {
        console.log("Tied Game!")
    }
}

playGame();