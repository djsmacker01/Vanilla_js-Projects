// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let val 
val = 'trip to paris'
let caps = val.toUpperCase()
console.log(caps)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let stringChar = 'javascript'
let newStr = stringChar.slice(-3)
alert(newStr)

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subFiveNumbers(n1, n2, n3, n4, n5) { 
    let difference = 100 - n1 - n2 - n3 - n4 - n5;

    alert(Math.abs(difference))
}
subFiveNumbers(40,76,80,98,22)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestAndHighest(n1, n2, n3) {
    let min = Math.min(n1, n2, n3);
    let max = Math.max(n1, n2, n3);

    console.log(`The lowest number is:  ${min} and the highest is:  ${max}`);
}
lowestAndHighest(100,160,893)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
