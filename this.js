// implicit binding
// explicit binding
// new binding
// window binding

// implicit binding example

const sakib = {
    name: 'Sakib',
    age: 35,
    printPlayerName: function () {
        console.log(this.name)
    }
}

sakib.printPlayerName()  // aikhane implicit binding ar somoy function call ar left dot ar ager object tai this other wise this
// point to window object

// when object pass in function tokhon o implicit binding this kaj kore
//example

function printPlayerNameFunction(obj) {
    obj.printPlayerName = function() {
        console.log(this.name)
    }
}

const Liton = {
    name: 'Liton',
    age: 35
}

const Sohan = {
    name: 'Sohan',
    age: 35
}

printPlayerNameFunction(Liton)
printPlayerNameFunction(Sohan)
Liton.printPlayerName()
Sohan.printPlayerName()

var Person = function (name, age) {
    return {
        name: name,
        age: age,
        printPlayerName: function (){
            console.log(this.name)
        },
        father: {
            name: 'MR: XXX',
            printName: function () {
                console.log(this.name)
            }
        }
    }
}

const p = Person('Tamim', 36)
p.printPlayerName()
p.father.printName()


//explicit binding example

function printName(v1, v2, v3) {
    console.log(this.name, v1, v2, v3)
}

const shaon = {
    name: 'Shaon',
    age: 27
}

let v1 = 'Version one'
let v2 = 'Version two'
let v3 = 'Version three'
let v = [v1, v2, v3]
printName.call(shaon, v1, v2, v3)  // call() or .apply() when you want to invoke the function immediately, and modify the context.
printName.apply(shaon, v) //call() or .apply() when you want to invoke the function immediately, and modify the context.. when use apply we can pass array of arguments

let newfunc =  printName.bind(shaon, v1, v2, v3)  // bind return instance

newfunc()

// new binding example

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person = new Person('Rabbi', 45)

console.log(person.name, person.age)



// window binding exmple

var printAge = function () {
    console.log(this) // window object
    console.log(this.age) // undefined
}

var s = {
    name: 'Sakib',
    age: 24
}

printAge()