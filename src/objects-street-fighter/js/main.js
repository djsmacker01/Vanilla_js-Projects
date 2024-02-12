//Create a street fighter constructor that makes fighting game 
//characters with 4 properties and 3 methods

function streetFighter(punch,kick, catchPhrase, specialMove) {
    this.punch = punch
    this.kick = kick
    this.specialMove = specialMove
    this.catchPhrase = catchPhrase
    
    this.taunt = function () { 
        console.log(`You can't handle my ${this.specialMove}`)
    }

    this.winning = function () { 
        console.log(` Haha ${this.catchPhrase}`)
    }
    this.dash = function () { 
        console.log(`WHOPS, missed me!}`)
    }
}

    
