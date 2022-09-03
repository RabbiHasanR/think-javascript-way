// prototype

var f = function Person() {}
console.dir(f)

// create function in MAIN Object prototype

Object.prototype.rabbi = function () {
    console.log('I am rabbi')
}

var p = {}
p.rabbi()


// js inheritance

function Human(name, age) {
    //parent class
    this.name = name;
    this.age = age;
}

Human.prototype = {
    eat() {
        console.log(`${this.name} is eating.`)
    }
}

function Cricketer(name, age, type, country) {
    //sub class
    Human.call(this, name, age)
    // this.name = name;
    // this.age = age;
    this.type = type;
    this.country = country;
}






Cricketer.prototype = Object.create(Human.prototype)
Cricketer.prototype.constructor = Cricketer
Cricketer.prototype.play = function () {
    console.log(`${this.name} is playing at ${this.age} years old.`)
}

const sakib = new Cricketer('Sakib', 35, 'Alrounder', 'Bangladesh')
console.log(sakib.name, sakib.age, sakib.type, sakib.country)
sakib.eat()
sakib.play()


/// es6 class and inheritance

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} eating.`)
    }
    //getter
    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name
    }
}

class Dog extends Animal {
    constructor(name, age, color, type) {
        super(name, age)
        this.color = color;
        this.type = type;
    }

    play() {
        console.log(`${this.name} is playing`)
    }

    static isEqualDog(dog1, dog2) {
        console.log(this.name) // output: Dog. becauce in static method this refere to Dog Class Name
        return dog1.age === dog2.age;
    }

    // override parent class method
    eat() {
        super.eat()
        console.log('Dog class eat')
    }
}

const red = new Dog('Red', 3, 'Red', 'Deshi')
red.eat() // output: Red eating

red.setName = 'Red Red'
console.log(red.getName)
const green = new Dog('Green', 4, 'Green', 'Deshi')

console.log(Dog.isEqualDog(red, green))

const yellow = new Animal('Yellow', 5, 'Yellow', 'Bideshi')
// yellow.play() // error because play is child class method
yellow.eat() // output: Yellow eating
