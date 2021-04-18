// GLOBAL VARIABLE DECLARATION

const bufferScreen = document.querySelector(".screen-buffer");
const buttons = document.querySelector(".buttons")
let buffer = " 0";
let runningTotal = 0;
let operator = "";
let previousOperator = "";
let prevActiveOp;


// EASTER EGG I MADE FOR BARAKAT

const beeEasterEgg = (password) => {
    if(password == "2.7.6.4") {
        displayMessage();
        buffer = " 0"
    }
}


// Function that handles arithmetic

const handleArithmetic = (opp,equalOperator) => {
    switch (opp) {
        case "÷" :
            runningTotal /= parseFloat(buffer);
            break;
        case "×" :
            runningTotal *= parseFloat(buffer);
            break;
        case "-" :
            runningTotal -= parseFloat(buffer);
            break;
        case "+" :
            runningTotal += parseFloat(buffer);
            break;     
    }
    if(equalOperator == "=") {
            console.log("here");
            if(prevActiveOp.className.includes("active-arithmetic")) {
                prevActiveOp.classList.toggle("active-arithmetic");
            }
            prevActiveOp = undefined;
    }
    buffer = String(runningTotal);
    runningTotal = 0;
    previousOperator = operator;
    operator = "";
    updateScreen();
}


// Function to update variables

const updateVar = (buff,opp,runTotal) => {
    buffer = buff;
    if(opp != null) {
        operator = opp;
    }
    if(runTotal != null) {
        runningTotal = runTotal;
    };
}


// Function to update Screen with buffer

const updateScreen = () => {
    if(buffer === "") {
        buffer = " 0";
    }
    bufferScreen.textContent = buffer;
};

updateScreen();

// Function for when a digit button is clicked 

const digitClick = (input) => {
    if(buffer === " 0") {
        buffer = "";
    }
    buffer += input;
    updateScreen();
    beeEasterEgg(buffer);
}


// Function for when an arithmetic button is clicked 

const athOperatorClick = (input,targetElement) => {
     if(input == "=") {
        handleArithmetic(operator,"=");
    } else {
        newRunTotal = parseFloat(buffer);
        updateVar(" 0",input,newRunTotal);
        targetElement.classList.toggle("active-arithmetic");
        if(prevActiveOp != undefined) {
            prevActiveOp.classList.toggle("active-arithmetic");
        };
        prevActiveOp = targetElement;
        updateScreen();
    }
}

const clearCalculator = () => {
    buffer = " 0";
    runningTotal = 0;
    operator = "";
    previousOperator = "";
    updateScreen();
}


const specialOperation = (input) => {
    switch (input) {
        case "AC":
            clearCalculator();
            break;
        case "←" :
           buffer = buffer.substring(0, buffer.length - 1);
           break;
    }
    updateScreen();
}


// Function that checks what button was clicked, uses switch to control flow accordingly

const checkButton = () => {
    if(bufferScreen.className.includes("message-display")) {
        bufferScreen.classList.toggle('message-display');
    }
    const arithmeticButton = event.target;
    const inputValue = event.target.textContent;
    switch(event.target.className) {
        case "digit calc-button" :
            digitClick(inputValue);
            break;
        case "digit calc-button span-2" :
            digitClick(inputValue);
            break;
        case "arithmetic-operator calc-button" :
            athOperatorClick(inputValue,arithmeticButton);
            break;
        case "arithmetic-operator calc-button active-arithmetic" :
            athOperatorClick(inputValue,arithmeticButton);
            break;
        case "special-operator calc-button" :
            specialOperation(inputValue);
            break;
        case "special-operator calc-button span-2" :
            specialOperation(inputValue);
            break;
    }
}


// Event Listener for the buttons, uses event bubbling

buttons.addEventListener("click", checkButton);