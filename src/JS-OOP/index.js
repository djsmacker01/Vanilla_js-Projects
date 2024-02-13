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

// Factory or contructor function

function createCircle(radius) {
    return {
        radius,
        draw: function () { 
            console.log("createCircle");
        }
    }
        
}
const circle = createCircle(1);
circle.draw()