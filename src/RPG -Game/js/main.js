//Create a function that takes in an array of numbers. 
//Return a new array containing every even number from the original 
//array(do not use map or filter)


// function evenNumber(number) {
//     let eNum = []
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] % 2 == 0) {
//             eNum.push(number[i])
//         }
//     }
//     return eNum
// }

// function evenNumber(num) {
//     let eNum = []

//     num.forEach(n => {
//         if (n % 2 === 0) {
//       eNum.push(n)
//       }
//     })
//     return eNum
// }

//Create a minimalist RPG games. It create an object literal named
//Aurora with four properties and method

const aurora = {
  name: 'Aurora',
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health point, ${this.strength} as strength and ${this.xp} XP point`
  }
};

//Aurora is harmed by arrow
aurora.health -= 20;

//aurora gain a  strength
aurora.strength += 10;

//aurora learn new skills
aurora.xp += 15;

// console.log(aurora.describe());

//let add more characters to make it more interesting

const glacius = {
  name: 'Glacius',
  health: 130,
  strength: 30,
  xp: 0,
  

  //return description

  describe() {
    return `${this.name} has ${this.health} health point, ${this.strength} as strength and ${this.xp} XP point`
  }
}


class Character{
  constructor(name, health, strength, xp) { 
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
  }
  describe() {
    return `${this.name} has ${this.health} health point, ${this.strength} as strength and ${this.xp} XP point`
  }
 

}

const brucelee = new Character('Aurora', 150, 25)
const jamesBond = new Character('JamesBonds', 130,30)
const jacky = new Character('JackieChain', 400, 60)

brucelee.health -= 10
brucelee.strength += 20
brucelee.xp += 20

console.log(brucelee.describe())
console.log(jacky.describe())
console.log(jamesBond.describe())

// Following is how a fight will be handled.If attacked,
// a character sees their life points decrease from the strength 
// of the attacker.If its health value falls below zero, the character 
// is considered dead and cannot attack anymore.Its vanquisher receives
//  a fixed number of 10 experience points.
