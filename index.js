const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
	const random = Math.floor(Math.random() * 3);

	return choices[random];
}

function getPlayerChoice() {
	let player = prompt("Rock, Paper, or Scissors?");

	return player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
}

function playRound(playerChoice, computerChoice) {
	let point = 0;

	if (playerChoice == choices[1] && computerChoice == choices[0]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${choices[1]} beats ${choices[0]}\n--You win!--`);
		point++;
	} else if (playerChoice == choices[0] && computerChoice == choices[2]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${choices[0]} beats ${choices[2]}\n--You win!--`);
		point++;
	} else if (playerChoice == choices[2] && computerChoice == choices[1]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${choices[2]} beat ${choices[1]}\n--You win!--`);
		point++;
	} else if (playerChoice == choices[0] && computerChoice == choices[1]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${choices[1]} beats ${choices[0]}\n--You lose!--`);
	} else if (playerChoice == choices[1] && computerChoice == choices[2]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${choices[2]} beat ${choices[1]}\n--You lose!--`);
	} else if (playerChoice == choices[2] && computerChoice == choices[0]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${choices[0]} beats ${choices[2]}\n--You lose!--`);
	} else {
		for (let i = 0; i < choices.length; i++) {
			if (playerChoice == choices[i]) {
				console.log(`${playerChoice} vs ${computerChoice}\n--It's a tie!--`);
			}
		}
	}

	return point;
}

function playGame() {
	let score = 0;

	for (let i = 0; i < 5; i++) {
		const player = getPlayerChoice();
		const computer = getComputerChoice();
		score += playRound(player, computer);
	}

	console.log("Score: ", score);
}

playGame();
