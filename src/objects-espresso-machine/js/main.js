//Create an espresso machine constructor 
// that makes machines with 4 properties and 3 methods

class EspressoMachine {
    constructor(brand,color,cost, type) {
        
        this.brand = brand;
        this.color = color;
        this.cost = cost;
        this.type = type;
    }

    switch_on() {
        alert('Power on')
    }

    coffee() {
        alert('Dispense coffee')
    }

    milk() {
        alert('Dispense milk')
    }

}
