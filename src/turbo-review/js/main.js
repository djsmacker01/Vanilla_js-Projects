// *Variables*
// Declare a variable and assign it to your fav drink as a string. 
//Make sure there is no whitespace on either side of the string, and print the value to the console

// let favoriteDrink = ' Soya Milk '
// favoriteDrink = favoriteDrink.trim()
// console.log(favoriteDrink)

// let favoriteDrink;
// favoriteDrink = ' Lucozade sport drink'
// favoriteDrink = favoriteDrink.trim()
// console.log('My favorite drink is',favoriteDrink)


//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// let str = 'mate egg printer apple jez'
// if (str.charAt('apple') !== -1) {
//     console.log('Yes')
// } else {
//     consol.log('No')
// }

let str = 'aunt, goog-apple, mat, house'
if (str.charAt('aunt')!==-1) {
    console.log('Yes')
}
else {
    console.log('No')
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible,
function rockPaperScissors() {
    let random = Math.random() 

    if (random < .33) {
        return 'rock'
    }
    else if(random < .66){
      return 'paper'
    }
    else {
        return 'scissors'
    }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) 
//and determines if they won a game of rock paper scissors against a bot using 
//the above function

function checkWin(playerChoice) {
    let botChoice = rockPaperScissors()
    if ((playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock')
    || (playerChoice === 'scissors' && botChoice ===  'paper'))
     {
        console.log('You Win!');
    }
    else if (playerChoice === botChoice) {
        console.log('You Tied!');
    }
    else {
        console.log('You Lose!');
    }

}
// checkWin('paper')

//*Loops*
//Create a function that takes an array of choices. 
//Play the game x times where x is the number of choices in 
//the array.Print the results of each game to the console.
function playGameXtimes(arr) {
arr.forEach(choice => checkWin(choice));
}

playGameXtimes(['paper','rock', 'scissors'])
