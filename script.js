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

let clrBtn = document.querySelector('#clrBtn')
clrBtn.addEventListener('click', () => {
    display.textContent = '|';
})

let equals = document.querySelector('#equBtn')
equBtn.addEventListener('click', () => {
    let numIn1 = '';
    let numIn2 = '';
    let operator = [];
    inCharacters = display.textContent.split('');
    inCharacters.forEach(function(inCharacter) {
        if (isNaN(inCharacter)) {
            operator.push(inCharacter);
        } else if (Number(inCharacter) && (operator.length == 0)) {
            numIn1 += inCharacter;
        } else if (Number(inCharacter) && (operator.length == 1)) {
            numIn2 += inCharacter;
        }
    });

    console.log(operator);
    console.log(numIn1);
    console.log(numIn2);
    console.log(inCharacters);

    let result = operate(numIn1, numIn2, operator);
    if (String(result) === "NaN") {
        display.textContent = "ERROR";
    } else {
        display.textContent = result;
    }
});

/* maybe add a backspace button? */