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

/* set up a function that splits display.textcontent into a string and then doesnt allow another operator to be added if the final character is already an operator */

//Display Changes
let display = document.querySelector('.display')

let numBtns = document.querySelectorAll('.numBtn')
numBtns.forEach((numBtn) => {
    let numSelect = numBtn.textContent;
    numBtn.addEventListener('click', () => {
        if ((display.textContent == "|") || (display.textContent == "ERROR")) {
            display.textContent = '';
            display.textContent += numSelect;
        } else if ((numSelect == ".") && ((display.textContent).includes("."))) {
            display.textContent;
        } else {
            if ((display.textContent).length <= 20) {
                display.textContent += numSelect;
            }
        }
    });
});

let funcBtns = document.querySelectorAll('.funcBtn')
funcBtns.forEach((funcBtn) => {
    let funcSelect = funcBtn.textContent;
    funcBtn.addEventListener('click', () => {
        if ((display.textContent == "|") || (display.textContent == "ERROR")) {
            display.textContent;
        } else {
            if ((display.textContent).length <= 20) {
                display.textContent += funcSelect;
            }
        }
    });
});


document.addEventListener('keydown', (event) => {
    if ((event.key == "+") || (event.key == "-") || (event.key == "*") || (event.key == "/")) {
        keySelect = event.key; 
        if ((display.textContent == "|") || (display.textContent == "ERROR")) {
            display.textContent;
        } else {
            if ((display.textContent).length <= 20) {
                display.textContent += keySelect;
            }
        }
    } else if (Number(event.key) || (event.key = ".")) {
        keySelect = event.key; 
        if ((display.textContent == "|") || (display.textContent == "ERROR")) {
            display.textContent = '';
            display.textContent += keySelect;
        } else if ((keySelect == ".") && ((display.textContent).includes("."))) {
            display.textContent;
        } else {
            if ((display.textContent).length <= 20) {
                display.textContent += keySelect;
            }
        }
    };
});

let clrBtn = document.querySelector('#numAC')
numAC.addEventListener('click', () => {
    display.textContent = '|';
})

let equals = document.querySelector('#equBtn')
equBtn.addEventListener('click', () => {
    let numIn1 = '';
    let numArray = [];
    let operator = [];
    inCharacters = display.textContent.split('');
    inCharacters.map(function(inCharacter) {
        if (isNaN(inCharacter)) {
            operator.push(inCharacter); 
        } else if (Number(inCharacter)) {
            for (i = 0; i <= operator.length; i++) {
                numIn1 = '';
                numIn1 += inCharacter;
                numArray.push(numIn1);
            }
        }
    });

    console.log(operator);
    console.log(numIn1);
    console.log(numArray);
    console.log(inCharacters);

    let result = operate(numIn1, numArray, operator);
    if (String(result) === "NaN") {
        display.textContent = "ERROR";
    } else {
        display.textContent = result;
    }
});

/* maybe add a backspace button? */