const gameCells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restartBtn");
const alertBox = document.querySelector(".alertBox");

// Variables
let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;

//Function to start game
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
  alertBox.style.display = "none"; // Hide alert box at the start
};

// Function to change Player Turn
const changePlayerTurn = () => {
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
  // Optionally update some UI element to indicate whose turn it is
};

//Function to check Winner
const checkWinner = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < winningConditions.length; index++) {
    const [pos1, pos2, pos3] = winningConditions[index];
    if (
      gameCells[pos1].textContent !== "" &&
      gameCells[pos1].textContent === gameCells[pos2].textContent &&
      gameCells[pos2].textContent === gameCells[pos3].textContent
    ) {
      return true;
    }
  }
  return false;
};

//Function to check tie condition
const checkTie = () => {
  return (
    [...gameCells].every((cell) => cell.textContent !== "") && !checkWinner()
  );
};

//Function Handle Click
const handleClick = (e) => {
  e.target.textContent = playerTurn;
  if (checkWinner()) {
    blockBoard();
    showAlert(`${playerTurn} is the Winner!`);
  } else if (checkTie()) {
    blockBoard();
    showAlert(`It's a Tie!`);
  } else {
    changePlayerTurn();
    showAlert(`Now Player ${playerTurn}`);
  }
};

//Function to Block The gameBoard.
const blockBoard = () => {
  gameCells.forEach((cell) => {
    cell.removeEventListener("click", handleClick);
    cell.classList.add("disable");
  });
};

// Function to restart game.
const restartGame = () => {
  gameCells.forEach((cell) => {
    cell.textContent = "";
    // cell.addEventListener("click", handleClick);
    cell.classList.remove('disable');

  });
  startGame()
  playerTurn = currentPlayer; 
  alertBox.style.display = "none";
};

// Function to show alert.
const showAlert = (msg) => {
  alertBox.style.display = "block";
  alertBox.textContent = msg;
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
};

// Adding Event Listener to restart Game
restartBtn.addEventListener("click", restartGame);

//Calling Start Game Function
startGame();
