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
    this.honk = function () {
        console.log('BEEP! BEEP!! ')
    }
    this.lock = function () { 
        console.log(`locked ${this.door} doors`)
    }
}
let hondaCivic = new MakeCarFactory('Honda', 'Civic', 'Silver', 4)
let toyota = new MakeCarFactory('Toyota', 'Camery','grey',2)

// let ingredients = ['spinach', 'onion', 'jelapenos', 'banana peppers', 'garlic']

function PizzaConstructor(sauce,size, crust,ingredients) {
    this.sauce =sauce
    this.size = size
    this.crust = crust
    this.ingredients = ingredients
    this.estimatedDeliveryTime = function (time) {
        console.log('estimated delivery time')
    }

    this.burnMouth = function () {
        console.log('Yeah, it burns out my tongue')
    }
        
    this.frisbee = function () { 
        console.log('Yeah, it')
    }


}

let newPizza = new PizzaConstructor('heavy','large', 'deep dish',['spinach', 'onion', 'jelapenos', 'banana peppers', 'garlic'])