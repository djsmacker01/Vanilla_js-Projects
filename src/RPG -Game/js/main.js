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
      
// Following is how a fight will be handled.If attacked,
// a character sees their life points decrease from the strength 
// of the attacker.If its health value falls below zero, the character 
// is considered dead and cannot attack anymore.Its vanquisher receives
  //  a fixed number of 10 experience points
  
  //Attack a player
  attack(target) {
    if (this.health > 0) { 
      const damage = this.strength
      console.log(`${this.name} attack ${target.name} and causes ${damage} damage point`)
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`)
      }
      else {
        target.health = 0
        const bonusXP = 10
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`);
        this.xp += bonusXP
      }

  
    } else{
      console.log(`${this.name} can't attack (They've been eliminated)`);
    }
  }

   describe() {
    return `${this.name} has ${this.health} health point, ${this.strength} as strength and ${this.xp} XP point`
  }
 
}

const brucelee = new Character('Aurora', 150, 25)
const jamesBond = new Character('JamesBonds', 130,30)
const jacky = new Character('JackieChain', 400, 60)

console.log("Welcome to the adventure! Here are our heroes:");
console.log(brucelee.describe());
console.log(jamesBond.describe());
console.log(jacky.describe());

const monster = new Character('Spike', 40, 20)
console.log("A wild monster has appeared: it's name " + monster.name)

monster.attack(brucelee);
monster.attack(jacky);
monster.attack(jamesBonds);

brucelee.attack(monster);
jacky.attack(monster)
jamesBond.attack(monster)


// brucelee.health -= 10
// brucelee.strength += 20
// brucelee.xp += 20

console.log(brucelee.describe())
console.log(jacky.describe())
console.log(jamesBond.describe())


