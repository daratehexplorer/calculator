//Display Changes
let display = document.querySelector('.display')

let numBtns = document.querySelectorAll('.numBtn')
numBtns.forEach((numBtn) => {
    let numSelect = numBtn.textContent;
    numBtn.addEventListener('click', () => {
        if (display.textContent == "|") {
            display.textContent = '';
            display.textContent += numSelect;
        } else {
            display.textContent += numSelect;
        }
    });
});

let funcBtns = document.querySelectorAll('.funcBtn')
funcBtns.forEach((funcBtn) => {
    let funcSelect = funcBtn.textContent;
    funcBtn.addEventListener('click', () => {
        if (display.textContent == "|") {
            display.textContent = '';
            display.textContent += funcSelect;
        } else {
            display.textContent += funcSelect;
        }
    });
});

let clrBtn = document.querySelector('#clrBtn')
clrBtn.addEventListener('click', () => {
    display.textContent = '|';
})

let equals = document.querySelector('#equBtn')
equBtn.addEventListener('click', () => {
    let result = operate();
    display.textContent = result;
});

// Math functions
const add = function(a , b) {
    return a + b;
};

const subtract = function(a , b) {
    return a - b;
};

const multiply = function (a , b) {
    return a * b;
};

const divide = function (a , b) {
    return a / b;
};

let firstNum
let secondNum
let operator

operate = function(firstNum, secondNum, operator) {
    if (operator == "+") {
       return add(firstNum, secondNum);
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
    };
}

