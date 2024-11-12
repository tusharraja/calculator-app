async function performOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    try {
        let result;
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) throw new Error("Cannot divide by zero");
                result = num1 / num2;
                break;
            case 'modulus':
                if (num2 === 0) throw new Error("Cannot perform modulus by zero");
                result = num1 % num2;
                break;
            case 'power':
                result = Math.pow(num1, num2);
                break;
            case 'sqrt':
                if (num1 < 0) throw new Error("Cannot find the square root of a negative number");
                result = Math.sqrt(num1);
                break;
            case 'percentage':
                if (num2 === 0) throw new Error("Total cannot be zero when calculating percentage");
                result = (num1 / num2) * 100;
                break;
            default:
                throw new Error("Invalid operation");
        }
        resultDiv.textContent = `Result: ${result}`;
        resultDiv.style.color = '#28a745';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.style.color = '#dc3545';
    }
}