const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function changeButtonType(clicked_id, row){
    document.getElementById(clicked_id).innerHTML = "O"
    checkIf3inRow(clicked_id, row)
}

function checkIf3inRow(buttonId, row){
    
    let currentNumber = (Number(buttonId)).toString()
    if(checkWin(currentNumber)){

    }
    
    // if(row == 1){
    //     
    //     if(nextNumber > 3){

    //     }
    //     let backNumber = (Number(buttonId) - 1).toString()
    //     if(document.getElementById(nextNumber).innerHTML == "O" && document.getElementById(backNumber).innerHTML == "O"){
    //         alert("Win");
    //     }
    // }
  
}

function checkWin(currentNumber){
    
}

//Buttons
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");

const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");

const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");

//button click functions
btn1.addEventListener('click', function(){changeButtonType(this.id, 1)});
btn2.addEventListener('click', function(){changeButtonType(this.id, 1)});
btn3.addEventListener('click', function(){changeButtonType(this.id, 1)});

btn4.addEventListener('click', function(){changeButtonType(this.id, 2)});
btn5.addEventListener('click', function(){changeButtonType(this.id, 2)});
btn6.addEventListener('click', function(){changeButtonType(this.id, 2)});

btn7.addEventListener('click', function(){changeButtonType(this.id, 3)});
btn8.addEventListener('click', function(){changeButtonType(this.id, 3)});
btn9.addEventListener('click', function(){changeButtonType(this.id, 3)});