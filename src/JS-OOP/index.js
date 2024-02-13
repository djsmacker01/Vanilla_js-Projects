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

// function Circle(radius) {
//     console.log('this',this)
//     this.radius = radius
//     this.draw = function () {
//         console.log("createCircle")
//     }
// }
// const anotherCircle = new Circle(1)
// const anotherCircle1 = new Circle(2)

// console.log(anotherCircle.radius)
//   let number = 10
// function increaseNum(number) {
   
//     number++
// }

// increaseNum(number)
// console.log(number)

  let obj = {value:10}
function increaseNum(obj) {
   
    obj.value++
}
increaseNum(obj)
console.log(obj)

