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

console.log(aurora.describe());

//let add more characters to make it more interesting

const glacius = {
  name: 'Glacius',
  health: 130,
  strength: 30,
  xp: 0,
  

  //return description

  describe() {
   
  }
}