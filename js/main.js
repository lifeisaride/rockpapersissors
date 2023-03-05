const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSORS';


/**
 * Get random computer choice
 * @return {string} [computer selection]
 */
function getComputerChoice() {
	const choices = [ROCK, PAPER, SCISSOR];
	return choices[Math.floor(Math.random() * choices.length)];
}


function playSingleRound(playerSelection, computerSelection) {

	if (!playerSelection) {
		return 0;
	}

	// Normalize string
	playerSelection = playerSelection.toUpperCase();

	if(playerSelection !== ROCK && playerSelection !== SCISSOR && playerSelection !== PAPER) {
		return 0;
	}


	// Tie
	if (playerSelection === computerSelection) {
		return 1;
	}

	// Player loses
	if ((playerSelection == ROCK && computerSelection == PAPER) ||
		(playerSelection == SCISSOR && computerSelection == ROCK) ||
		(playerSelection == PAPER && computerSelection == SCISSOR)) {
		return 2;
	}

	// Player wins
	if ((computerSelection == ROCK && playerSelection == PAPER) ||
		(computerSelection == SCISSOR && playerSelection == ROCK) ||
		(computerSelection == PAPER && playerSelection == SCISSOR)) {
		return 3;
	}
}

function game() {

	let computerPoints = 0;
	let playerPoints = 0;

	for (let i = 0; i < 5; i++) {

		// Get user input
		let playerSelection = prompt('Pleas enter rock, paper or scissor');

		// Get computer selection
		let computerSelection = getComputerChoice();

		// Play single round
		let result = playSingleRound(playerSelection, computerSelection);

		if(result === 0) {
			console.log('No valid input, please try again');
		} else if(result === 1) {
			console.log(`It's a tie`);
		} else if(result === 2) {
			computerPoints = computerPoints + 1;
			console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
		} else if(result === 3) {
			playerPoints = playerPoints + 1;
			console.log(`You win! ${playerSelection} beats ${computerSelection}`);
		}
	}

	if (playerPoints > computerPoints) {
		console.log('You won the game!');
	} else if( playerPoints === computerPoints) {
		console.log('It\'s a tie, you both win!');
	} else if (playerPoints < computerPoints) {
		console.log('You lost the game!');
	}
}

game();


