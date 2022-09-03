// js execution context 
// how javascirpt code run? top view

// js code -> browser -> js engine -> computer -> output

// javascript code prothome browser a jay browser js code te machine language a convert korte js code k 
// js engine a pathay . js engine js code ke machine language a convert kore computer ar kase dey
// then computer amader k output dekhay

// different browser use different js engine. example:
// chrome user v8 engine
//  firefox use spider monkey
// safari use webkit
// edge use chakra

// interpreted  and compile language 
// JavaScript is an interpreted language, not a compiled language. 
//A program such as C++ or Java needs to be compiled before it is run. 
//The source code is passed through a program called a compiler, 
//which translates it into bytecode that the machine understands and can execute. In contrast, 
//JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, 
//interprets each line, and runs it. More modern browsers use a technology known as Just-In-Time (JIT) compilation, 
//which compiles JavaScript to executable bytecode just as it is about to run.


// code ke machine language a convert kora 3 way ase
// interpretation
// compilation
// mixture of both

// interpreter execute code line by line
// interpreted is slow process because execute code line by line
// interpretes is easy to debug


// compilation execute full code do together.. akbare full code ke execute kore machine language a convert kore
// compilation is fast process
// hard to debug and system crash.


// every modern browser use JIT (just in time) compilation process to convert  js code to machine language
// JIT execute code block/piece by block/piece
// JIT is fast process
// JIT is easy to debug



// js code run ar surute jodi .js file emptyo thake
// global execution context object  loading phase a thake
// loading pahase a
// globar execution context a thake:
// window object
// this
// variable object
// scope chain

// assume

var topic = 'js'

function getTopic() {
    console.log(topic)
}

getTopic()

// when .js file execute code 
// tokhn global execute context loading pahase a
// window object
// this
// variable object a:
// topic: undefined
// getTopic: fn() fuction body reference rakhe
// scope chaining

// execute phase a 

// window object
// this
// variable object a:
// topic: 'js'
// getTopic: fn() fuction body reference rakhe
// scope chaining

//banglate global execution contect

// 1: first a akta global object make kore
// 2: this name a akta object make kore
// 3: function and variable ar jonno memory te jayga make kore
// 4: loding phase a variable ar value undefined bosiye dey



// function execution context

// 1: first a parameters/arguments object make kore
// 2: this name a akta object make kore
// 3: function and variable ar jonno memory te jayga make kore
// 4: loding phase a variable ar value undefined bosiye dey

//uporer code a jekon global execution context a function call hobe tokhon e 
// function execution contect create hobe.
// arguments: {}
// this: window
// jokhon e return hobe function execution context end hoye jabe

// js execution stack

var a = 1

function one() {
    console.log(a) // 1
    function two () {
        console.log(b) // undefiend
        var b = 2;
        function three(d) {
            console.log(c+d) // reference error
            let c = 3;
        }
        three();
    }
    two();
}

one()


// executon stack:
// fourth three fn() execution context
// third two fn() execution context
// second one fn() execution context
// first a thakbe: global execution context


// uporer code ar global execution context
// loading phase 
// window : global object
// this: window
// a: undefined
// one: fn()
// scope caining

// execution phase
//// loading phase 
// window : global object
// this: window
// a: 1
// one: fn()  call hobe and function execution context make korbe and execution stact a one function execution contect add korbe
// scope caining


// one function execution context
// laoding phase
// arguments: {}
// this: global
// two: fn()
// scope: chaining


// one function execution context
// execution phase
// arguments: {}
// this: global
// two: fn()  call hobe and function execution context make korbe and execution stact a one function execution contect add korbe
// scope: chaining


// two function execution context
// laoding phase
// arguments: {}
// this: global
// b: undefined
// three: fn()
// scope: chaining


// two function execution context
// execution phase
// arguments: {}
// this: global
// b: 2
// three: fn()  call hobe and function execution context make korbe and execution stact a one function execution contect add korbe
// scope: chaining


// three function execution context
// laoding phase
// arguments: {0:4}
// this: window
// d: 4 // argument variable name
// scope: chaining


// three function execution context
// execution phase
// arguments: {0:4}
// this: window
// d: 4 // argument variable name
// scope: chaining


// after that three function execution context pop out from execution stack
// then two function execution context pop out from execution stack
// then one function execution context pop out from execution stack
// then global execution context pop out from execution stack

// and code execute succesffully


// discover lexical scope execution context

function hello() {
    var msg = 'Hello world!'
}

hello()
console.log(msg) // reference error

// global execution context
// loading phase
// window: global object
// this: window
// fn: ()
// scope : chaining

// global execution context
// execution phase
// window: global object
// this: window
// fn: () call hobe and function execution context make korbe and execution stact a hello function execution contect add korbe
// then console.log(msg) reference error dibe. because after hello function execution context hello function pop out from execution stack
// scope : chaining

// hello function execution context
// laoding phase
// arguments: {}
// this: window
// msg: undefiend
// scope: chaining


// hello function execution context
// execution phase
// arguments: { }
// this: window
// msg: 'Hello world!'
// scope: chaining




// discover closure execution context

var sum = 0

function doSum(a) {
    return function(b) {
        return a + b
    }
}

var temp = doSum(2)
sum = sum + temp(8)


// global execution context
// loading phase
// window: global object
// this: window
// sum: undefiend
// temp: undefiend
// scope : chaining

// global execution context
// execution phase
// window: global object
// this: window
// sum: 0
// temp: fn() call hobe and function execution context make korbe and execution stact a doSum function execution contect add korbe

// doSum function execution context
// laoding phase
// arguments: {0:2}
// this: window
// a: 2
// annonymus: fn()
// scope: chaining


// doSum function execution context
// execution phase
// arguments: {0:2}
// this: window
// a: 2
// annonymus: fn()  call hobe and function execution context make korbe and execution stact a annonymus function execution contect add korbe
// scope: chaining


// closure scope execution context  for annonymus function
// laoding phase
// arguments: {0:2}
// this: window
// a: 2
// annonymus: fn()
// scope: chaining


// closure scope execution context  for annonymus function
// execution phase
// arguments: {0:2}
// this: window
// a: 2
// annonymus: fn()  call hobe and function execution context make korbe and execution stact a annonymus function execution contect add korbe
// scope: chaining