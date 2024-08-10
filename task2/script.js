// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value) {
                currentInput += value;
                display.textContent = currentInput;
            } else if (button.id === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.textContent = '0';
            } else if (button.id === 'equals') {
                if (currentInput && previousInput && operator) {
                    const result = evaluate(previousInput, currentInput, operator);
                    display.textContent = result;
                    currentInput = result;
                    previousInput = '';
                    operator = '';
                }
            } else if (['add', 'subtract', 'multiply', 'divide'].includes(button.id)) {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = button.textContent;
                }
            }
        });
    });

    function evaluate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
        }
    }
});
