let displayElement = document.getElementById('display'); 
// References the display element to update its content

function clearDisplay() {
    displayElement.innerText = '0'; 
    // Resets the display to 0
}

function appendNumber(number) {
    // Check if the current display shows only "0"
    if (displayElement.innerText === '0') {
        // If true, replace "0" with the number clicked
        displayElement.innerText = number; 
        // Replaces 0 with the first number
    } else {
        // If the display contains other text, append the new number to it
        displayElement.innerText += number; 
        // Appends the number to the current display text
        // Example: If display shows "5" and user clicks "2", it updates to "52"

    }
}


function appendOperator(operator) {
    // Get the last character of the current display text
    let lastChar = displayElement.innerText.slice(-1); 
    
    // Check if the last character is an operator (+, -, *, or /)
    if ('+-*/'.includes(lastChar)) {
        // If true, replace the last operator with the new operator
        displayElement.innerText = displayElement.innerText.slice(0, -1) + operator; 
        // Example: If the display is "5+" and the user clicks "-", it becomes "5-"
    } else {
        // If the last character is not an operator, append the new operator to the display
        displayElement.innerText += operator; 
        // Example: If the display is "5" and the user clicks "+", it becomes "5+"
    }
}




function backspace() {
    displayElement.innerText = displayElement.innerText.slice(0, -1) || '0'; 
    // Removes the last character or resets to 0 if empty
}

function calculate() {
    try {
        displayElement.innerText = eval(displayElement.innerText) || '0'; 
        // Evaluates the expression or resets to 0 if invalid
    } catch (e) {
        displayElement.innerText = 'Error'; 
        // Displays "Error" for invalid expressions
    }
}
