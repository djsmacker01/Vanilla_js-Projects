


//  Array is a data type use to store set of  elements.
// Iterating over an array
const movies_list = ["24 Hour", "Prison Break", "Legend of the seeker", "Power"]
// Updating Array contents
movies_list.push('Rush Hour')
// To add new movies at the beginning of the list
movies_list.unshift('Marlin')

// Remove last elements from the list
// movies_list.pop()
movies_list.splice(2)

movies_list.forEach(movie => {
console.log(movie)
    
})
console.log("------------------------------------------")
for (const movie of movies_list) { 
    console.log(movie)
}
// Getting the number of element stored in arrays
console.log('Numbers of Element present in array:',movies_list.length)