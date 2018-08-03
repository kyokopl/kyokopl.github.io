// First we must create the board

// Board
var board = [];
var boardWidth = 26, boardHeight = 16;

// Snake
var snakeX;
var snakeY;
var snakeDirection;
var snakeLength;

// Board generation
function inGame() {
    var gameBoard = document.getElementById('board');

    for (var y = 0; y < boardHeight; ++y) {
        var row = [];
        for (var x = 0; x < boardWidth; ++x) {
            var cell = {};

            // Create a <div></div> and store it in the cell object
            cell.element = document.createElement('div');

            // Add it to the board
            gameBoard.appendChild(cell.element);

            // Add to list of all
            row.push(cell);
        }

        // Add this row to the board
        board.push(row);
    }

    startGame();
}

// Initial set up at start of game
function startGame() {

    // Default position for the snake in the middle of the board.
    snakeX = Math.floor(boardWidth / 2);
    snakeY = Math.floor(boardHeight / 2);
    snakeLength = 5;
    snakeDirection = 'up';

    // Set the centre of the board to contain a snake.
    board[snakeY][snakeX].snake = 1;

    gameLoop();
}

function gameLoop() {
    // Loop over entire board, updating every cell
    for (var y = 0; y < boardHeight; ++y) {
        for (var x = 0; x < boardWidth; ++x) {
            var cell = board[y][x];

            if (cell.snake) {
                cell.element.className = 'snake';
            }
            else {
                cell.element.className = '';
            }
        }
    }

     // This function calls itself, with a timeout of 1000 milliseconds
    setTimeout(gameLoop, 1000);
}

var cell = {
    snake: 0
};