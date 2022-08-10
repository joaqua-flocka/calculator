
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(first,second,operator){
    let a = +first;
    let b = +second;
    return operator == '+' ? add(a,b) : operator == '-' ?
            subtract(a,b) : operator == '*' ? multiply(a,b) : divide(a,b);
}

function updateDisplay(string, obj){
    obj.textContent = '';
    obj.textContent = string;
}

let buttons = document.querySelectorAll('.number');
let inputs = ['','',''];
let firstNum = false;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(firstNum && inputs[2] == ''){
            inputs[0] = '';
            inputs[0] += button.textContent;
            updateDisplay(inputs[0], display);
            firstNum = false;
        } else if(!firstNum){
            inputs[0] += button.textContent;
            updateDisplay(inputs[0], display);
        } else {
            inputs[1] += button.textContent;
            updateDisplay(inputs[1], display);
        }
        console.log(inputs);
    });
});

let operators = document.querySelectorAll('.operator');
operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(inputs[0] == '')
            alert('ERROR, INPUT A NUMBER FIRST');
        else if(inputs[0] && inputs[1] && inputs[2]){
            inputs = [operate(inputs[0],inputs[1],inputs[2]),'',button.textContent];
            updateDisplay(inputs[0],display);
        } else{
            inputs[2] = button.textContent;
            firstNum = true;
        }
        console.log(inputs);
    });
});

let display = document.querySelector('.display');
let submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    display.textContent = '';
    display.textContent = (operate(inputs[0],inputs[1],inputs[2]));
    inputs = [display.textContent,'','']
    firstNum = true;
});

let clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    inputs = ['','',''];
    firstNum = false;
    display.textContent = '';
});