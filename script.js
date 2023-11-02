// Math functions
const add = function(a , b) {
    return Number(a) + Number(b);
};

const subtract = function(a , b) {
    return Number(a) - Number(b);
};

const multiply = function (a , b) {
    return Number(a) * Number(b);
};

const divide = function (a , b) {
    if (Number(b) != 0) {
        return Number(a) / Number(b);
    } else {
        display.textContent = "ERROR"
    }
};

operate = function(firstNum, secondNum, operator) {
    if (operator == "+") {
       return add(firstNum, secondNum);
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else if (operator == "/") {
        return divide(firstNum, secondNum);
    };
}

//Display Changes
let display = document.querySelector('#display')
let history = document.querySelector('#history')
const operator = [];
const firstNum = [];

let funcBtns = document.querySelectorAll('.funcBtn')
funcBtns.forEach((funcBtn) => {
    funcBtn.addEventListener('click', () => {
        if (display.textContent == "|") {
            display.textContent;
        } else if (display.textContent == "ERROR") {
            clearScreen();
        } else if ((display.textContent).length > 0) {
            updateHistory(funcBtn.textContent);
        }
        console.log(firstNum);
        console.log(operator);
    });
});

let numBtns = document.querySelectorAll('.numBtn')
numBtns.forEach((numBtn) => {
    let numSelect = numBtn.textContent;
    numBtn.addEventListener('click', () => {
        if (display.textContent == "|") {
            display.textContent = '';
            display.textContent += numSelect;
        } else if (display.textContent == "ERROR") {
            clearScreen();
            display.textContent = numSelect;
        } else if ((numSelect == ".") && ((display.textContent).includes("."))) {
            display.textContent;
        } else if ((display.textContent).length <= 20) {
                display.textContent += numSelect;
        }
    });
});

document.addEventListener('keydown', (event) => {
    if ((event.key == "+") || (event.key == "-") || (event.key == "*") || (event.key == "/")) {
        funcSelect = event.key; 
        if (display.textContent == "|") {
            display.textContent;
        } else if (display.textContent == "ERROR") {
            clearScreen();
        } else if ((display.textContent).length > 0) {
            updateHistory(event.key);
        }
    } else if (Number(event.key) || (event.key = ".")) {
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
});

function updateHistory(x) {
    operator.push(x);
    firstNum.push(display.textContent);
    history.textContent += display.textContent;
    history.textContent += x;
    display.textContent = '';
}

function clearScreen() {
    display.textContent = '|';
    history.textContent = '';
    operator = [];
    firstNum = [];
}

let clrBtn = document.querySelector('#numAC')
numAC.addEventListener('click', () => {
    clearScreen();
})

let equals = document.querySelector('#equBtn')
equBtn.addEventListener('click', () => {
    if ((display.textContent != "") && (display.textContent != "|") && (display.textContent != "ERROR")) {
        firstNum.push(display.textContent);
        history.textContent += display.textContent;
        console.log(firstNum);
        for (i = 0; i < firstNum.length; i++) {
            let secondNum = firstNum[i+1];
            let result = operate(firstNum, secondNum, operator);
            if (String(result) === "NaN") {
                display.textContent = "ERROR";
            } else {
                display.textContent = result;
            }
        }
    }
});

/* maybe add a backspace button? */