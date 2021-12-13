//Calculator display element 
let currentDisplay = document.getElementById("screen").innerHTML;

//Select all buttons on the calculator
const numberButtons = document.getElementsByClassName('numberButtons');

// create variables to store elements to do the math
let firstNum = "";
let storedNum = "";
let operand = 0;


//Loop over buttons to add event listeners
for (let button of numberButtons){
    button.addEventListener('click', function () {        
        firstNum += button.value;
        document.getElementById("screen").innerHTML = firstNum;        
    })
}
//Boolean to prevent more than 1 . value
let onePointValue = false;
//Get . element value

const numFloat = document.getElementById('point');

//Point value for numbers .

numFloat.addEventListener('click', function () {
    if (onePointValue == false){
        firstNum += numFloat.value;
        onePointValue = true;
        return document.getElementById("screen").innerHTML = firstNum; 
    }else if (onePointValue == true) {        
        return document.getElementById("screen").innerHTML = firstNum;
    }

})


//Get clear button element

const clearAll = document.getElementById('clear');

//Add clear all event
clearAll.addEventListener("click", function() {
    console.log("Clicked Clear All");
    firstNum = "";
    storedNum = "";
    operand = "";
    onePointValue = false;
    document.getElementById("screen").innerHTML = "";

})

//Get delete button element

const numDelete = document.getElementById('delete');

//Add click event

numDelete.addEventListener("click", function(){
    console.log(typeof(firstNum));

    firstNum = firstNum.slice(0,-1);
    document.getElementById("screen").innerHTML = firstNum;

})

// Get operator elements
const operators = document.getElementsByClassName("operators");

for (let operands of operators) {
    operands.addEventListener('click', function(){
        if (storedNum === ""){ //Checks to see if stored value is empty, if it is puts the current value into it to be used later
            storedNum = parseFloat(firstNum);
            operand = operands.value;
            firstNum = "";
            onePointValue = false;
            console.log("Operand if conditional triggered.");
        } else if (typeof(storedNum) == "number") { //stored value exists, it is kept and we put new values into firstNum variable
            operand = operands.value;
            firstNum = "";     
            onePointValue = false;   
            console.log("Operand event listener else conditional.");
        }
    })
}

//create operator functions
function addition(firstNum,storedNum){
    firstNum = parseFloat(firstNum);
    return storedNum + firstNum;
}

function subtract(firstNum,storedNum){
    firstNum = parseFloat(firstNum);
    return storedNum - firstNum;
}

function multiply(firstNum,storedNum){
    firstNum = parseFloat(firstNum);
    return storedNum * firstNum;
}

function divide(firstNum,storedNum){
    firstNum = parseFloat(firstNum);
    if (firstNum == 0){
        return document.getElementById("screen").innerHTML = "You cannot divide by 0, please press C and start again."
    }
    return storedNum / firstNum;
}

//create operate function that completes equation when = is pushed

function operate(operand, firstNum, storedNum){
    if (operand === "+") {
       return addition(firstNum,storedNum);
    }else if (operand === "-"){
        return subtract(firstNum,storedNum);
    }else if (operand === "*") {
        return multiply(firstNum,storedNum);
    }else if (operand === "/") {        
        return divide(firstNum,storedNum);
    }
}

//Get equals element

const equals = document.getElementById('equals');

equals.addEventListener("click", function(){
    if (storedNum === ""){
        return document.getElementById("screen").innerHTML = "Please enter a number first, press C and start again."   
    }
    storedNum = operate(operand, firstNum, storedNum);
    storedNum = Math.fround(storedNum);
    document.getElementById("screen").innerHTML = storedNum
    firstNum = "";
    onePointValue = false;
});

//Get random button element
const random = document.getElementById('random');
const topButtons = document.getElementsByClassName('top-buttons');

//Select all buttons

const allButtons = document.querySelectorAll('button');

//Add event listener to change colour for all buttons
random.addEventListener("click", function(){
    console.log("Random clicked");
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    let newColor = `rgb(${r}, ${g}, ${b})`;
    random.style.backgroundColor = newColor;
    allButtons.forEach(function (button){
        button.style.background = newColor;
    })
    if (r + g + b < 300){
        allButtons.forEach(function(button){
            button.style.color = '#fff';
        })
    }else {
        allButtons.forEach(function(button){
            button.style.color = '#000';
        })
    }
    
    
})