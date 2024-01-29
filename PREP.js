function addNumbers(num1, num2) {
    /*
    Parameters:
    - num1: The first number (input)
    - num2: The second number (input)

    Return:
    - The sum of num1 and num2
    */
    
    // Example:
    // If num1 = 3 and num2 = 7, the function should return 10
    const result = num1 + num2;
    /*
    Pseudocode:
    1. Accept two input numbers, num1 and num2
    2. Calculate the sum of num1 and num2
    3. Return the result
    */

    return result;
}
// Test the function
const number1 = 3;
const number2 = 7;
const sumResult = addNumbers(number1, number2);
console.log(`The sum of ${number1} and ${number2} is: ${sumResult}`);
