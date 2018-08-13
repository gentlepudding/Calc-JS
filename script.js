var minusButton = document.querySelector('.button[data-value="-"]');
var plusButton = document.querySelector('.button[data-value="+"]');
var multiButton = document.querySelector('.button[data-value="*"]');
var divisionButton = document.querySelector('.button[data-value="/"]');
var equalButton = document.querySelector('.button[data-value="="]');
var pointButton = document.querySelector('.button[data-value="."]')
var input = document.querySelector('.entry-field');

var left;
var op;
var right;

var validInput = '';

function debug() {
    console.log( {
        left,
        op,
        right,
    })
}

input.addEventListener('keyup', function () {
    if (/^\d*\.?\d*$/.test(input.value)) {
        validInput = input.value;
    } else {
        input.value = validInput;
    }
    debug();
})

function onOperationButtonClick(event) {
    left = input.value;
    op = event.target.dataset.value;
    input.value = '';
    debug();
}

minusButton.addEventListener('click', onOperationButtonClick);
plusButton.addEventListener('click', onOperationButtonClick);
multiButton.addEventListener('click', onOperationButtonClick);
divisionButton.addEventListener('click', onOperationButtonClick);

pointButton.addEventListener('click', function () {
    input.value += pointButton.dataset.value;
})

equalButton.addEventListener('click', function () {
    right = input.value;
    switch (op) {
        case '-':
            input.value = +left - +right;
            break;
        case '+':
            input.value = +left + +right;
            break;
        case '*':
            input.value = +left * +right;
            break;
        case '/':
            input.value = +left / +right;
            break;
    }
    debug();
})


