let board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];

let whosTurn = "Circle"
let turnCount = 0;

let gameOver = false;

function turnSwitch(){
    if(whosTurn == "Circle"){
        whosTurn = "Cross";
        document.getElementById("whoTurn").innerHTML = "Cross Turn";
       
    }else if (whosTurn == "Cross"){
        whosTurn = "Circle";
        document.getElementById("whoTurn").innerHTML = "Circle's Turn";

    }
    turnCount++;
}

function changeButtonType(clicked_id, row){
    boardIndex = clicked_id - (row * 3);
    console.log(board);
    if(document.getElementById(clicked_id).innerHTML != "-"){
        return;
    }

    if(whosTurn == "Circle"){
        
        document.getElementById(clicked_id).innerHTML = "O";
        board[row][boardIndex] = "O";
    }else if(whosTurn == "Cross"){
        document.getElementById(clicked_id).innerHTML = "X";
        board[row][boardIndex] = "X";
    }
    
    turnSwitch();
    checkIfWinOrLoose();
}

function checkIfWinOrLoose(){
    horizontalCheck();
    verticalCheck();
    crossCheck();
    checkIfDraw();
}

function horizontalCheck(){
    if(board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"){
        CricleWin();
        return;
    }
    if(board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"){
        CricleWin();
        return;
    }
    if(board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"){
        CricleWin();
        return;
    }

    if(board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"){
        CrossWin();
        return;
    }
    if(board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"){
        CrossWin();
        return;

    }
    if(board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"){
        CrossWin();
        return;
    }
}
function verticalCheck(){
    if(board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"){
        CricleWin();
        return;
    }
    if(board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"){
        CricleWin();
        return;
    }
    if(board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"){
        CricleWin();
        return;
    }

    if(board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X"){
        CrossWin();
        return;
    }
    if(board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X"){
        CrossWin();
        return;
    }
    if(board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X"){
        CrossWin();
        return;
    }
}
function crossCheck(){
    if(board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"){
        CricleWin();
        return;
    }
    if(board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O"){
        CricleWin();
        return;
    }

    if(board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"){
        CrossWin();
        return;
    }
    if(board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X"){
        CrossWin();
        return;
    }
}

function CricleWin(){
    gameOver = true;
    alert("Circle Win!");

}
function CrossWin(){
    gameOver = true;
    alert("Cross Win!");
}

function checkIfDraw(){
    let count = 0;
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if(board[x][y] != "-"){
                count++;
            }
        }
    }
    if(count == 9 && gameOver == fasle){ 
        alert("It's a Draw!");
    }else{
        count = 0;
    }
    console.log(count);
}

function resetGame(){
    for(let x = 0; x < 9; x++){
        id = x.toString();
        document.getElementById(id).innerHTML = "-";
    }
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            board[x][y] = "-";
        }
    }
    
    console.log(board);
    whosTurn = "Circle";
    document.getElementById("whoTurn").innerHTML = "Circle's Turn";
    turnCount = 0;
}

//Text:
const whosTurnText = document.getElementById("whoTurn");

//Buttons:
const btn1 = document.getElementById("0");
const btn2 = document.getElementById("1");
const btn3 = document.getElementById("2");

const btn4 = document.getElementById("3");
const btn5 = document.getElementById("4");
const btn6 = document.getElementById("5");

const btn7 = document.getElementById("6");
const btn8 = document.getElementById("7");
const btn9 = document.getElementById("8");

const btnReset = document.getElementById("Reset");

//button click functions
btn1.addEventListener('click', function(){changeButtonType(this.id, 0)});
btn2.addEventListener('click', function(){changeButtonType(this.id, 0)});
btn3.addEventListener('click', function(){changeButtonType(this.id, 0)});

btn4.addEventListener('click', function(){changeButtonType(this.id, 1)});
btn5.addEventListener('click', function(){changeButtonType(this.id, 1)});
btn6.addEventListener('click', function(){changeButtonType(this.id, 1)});

btn7.addEventListener('click', function(){changeButtonType(this.id, 2)});
btn8.addEventListener('click', function(){changeButtonType(this.id, 2)});
btn9.addEventListener('click', function(){changeButtonType(this.id, 2)});

btnReset.addEventListener('click', resetGame);