let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const roll = Math.random();

    let choice;
    if (roll <= 0.33) {
        choice = options[0];
    } else if (roll <= 0.66) {
        choice = options[1];
    } else {
        choice = options[2];
    }
    console.log("Computer played", choice)
    return choice;
}

function getHumanChoice() {
    const input = prompt("What do you choose:Rock, Paper, or Scissors?");
    let choice;
    if (input) {
        choice = input.toLowerCase();
    } else {
        choice = "";
    }
    console.log("Human played", choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw");
        return;
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        ++humanScore;
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        ++computerScore;
    }
}

function playGame(n) {
    for (let i = 0; i < n; i++) {
        console.log(`\nRound ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } 
    console.log("\nFinal Score:")
    console.log("Human: ", humanScore);
    console.log("Computer:", computerScore);
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if ( humanScore < computerScore) {
        console.log("You lost!")
    } else {
        console.log("It's a draw.")
    }
}

playGame(5);

