//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['Mad', 'Rush Hour', 'Prison Break', 'Marlin', 'Legend of the seeker']
movieTitles.forEach(movieTitle => { 
    document.querySelector('h2').innerText += movieTitle
})

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArray = [2, 4, 6, 8, 10, 12, 14]

// for (let i = 0; i < numArray.length; i++){ 

// }
numArray.forEach((item, index) => {
    numArray[index] = item + 3
})

//Find the average of all the numbers from question two

let sum = 0

for (let i = 0; i < numArray.length; i++){
    sum
}
