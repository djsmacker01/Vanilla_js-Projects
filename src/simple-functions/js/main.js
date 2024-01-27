//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtract(a, b) { 
    alert(a - b);

}
// subtract(1, 2);


//create a function that divides three numbers and console logs the quotient

function divide(a, b, c) { 
 console.log(a / b / c)
}

// divide (30,15,3)
//create a function that multiplys three numbers and returns the product
function multiply(a, b, c) { 
    return a * b * c; 

}
let result = multiply(30,15,3);
console.log(multiply(8,2,3))

function turnMoney() {
let result = multiply(30,15,3);
    alert('£' + result);
    console.log('---------------------')
}
// turnMoney();
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function Add_N_divide(a, b, c) { 

    return (a + b) % c;

} 

console.log(Add_N_divide(10, 23, 13))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
