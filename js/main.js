let display = document.getElementById('display');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let displayValue = '';
let pendingVal;
let evalStringArray = [];

let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;
    displayValue += btnText;
    display.value = displayValue;
}

let performOperation = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            pendingVal = displayValue;
            displayValue = '';
            display.value = '';
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayValue;
            displayValue = '';
            display.value = '';
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case 'x':
            pendingVal = displayValue;
            displayValue = '';
            display.value = '';
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayValue;
            displayValue = '';
            display.value = '';
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayValue);
            let evaluation = eval(evalStringArray.join(' '));
            displayValue = evaluation + '';
            display.value = displayValue;
            evalStringArray = []; // clear the array
            break;
        default:
            break;
    }
}

let clearDisplay = () => {
    displayValue = '';
    pendingVal = undefined;
    evalStringArray = [];
    display.value = displayValue;
}

numbers.forEach(number => {
    number.addEventListener('click', updateDisplayVal, false);
});

operators.forEach(operator => {
    operator.addEventListener('click', performOperation, false);
});

document.getElementById('clear').addEventListener('click', clearDisplay, false);
