const LABELS = ["", "Rock", "Paper", "Scissors"];

function playGame(roundCount) {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < roundCount; i++) {
        const result = playRound();
        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        } else {
            humanScore++;
            computerScore++;
        }
    }

    console.log(`Game over! Final Score: Human - ${humanScore} | Computer - ${computerScore}`);
}

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        console.log(`It's a tie! Both chose ${LABELS[humanSelection]}`);
        return 'tie';
    }

    const winner = determineWinner(humanSelection, computerSelection);
    
    if (winner === 'human') {
        console.log(`You win! Your ${LABELS[humanSelection]} beats Computer's ${LABELS[computerSelection]}`);
        return 'human';
    } else {
        console.log(`You lose! Computer's ${LABELS[computerSelection]} beats your ${LABELS[humanSelection]}`);
        return 'computer';
    }
}

function determineWinner(human, computer) {
    if ((human === 1 && computer === 3) ||
        (human === 2 && computer === 1) ||
        (human === 3 && computer === 2)) {
        return 'human';
    }
    return 'computer';
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
}

function getHumanChoice() {
    let choice;
    do {
        choice = Number(window.prompt("Enter your choice: [1] - Rock | [2] - Paper | [3] - Scissors"));
    } while (![1, 2, 3].includes(choice)); // Validate input

    return choice;
}

// Start the game
playGame(5); // Example: play 5 rounds
