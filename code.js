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

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = getComputerChoice().toLowerCase();

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
function restartGame() {
  restart.style.visibility = "hidden";
  playerScores = 0;
  computerScores = 0;
  noOfMatches = 0;
  result.textContent = "";
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  playerScoreHeading.textContent = "Your Scores:" + playerScores;
  computerScoreHeading.textContent = "Computer Scores:" + computerScores;
}
function btnClicked(e) {
  noOfMatches++;
  let playerSelection = e.target.textContent;
  result.textContent = playRound(playerSelection);
  playerScoreHeading.textContent = "Your Scores:" + playerScores;
  computerScoreHeading.textContent = "Computer Scores:" + computerScores;
  if (noOfMatches == 5) {
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;

    if (computerScores == playerScores) {
      result.textContent = "Draw!";
    } else {
      result.textContent =
        playerScores > computerScores ? "You won!" : "You Lost!";
      restart.style.visibility = "visible";
    }

    playerScores = 0;
    computerScores = 0;
  }
}

var playerScores = 0;
var computerScores = 0;
var noOfMatches = 0;

let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let restart = document.getElementById("restart");
let result = document.querySelector(".result");
let playerScoreHeading = document.querySelector(".playerScores");
let computerScoreHeading = document.querySelector(".computerScores");

restart.addEventListener("click", restartGame);

button1.addEventListener("click", btnClicked);
button2.addEventListener("click", btnClicked);
button3.addEventListener("click", btnClicked);
