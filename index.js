const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
	const random = Math.floor(Math.random() * 3);

	return choices[random];
};

const getPlayerChoice = () => {
	let player = prompt("Rock, Paper, or Scissors?");

	return player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
};

const playRound = (player, computer) => {
	let point = 0;

	if (player == choices[1] && computer == choices[0]) {
		console.log(`${player} vs ${computer}\n${choices[1]} beats ${choices[0]}\nYou win!`);
		point++;
	} else if (player == choices[0] && computer == choices[2]) {
		console.log(`${player} vs ${computer}\n${choices[0]} beats ${choices[2]}\nYou win!`);
		point++;
	} else if (player == choices[2] && computer == choices[1]) {
		console.log(`${player} vs ${computer}\n${choices[2]} beats ${choices[1]}\nYou win!`);
		point++;
	} else if (player == choices[0] && computer == choices[1]) {
		console.log(`${player} vs ${computer}\n${choices[1]} beats ${choices[0]}\nYou lose!`);
	} else if (player == choices[1] && computer == choices[2]) {
		console.log(`${player} vs ${computer}\n${choices[2]} beats ${choices[1]}\nYou lose!`);
	} else if (player == choices[2] && computer == choices[0]) {
		console.log(`${player} vs ${computer}\n${choices[0]} beats ${choices[2]}\nYou lose!`);
	} else {
		for (let i = 0; i < choices.length; i++) {
			if (player == choices[i]) {
				console.log(`${player} vs ${computer}\nIt's a tie!`);
			}
		}
	}

	return point;
};
