
const statusDiv = document.getElementById('status');
const spaces = document.getElementsByClassName('space');

let board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleSpaceClick(e){
    index = parseInt(e.target.getAttribute("data-index"));
    e.target.innerHTML = currentPlayer;
    this.removeEventListener('click', handleSpaceClick);
    board[index] = currentPlayer;
    validate();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function newGame(){
    for(i=0; i<spaces.length; i++){
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        statusDiv.innerHTML = '';
        spaces[i].innerHTML = '';
        spaces[i].addEventListener('click', handleSpaceClick);
    }
}

newGame();
document.getElementById('restart').addEventListener('click', newGame);

function validate(){
    for(i=0; i<winConditions.length; i++){
        var a = board[winConditions[i][0]];
        var b = board[winConditions[i][1]];
        var c = board[winConditions[i][2]];
        
        if(a === ''||b === ''||c === ''){
            continue;
        }else if(a === b && b === c){
            handleWin();
            break;
        }
    }
}

function handleWin(){
    statusDiv.innerHTML = currentPlayer + ' wins!';
    for(i=0; i<spaces.length; i++){
        spaces[i].removeEventListener('click', handleSpaceClick);
    }
}