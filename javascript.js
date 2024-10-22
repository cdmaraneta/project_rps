const LABELS = ["", "Rock", "Paper", "Scissors"];
const buttonRock = document.querySelector("#buttonrock");
const buttonPaper = document.querySelector("#button-paper");
const buttonScissors = document.querySelector("#button-scissors");
const labelResults = document.querySelector(".results");
const labelScore = document.querySelector(".score");

// Refactored button event handling using a single function
const buttons = { 
    1: buttonRock, 
    2: buttonPaper, 
    3: buttonScissors 
};

// Attach event listeners in a loop for DRY (Don't Repeat Yourself) principle
Object.keys(buttons).forEach(selection => {
    buttons[selection].onclick = () => playRound(parseInt(selection));
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection) {
    const computerSelection = getComputerChoice();
    const result = determineResult(humanSelection, computerSelection);

    labelResults.textContent = result.message;
    updateScore(result.winner);

    return result.winner;
}

function determineResult(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return {
            winner: 'tie',
            message: `It's a tie! Both chose ${LABELS[humanSelection]}`
        };
    }

    const winner = determineWinner(humanSelection, computerSelection);
    const message = winner === 'human'
        ? `You win! Your ${LABELS[humanSelection]} beats Computer's ${LABELS[computerSelection]}`
        : `You lose! Computer's ${LABELS[computerSelection]} beats your ${LABELS[humanSelection]}`;

    return { winner, message };
}

function determineWinner(human, computer) {
    if ((human === 1 && computer === 3) || 
        (human === 2 && computer === 1) || 
        (human === 3 && computer === 2)) {
        return 'human';
    }
    return 'computer';
}

// Separate score update logic to simplify playRound function
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        // In case of a tie, both scores increase
        humanScore++;
        computerScore++;
    }

    labelScore.textContent = `Score: Human - ${humanScore} | Computer - ${computerScore}`;
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
}
