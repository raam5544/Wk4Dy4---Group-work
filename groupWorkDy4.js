// Section 1
// Creating Classes & Factories
// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
    constructor(name) {
        this.name = name
        this.owner = ''
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}

// Person
// attributes:

// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10,
// decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`I'm ${this.name}, Hello there`)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }
    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}

// Instantiate a new Person named Timmy
const newPerson = new Person('Timmy')

// Age Timmy five years

for (let i = 1; i <= 5; i++) {
    newPerson.ageUp()
}

// At this point Timmy's a little bummed. 
// As a precocious child, he feels he's "seen it all" already. Have him eat five times.

for (let i = 1; i <= 5; i++) {
    newPerson.eat()
}

// Now Timmy's a little heavier than he wants to be. 
// Kindergarten's coming up and he wants to look good. Have him exercise five times

for (let i = 1; i <= 5; i++) {
    newPerson.exercise()
}

// Age Timmy 9 years

for (let i = 1; i <= 9; i++) {
    newPerson.ageUp()
}

const gus = new Hamster('Gus')
newPerson.buyHamster(gus)
gus.owner = 'Timmy'
// console.log(newPerson)

for (let i = 1; i <= 15; i++) {
    newPerson.ageUp()
}

for (let i = 1; i <= 15; i++) {
    newPerson.ageUp()
}
// console.log(newPerson)
newPerson.eat()
newPerson.eat()
newPerson.exercise()
newPerson.exercise()
