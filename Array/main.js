// Updating Array contents


//  Array is a data type use to store set of  elements.
// Iterating over an array
const movies_list = ["24 Hour", "Prison Break", "Legend of the seeker", "Power"]

movies_list.forEach(movie => {
console.log(movie)
    
})
console.log("------------------------------------------")
for (const movie of movies_list) { 
    console.log(movie)
}
// Getting the number of element stored in arrays
console.log('Numbers of Element present in array:',movies_list.length)