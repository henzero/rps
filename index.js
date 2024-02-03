const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
	const random = Math.floor(Math.random() * 3);

	return choices[random];
};

const getPlayerChoice = () => {
	let player = prompt("Rock, Paper, or Scissors?");

	return player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
};

console.log(getPlayerChoice());
