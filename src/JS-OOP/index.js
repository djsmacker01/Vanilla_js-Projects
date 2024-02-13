// Object literal
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw()

// Factory function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log("createCircle");
//         }
//     }
        
// }
// const circle = createCircle(1);
// circle.draw()

// constructors Function

function Circle(radius) {
    // console.log('this',this)
    this.radius = radius
    this.draw = function () {
        console.log("createCircle")
    }
}
const anotherCircle = new Circle(1)
const anotherCircle1 = new Circle(2)


//  Add or removing property
anotherCircle.location = {
    x: 1,
    y:2
}
// Enumerating properties, i.e looping through an object
for (let key in anotherCircle) {
    // to get only the properties
    if (typeof anotherCircle[key] !== 'function') {
        
        console.log(key, anotherCircle[key])
    }
}
console.log('...........................')
// To get all keys in object. This approach is used to separate properties from method
const keys = Object.keys(anotherCircle1)
console.log(keys)

// console.log(anotherCircle.radius)
//   let number = 10
// function increaseNum(number) {
   
//     number++
// }

// increaseNum(number)
// console.log(number)

//   let obj = {value:10}
// function increaseNum(obj) {
   
//     obj.value++
// }
// increaseNum(obj)
// console.log(obj)

//  Add or removing property

