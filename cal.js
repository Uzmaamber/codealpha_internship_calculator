// Select the display and all the buttons
const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('.buttons input[type="button"]');

// Initialize an empty string to hold the current input
let currentInput = '';

// Function to update the display
function updateDisplay(value) {
    display.value = value;
}

// Event listener for each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        // Handle AC (clear all)
        if (value === 'AC') {
            currentInput = '';
            updateDisplay(currentInput);
        }
        // Handle DEL (delete the last character)
        else if (value === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        }
        // Handle equal sign (evaluate the expression)
        else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay(currentInput);
            } catch {
                updateDisplay('Error');
            }
        }
        // Handle other buttons (numbers, operators)
        else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});
