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
    return choice;
}

// function getHumanChoice() {
//     const input = prompt("What do you choose:Rock, Paper, or Scissors?");
//     let choice;
//     if (input) {
//         choice = input.toLowerCase();
//     } else {
//         choice = "";
//     }
//     console.log("Human played", choice);
//     return choice;
// }

const list = document.querySelector("ul");
let roundCount = 1;


function playRound(humanChoice, computerChoice) {
    const listItem = document.createElement('li');
    const listText = document.createElement('p');

    if (humanChoice === computerChoice) {
        listText.textContent = (`Round ${roundCount}/5: Draw! Human played ${humanChoice} and Computer played ${computerChoice}`);
        listText.style.color = "gray";
        list.appendChild(listItem);
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        listText.textContent = (`Round ${roundCount}/5: You win! ${humanChoice} beats ${computerChoice}.`);
        listText.style.color = "green"; 
        ++humanScore;
        list.appendChild(listItem);

    } else {
        listText.textContent = (`Round ${roundCount}/5: You lose! ${humanChoice} beats ${computerChoice}.`);
        listText.style.color = "red";
        ++computerScore;
        list.appendChild(listItem);
    }
    ++roundCount;
    listItem.appendChild(listText);
    if(roundCount > 5) {
    alert("Game over!")
    }
    return;
}




const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissors");

btnRock.addEventListener("click", function(){
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

btnPaper.addEventListener("click", function(){
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

btnScissor.addEventListener("click", function(){
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});




// function playGame(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(`\nRound ${i + 1}`);
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     } 
//     console.log("\nFinal Score:")
//     console.log("Human: ", humanScore);
//     console.log("Computer:", computerScore);
//     if (humanScore > computerScore) {
//         console.log("You win!")
//     } else if ( humanScore < computerScore) {
//         console.log("You lost!")
//     } else {
//         console.log("It's a draw.")
//     }
// }

// playGame(5);

