const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let playerScore = 0;
let computerScore = 0;

const computerRockButton = document.getElementById('computer__rock');
const computerPaperButton = document.getElementById('computer__paper');
const computerScissorsButton = document.getElementById('computer__scissors');
const playerRockButton = document.getElementById('human__rock');
const playerPaperButton = document.getElementById('human__paper');
const playerScissorsButton = document.getElementById('human__scissors');
const playerScoreText = document.getElementById('human__score');
const computerScoreText = document.getElementById('computer__score');
const computerReload = document.getElementById('computer__reload');
const playerReload = document.getElementById('player__reload');


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

playerReload.addEventListener('click', () => {
	playerScore = 0;
	computerScore = 0;
	document.getElementById('computer').style.display = 'block';
	document.getElementById('player__choices').style.display = 'flex';
	playerReload.style.display = 'none';
	computerReload.style.display = 'none';
	playerScoreText.textContent = `Your score: ${playerScore}`;
	computerScoreText.textContent = `Computer score: ${computerScore}`;
});

computerReload.addEventListener('click', () => {
	playerScore = 0;
	computerScore = 0;
	document.getElementById('human').style.display = 'block';
	document.getElementById('computer__choices').style.display = 'flex';
	playerReload.style.display = 'none';
	computerReload.style.display = 'none';
	playerScoreText.textContent = `Your score: ${playerScore}`;
	computerScoreText.textContent = `Computer score: ${computerScore}`;
});

function playGame(playersChoice) {

	const computerChoice = getComputerChoice();
	playSingleRound(playersChoice, computerChoice);

	if(!(computerScore === 5 || playerScore === 5)) {
		playerScoreText.textContent = `Your score: ${playerScore}`;
		computerScoreText.textContent = `Computer score: ${computerScore}`;

		setBackgroundColorPlayer(playersChoice);
		setBackgroundColorComputer(computerChoice);

		setTimeout(function() {
			unsetBackgroundColors();
		},800);
	} else {
		finishGame();
	}
}

function finishGame() {
	if(playerScore === 5) {
		playerScoreText.textContent = 'Bam! You won!';
		document.getElementById('computer').style.display = 'none';
		document.getElementById('player__choices').style.display = 'none';
		playerReload.style.display = 'block';
	} else if (computerScore === 5) {
		computerScoreText.textContent = 'Nice try. Maybe next time!';
		document.getElementById('human').style.display = 'none';
		document.getElementById('computer__choices').style.display = 'none';
		computerReload.style.display = 'block';
	}
}
