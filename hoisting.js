// variable hoisting example

//console.log(a) // output: error a is undefined

console.log(x) // output: 10
var x = 10

// uporer example a output 10 aise karon hoisting. jokhon js compiler code execute kore tokhon 
//sokol var diye declare variable ke upore niye tarpor execution kore
//example: uporer code ta ke amra aivabe kolpona korte pari
// var x
// console.log(x)
// x = 10
// this is hoisting


// console.log(e) // output: can not access e before initialization.
// let e = 10

//because jokhon hoisting hoy tokhon var ar khetre automaticlly
// undefiend assignment hoye jay.but let ar khetre ata hoy na..
//example: hoisting:
// let x
//console.log(x)
//x= undefined
//x = 10

let y;
console.log(y) // output: undefined

//because when declate let variable automatically assign undefined like y = undefined

// another hoisting example

var LANGUAGE = 'JAVA'
var language = 'javascript'

function getLanguage() {
    if(!language){
        var language = LANGUAGE;
    }

    return language;
}


console.log(`I love ${getLanguage()}`) // output: I love JAVA

//because hoisting hoy hosse every scope.var hosse function scope tai prothome  getLanguage function a var language; hoisting hoy; and language undefined tahke tai 
//condition true hoy and language change hoye JAVA hoy  jay;

let L = 'JAVA'
let l = 'javascript'

function getLanguageTwo() {
    if(!l){
        let l = L;
    }

    return l;
}


console.log(`I love ${getLanguageTwo()}`) // output: I love javascript

// jeheto hoisting hoy every block or scope a aikhane let hosse block scope variable tai if block a 
//vitore let l hoisting hoy and
//if block a condition a
// l prothome tar perent scope a khuje l k tarpor global scope a khuje 
// jeheto global scope l declare and assign kora hoy seheto if condition false
// tai javascript return kora .



// function hoisting example
// function hoisting ar khetre function defination sobar prothome
// execution hoy and pore function call. so ai karone following output ata astese


myFunc() // output: I love javascript

function myFunc() {
    console.log('I love javascript!')
}

myFuncTwo() // output: javascript

function myFuncTwo() {
    language = "javascript"
    var language;
    console.log(language)
}

// but when function declare in variable ..function hoisting work like variable hoisting

//example
// myFuncThree() // output: myFuncThree is not a function


// var myFuncThree = function () {
//     language = "javascript"
//     var language;
//     console.log(language)
// }


// myFuncFour() // output: Cannot access 'myFuncFour' before initialization


// const myFuncFour = function () {
//     language = "javascript"
//     var language;
//     console.log(language)
// }