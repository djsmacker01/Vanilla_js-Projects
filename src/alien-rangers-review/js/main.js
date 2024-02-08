//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['Vampire Dairy', 'Black list', 'Prison break', '24 Hour'];
//  tvShows.forEach(show=> console.log(show))
// tvShows.map((item) => console.log(item))
for (let i = 0; i < tvShows.length; i++){
    console.log(tvShows[i]) 
 }

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [21, 22, 23, 24, 25, 26, 27, 28, 29]

let evenNums = arr => arr.filter(n => n % 2 === 0)

console.log(evenNums(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumOfSecLowAndHighest(nums) { 
    let sorted = nums.sort((a, b) => a - b)
    alert(sorted[1] + sorted[sorted.length - 2])
}

sumOfSecLowAndHighest ([2,4,6,9,10])
