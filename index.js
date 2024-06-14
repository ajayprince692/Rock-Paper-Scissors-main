let computerScore = 0;
let playerScore = 0;

const computerImage = document.querySelector('.computer-choice-image');
const playerImage = document.querySelector('.player-choice-image');
const computerScoreContainer = document.querySelector('.computer-score');
const playerScoreContainer = document.querySelector('.player-score');
const announcement = document.querySelector('.announcement');

function updateImages(computerChoice, playerChoice) {
    computerImage.src = `./media/${computerChoice}.png`;
    playerImage.src = `./media/${playerChoice}.png`;
}

function updateScore(computerScore, playerScore) {
    computerScoreContainer.innerText = computerScore;
    playerScoreContainer.innerText = playerScore;

    if(computerScore === 3 && playerScore < 3) {
        announcement.innerText = 'Computer Wins!';
    }
    else if(playerScore === 3 && computerScore < 3) {
        announcement.innerText = 'You Win!';
    }
}

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random()*3)]
}

function drawResult(computerChoice, playerChoice) {
    if(computerChoice === 'rock' && playerChoice === 'paper') {
        playerScore += 1;
    }
    else if(computerChoice === 'rock' && playerChoice === 'scissors') {
        computerScore += 1;
    }
    else if(computerChoice === 'paper' && playerChoice === 'scissors') {
        playerScore += 1;
    }
    else if(computerChoice === 'paper' && playerChoice === 'rock') {
        computerScore += 1;
    }
    else if(computerChoice === 'scissors' && playerChoice === 'rock') {
        playerScore += 1;
    }
    else if(computerChoice === 'scissors' && playerChoice === 'paper') {
        computerScore += 1;
    }
    else if(computerChoice === 'rock' && playerChoice === 'rock') {}
    else if (computerChoice === 'paper' && playerChoice === 'paper') {}
    else if (computerChoice === 'scissors' && playerChoice === 'scissors') {}
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScore(computerScore, playerScore);
    updateImages('null', 'null');
    announcement.innerText = '';
}

function simulateGame(playerInput) {
    if(computerScore === 3 || playerScore === 3) {
        announcement.innerText = 'Reset to play again';
    }
    else {
        const playerChoice = playerInput;
        const computerChoice = getComputerChoice();
        updateImages(computerChoice, playerChoice);
        drawResult(computerChoice, playerChoice);
        updateScore(computerScore, playerScore);
    }
}
