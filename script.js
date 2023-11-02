// Math functions
const add = function (a, b) {
    return Number(a) + Number(b);
};

const subtract = function (a, b) {
    return Number(a) - Number(b);
};

const multiply = function (a, b) {
    return Number(a) * Number(b);
};

const divide = function (a, b) {
    if (Number(b) != 0) {
        return Number(a) / Number(b);
    } else {
        display.textContent = "ERROR"
    }
};

function operate(firstNum, secondNum, operators) {
    if (operators == "+") {
        return add(firstNum, secondNum);
    } else if (operators == "-") {
        return subtract(firstNum, secondNum);
    } else if (operators == "*") {
        return multiply(firstNum, secondNum);
    } else if (operators == "/") {
        return divide(firstNum, secondNum);
    };
}

//Display Changes
let display = document.querySelector('#display')
let history = document.querySelector('#history')
let operators = [];
let firstNum = [];
let result = '';
let i = 0;

let funcBtns = document.querySelectorAll('.funcBtn')
funcBtns.forEach((funcBtn) => {
    funcBtn.addEventListener('click', () => {
        if (display.textContent == "|") {
            display.textContent;
        } else if (display.textContent == "ERROR") {
            clearScreen();
        } else if (((display.textContent).length > 0) && (result == "")) {
            updateHistory(funcBtn.textContent);
        } else if (result != '') {
            operators.push(funcBtn.textContent);
            history.textContent = result + funcBtn.textContent;
            display.textContent = '';
        }
    });
});

let numBtns = document.querySelectorAll('.numBtn')
numBtns.forEach((numBtn) => {
    let numSelect = numBtn.textContent;
    numBtn.addEventListener('click', () => {
        if (display.textContent == "ERROR") {
            clearScreen();
            display.textContent = numSelect;
        } else if (display.textContent == "|") {
            if (numSelect == ".") {
                if ((display.textContent).includes(".")) {
                    display.textContent;
                } else {
                    display.textContent = "0.";
                }
            } else {
                display.textContent = '';
                display.textContent += numSelect;
            } 
        } else if ((display.textContent).length <= 20) {
            display.textContent += numSelect;
        }
    });
});

/* document.addEventListener('keydown', (event) => {
    if (event.key == "=") {
        getResult()
    } else if ((event.key == "+") || (event.key == "-") || (event.key == "*") || (event.key == "/")) {
        funcSelect = event.key;
        if (display.textContent == "|") {
            display.textContent;
        } else if (display.textContent == "ERROR") {
            clearScreen();
        } else if ((display.textContent).length > 0) {
            updateHistory(event.key);
        }
    } else if (Number(event.key) || (event.key == ".")) {
        numSelect = event.key;
        if (display.textContent == "|") {
            display.textContent = '';
            display.textContent += numSelect;
        } else if (display.textContent == "ERROR") {
            clearScreen();
            display.textContent = numSelect;
        } else if ((numSelect == ".") && ((display.textContent).includes("."))) {
            display.textContent;
        } else {
            if ((display.textContent).length <= 20) {
                display.textContent += numSelect;
            }
        }
    };
}); */

function updateHistory(x) {
    operators.push(x);
    firstNum.push(display.textContent);
    history.textContent += display.textContent;
    history.textContent += x;
    display.textContent = '';
}

function clearScreen() {
    display.textContent = '|';
    history.textContent = '';
    operators = [];
    firstNum = [];
    result = '';
    resultTwo = '';
    i = 0;
}

let clrBtn = document.querySelector('#numAC')
numAC.addEventListener('click', () => {
    clearScreen();
})

let equals = document.querySelector('#equBtn')
equBtn.addEventListener('click', () => {
    getResult();
});



function getResult() {
    if (result == '') {
        if ((display.textContent != "") && (display.textContent != "|") && (display.textContent != "ERROR")) {
            firstNum.push(display.textContent);
            history.textContent += display.textContent;
            
            result = operate(firstNum[i], firstNum[i + 1], operators[i]);
            i++;

            console.log(firstNum);
            console.log(operators);
            console.log(result);

            displayResult();
        } 
    } else if (result) {
        if ((display.textContent == result) && (operators.length < firstNum.length)) {
            i--
            resultThree = operate(result, firstNum[i+1], operators[i])
            result = resultThree;
            i++;
            
            console.log(firstNum);
            console.log(operators);
            console.log(result);
            
            displayResult();
        } else if ((display.textContent != "") && (display.textContent != "|") && (display.textContent != "ERROR")) {
            firstNum.push(display.textContent);
            history.textContent += display.textContent;
            
            resultTwo = operate(result, firstNum[i + 1], operators[i]);
            result = resultTwo;
            i++;
            
            console.log(firstNum);
            console.log(operators);
            console.log(result);
            
            displayResult();
        }
    } else if (display.textContent == "ERROR") {
        clearScreen();
    }
};

function displayResult() {
    if ((String(result) == "undefined") || (operators.length > firstNum.length)) {
        display.textContent = "ERROR";
    } else {
        display.textContent = result;
    }
}