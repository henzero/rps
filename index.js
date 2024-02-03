const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
	const random = Math.floor(Math.random() * 3);

	return choices[random];
};
