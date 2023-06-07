const rlSync = require("readline-sync");
const INITIAL_MARKER = " ";
const PLAYER_MARKER = "X";
const COMPUTER_MARKER = "O";

function displayBoard(board) {
  console.clear();
  
  console.log("Let's play Tic Tac Toe!");
  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  
  console.log("");
  console.log("     |     |     ");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}  `);
  console.log("     |     |     ");
  console.log("-----+-----+-----");
  console.log("     |     |     ");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}  `);
  console.log("     |     |     ");
  console.log("-----+-----+-----");
  console.log("     |     |     ");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}  `);
  console.log("     |     |     ");
  console.log("");
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(array, delimiter = ", ", connector = "or") {
  switch (array.length) {
    case 0:
      return "";
    case 1:
      return array[0];
    case 2:
      return array.join(` ${connector} `);
    default:
      return `${array.slice(0, array.length - 1)
      .join(delimiter)}${delimiter}${connector} ${array[array.length - 1]}.`;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWins(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  let winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9], // row
                      [1, 4, 7], [2, 5, 8], [3, 6, 9], // column
                      [1, 5, 9], [3, 5, 7]]; // diagonal
  
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];
    
    if (board[sq1] === PLAYER_MARKER && 
        board[sq2] === PLAYER_MARKER && 
        board[sq3] === PLAYER_MARKER) {
      return "Player";
    } else if (board[sq1] === COMPUTER_MARKER && 
               board[sq2] === COMPUTER_MARKER && 
               board[sq3] === COMPUTER_MARKER) {
      return "Computer";
    }
  }
  return null;
}

function playerChoosesSquare(board) {
  let square;
  
  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = rlSync.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("That's not an empty square. Try again.");
  }
  board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let index = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[index];
  board[square] = COMPUTER_MARKER;
}

while (true) {
  let board = initializeBoard();
  
  while (true) {
    displayBoard(board);
    playerChoosesSquare(board);
    if (someoneWins(board) || boardFull(board)) break;  
    
    computerChoosesSquare(board);
    if (someoneWins(board) || boardFull(board)) break;
  }
  
  displayBoard(board);
  
  if (someoneWins(board)) {
    prompt(`${detectWinner(board)} wins!`);
  } else {
    prompt("It's a tie!");
  }
  
  prompt("Play again? y/n");
  let answer = rlSync.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Good game!");