function performOperation() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Clear previous results

    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform operations and display results
        displayResult(`Addition: ${add(num1, num2)}`);
        displayResult(`Subtraction: ${subtract(num1, num2)}`);
        displayResult(`Multiplication: ${multiply(num1, num2)}`);

        if (num2 !== 0) {
            displayResult(`Division: ${divide(num1, num2)}`);
        } else {
            displayResult('Division: Error! Division by zero is not allowed.');
        }
    } else {
        displayResult('Error: Please enter valid numbers.');
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function displayResult(message) {
    const resultElement = document.getElementById('result');
    const p = document.createElement('p'); // Create a new paragraph for each result
    p.textContent = message;
    resultElement.appendChild(p); // Append to the result container
}
