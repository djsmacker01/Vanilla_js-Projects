//Create a mouse object that has four properties and three methods

const mouse = {}
    mouse.brand = 'Dell'
    mouse.color = 'black'
    mouse.model =  'Mx Ergo'
mouse.leftClick = function () {
     console.log('left click')
 }

 mouse.rightClick = function () {
     console.log('right click')
 }

 mouse.scroll = function () {
     console.log('scroll up and down')
 }
 

const pizza = {}
pizza.ingredients = ['spinach', 'onion', 'jelapenos', 'banana peppers', 'garlic']
pizza.sauce = 'heavy'
pizza.size = 'large'
pizza.crust = 'stuffed'


pizza.estimatedDeliveryTime = function (time) {
    console.log('estimated delivery time')
}

pizza.burnMouth = function () {
    console.log('Yeah, it burns out my tongue')
}
    
pizza.frisbee = function () { 
    console.log('Yeah, it')
}

// Create a car factory

function MakeCarFactory(carMake, carModel, carColor, numberOfDoor) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.door = numberOfDoor
}


    