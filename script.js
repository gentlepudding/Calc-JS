var minusButton = document.querySelector('.button[data-value="-"]');
var plusButton = document.querySelector('.button[data-value="+"]');
var multiButton = document.querySelector('.button[data-value="*"]');
var divisionButton = document.querySelector('.button[data-value="/"]');
var equalButton = document.querySelector('.button[data-value="="]');
var digitButtons = document.querySelectorAll('.button-digit');
var pointButton = document.querySelector('.button[data-value="."]');
var resetButton = document.querySelector('.button-reset');

var input = document.querySelector('.form');

var left;
var op;
var right;

function onOperationButtonClick(event) {
    left = +input.value;
    op = event.target.textContent;
    input.value = '';
}

for(var i = 0; i < digitButtons.length; i++) {
    var button = digitButtons[i];
    button.addEventListener('click', function (event) {
        input.value += event.target.textContent;
    });
}

minusButton.addEventListener('click', onOperationButtonClick);
plusButton.addEventListener('click', onOperationButtonClick);
multiButton.addEventListener('click', onOperationButtonClick);
divisionButton.addEventListener('click', onOperationButtonClick);

resetButton.addEventListener('click', function () {
    left = 0;
    right = 0;
    op = null;
    input.value = null;
})

pointButton.addEventListener('click', function (event) {
    input.value += event.target.textContent;
})

equalButton.addEventListener('click', function () {
    right = +input.value;
    switch (op) {
        case '-':
            input.value = left - right;
            break;
        case '+':
            input.value = left + right;
            break;
        case '*':
            input.value = left * right;
            break;
        case '/':
            input.value = left / right;
            break;
    }
})