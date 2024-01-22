// *Variables*
// Create a variable and console log the value
const num = 1
console.log(num)

// Create a variable, add 10 to it, and alert the value
let count = 10
count += 1
// alert(count)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Num(a, b, c, d) {
    // alert(a-b-c-d)
}
sub4Num(40,20,5,8)
// Create a function that divides one number by another and returns the remainder
function div4Num(a, b) {
    return a % b
}

console.log(div4Num(40,20))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(a, b) {
    if (a + b > 50) { 
        alert('Jumanji')
    }
}
// addTwoNums(50,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNum(a, b, c) {
    let product = a * b * c
    if (product % 3 === 0) {
          alert('Zebra')
    }
    else {
               alert('Not Divisible by Three')
    }
  
}
multiplyThreeNum(9,9,9)

// function multiplyThreeNum(a, b, c) {
//     let product = a * b * c;
//     if (product % 3 === 0) {
//         alert('Zebra');
//     } else {
//         alert('Not Divisible by Three');
//     }
// }

// multiplyThreeNum(2, 3, 4);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNumber(word, number) {
    for (let i = 1; i <= number; i++) {
        console.log(word)
    }
}
wordNumber('Cheers!', 21)