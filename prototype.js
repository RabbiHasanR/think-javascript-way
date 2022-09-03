// create object with js

let person = {}

person.name = 'Rabbi'
person.age = 27

person.eat = function () {
    console.log('Eating method.')
}

person.sleep = function() {
    console.log('Sleeping method.')
}

console.log(person)
console.dir(person)
console.table(person)


//crate object with function

function Person(name, age){
    let person = {}
    person.age = age
    person.name = name

    person.eat = function () {
        console.log('Eating method.')
    }
    
    person.sleep = function() {
        console.log('Sleeping method.')
    }

    return person;
}

const sakib = Person('Sakib', 34)
const tamim = Person('Tamim', 33)
console.dir(sakib)
console.dir(tamim)
console.dir(Person)

// create obbject and create common method object

const Parent = {
    eat() {
        console.log('eating')
    },
    sleep() {
        console.log('sleeping')
    },
    play() {
        console.log('playing')
    }
}

function Child (name, age) {
    //use Object.crate to use parent object
    let child = Object.create(Parent)
    child.name = name;
    child.age = age;
    // child.eat = Parent.eat
    // child.sleep = Parent.sleep
    // child.play = Parent.play

    return child;
}   

const c = Child('Rabbi', 27)
c.play()


// another way object create using object

const captain = {
    name: 'Mashrafee',
    age: 39,
    county: 'Bangladesh'
}

const palyer = Object.create(captain)

console.log(palyer)
console.log(palyer.name)


// What is prototype?

// prototype is simply is function property which point a object.
// prototype asole kisoi na prototype hosse function ar akta property ja akta object k point kore


// prototype example

function Employe(name, age) {
    let employe = Object.create(Employe.prototype)
    employe.name = name
    employe.age = age
    return employe;
}

Employe.prototype = {
    eat() {
        console.log('eating')
    },
    sleep() {
        console.log('sleeping')
    },
    play() {
        console.log('playing')
    }
}

const shaon = Employe('Shaon', 27)
const rakib = Employe('Rakib', 26)

console.log(shaon)
shaon.play()


// example create construct function object with new

function newemploye(name, age) {
    this.name = name;
    this.age = age;
}

newemploye.prototype = {
    eat() {
        console.log('eating')
    },
    sleep() {
        console.log('sleeping')
    },
    play() {
        console.log('playing')
    }
}

const newrakib = new newemploye('Rakib', 26)
newrakib.sleep()
console.log(newrakib.name)

// convert function constructor and prototype based object ot class based object

class TestPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log('eating')
    } 

    sleep() {
        console.log('sleeping')
    }

    play() {
        console.log('playing')
    }
}

const testrabbi = new TestPerson('Rabbi', 27)
console.log(testrabbi.name)
testrabbi.sleep()


// example overrice built in object protottype method

let persons = new Array()

persons.push('Rabbi')
console.log(persons)
console.log(Array.prototype)
