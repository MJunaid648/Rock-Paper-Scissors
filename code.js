var playerScores = 0;
var computerScores = 0;

function getComputerChoice() {
  num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else if (num === 3) {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase();
  //PLAYER SELECTED ROCK
  if (playerSelection === "rock" && computerSelection == "paper") {
    computerScores++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    playerScores++;
    return "You won! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection == "rock") {
    return "Match tied!";
  }
  //PLAYER SELECTED PAPER
  else if (playerSelection === "paper" && computerSelection == "paper") {
    return "Match tied!";
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    computerScores++;
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    playerScores++;
    return "You won! Paper beats Rock";
  }
  //PLAYER SELECTED SCISSORS
  else if (playerSelection === "scissors" && computerSelection == "paper") {
    playerScores++;
    return "You won! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection == "scissors"
  ) {
    return "Match tied!";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    computerScores++;
    return "You lose! Rock beats Scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your selection: ");
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  console.log(
    "Your scores:" + playerScores + "   Computer scores:" + computerScores
  );
}

game();
