const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let playerScore = 0;
let computerScore = 0;

const computerRockButton = document.querySelector('#computer__rock');
const computerPaperButton = document.querySelector('#computer__paper');
const computerScissorsButton = document.querySelector('#computer__scissors');
const playerRockButton = document.querySelector('#human__rock');
const playerPaperButton = document.querySelector('#human__paper');
const playerScissorsButton = document.querySelector('#human__scissors');
const playerScoreText = document.querySelector('#human__score');
const computerScoreText = document.querySelector('#computer__score');


function getComputerChoice() {
	const choices = [ROCK, PAPER, SCISSORS];
	return choices[Math.floor(Math.random() * choices.length)];
}

function setBackgroundColorPlayer(playersChoice) {
	if (playersChoice === ROCK) {
		playerRockButton.classList.add('pink');
	} else if (playersChoice === PAPER) {
		playerPaperButton.classList.add('purple');
	} else if (playersChoice === SCISSORS) {
		playerScissorsButton.classList.add('blue');
	}
}

function setBackgroundColorComputer(computerChoice) {
	if (computerChoice === ROCK) {
		computerRockButton.classList.add('pink');
	} else if (computerChoice === PAPER) {
		computerPaperButton.classList.add('purple');
	} else if (computerChoice === SCISSORS) {
		computerScissorsButton.classList.add('blue');
	}
}

function unsetBackgroundColors() {
	const choices = document.querySelectorAll('single-choice');
	for (choice of choices) {
		choice.classList.remove('pink');
		choice.classList.remove('purple');
		choice.classList.remove('blue');
	}
}

function playSingleRound(playerSelection, computerSelection) {

	if (!playerSelection) {
		return;
	}

	// Normalize string
	playerSelection = playerSelection.toUpperCase();

	if (playerSelection !== ROCK && playerSelection !== SCISSORS && playerSelection !== PAPER) {
		return;
	}


	// Tie
	if (playerSelection === computerSelection) {
		return;
	}

	// Player loses
	if ((playerSelection == ROCK && computerSelection == PAPER) ||
		(playerSelection == SCISSORS && computerSelection == ROCK) ||
		(playerSelection == PAPER && computerSelection == SCISSORS)) {
		computerScore++;
		return;
	}

	// Player wins
	if ((computerSelection == ROCK && playerSelection == PAPER) ||
		(computerSelection == SCISSORS && playerSelection == ROCK) ||
		(computerSelection == PAPER && playerSelection == SCISSORS)) {
		playerScore++;
		return;
	}
}

playerRockButton.addEventListener('click', () => {
	playGame(ROCK);
});

playerPaperButton.addEventListener('click', () => {
	playGame(PAPER);
});

playerScissorsButton.addEventListener('click', () => {
	playGame(SCISSORS);
});

function playGame(playersChoice) {

	const computerChoice = getComputerChoice();
	playSingleRound(playersChoice, computerChoice);
	console.log('Player', playerScore);
	console.log('Computer', computerScore);

	playerScoreText.textContent = `Your score: ${playerScore}`;
	computerScoreText.textContent = `Computer score: ${computerScore}`;

	setBackgroundColorPlayer(playersChoice);
	setBackgroundColorComputer(computerChoice);

	setTimeout(function() {
		unsetBackgroundColors();
	}, 1000);
}
