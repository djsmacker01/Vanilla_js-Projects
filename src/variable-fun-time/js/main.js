//--- Easy
//create a variable and assign it a number
let num = 1

//minus 10 from that number
 num = 10 - num
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input
let inputValue = document.getElementById('danceDanceRevolution').value
//add 25 to that number
inputValue = inputValue + 25
//alert that number
alert(inputValue)
//--- Hard
//create a variable that holds the h1
const hiHolder = document.querySelector('h1').addEventListener('click', clickMe)

function clickMe() {
    console.log(num + Number(inputValue))
}
//add an event listener to that element that console logs the sum of the two previous variables
