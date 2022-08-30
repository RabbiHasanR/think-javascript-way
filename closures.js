// in js child scope can access parent scope property . it is called lexical scope.

var num1 = 2
var num2 = 4

var sum = function () {
    return num1 + num2;
}

console.dir(sum) // output: sum() function details 

// when function need to access his outer scope property then this function reference outer scope property 
// this process is closure. but if function can not use outer scope variable then it not reference those variable in closure.
// so here js is smart. but when any var variable from global scope not use in child scope but child scope reference those property in
// global becauce global scope is lexical scope
// but when let variable use then it reference in script because let is block scope variable.

// simple closure example

var x = 2;
var t = 3;

let q = 4;
let r = 8;


var add = function () {
    var y = 3;
    var z = 4;
    return function () {
        return x + y;
    }
}

var test = add() // add function return another function

console.dir(test)  // output: test() function details 


// private property secure with closures
// example

var bankAccount = function (initialBalance) {
    var balance = initialBalance;
    return function () {
        return balance;
    }
}

var account = bankAccount(10000);
console.log(account()) // output : 10000 . 
//console.log(balance) // output: error: balance not defined. here balance property can not access without function call this balance variable is protected
console.dir(account) // account function details


// performance optimization with closure concept
// here getDelay method hold startTime reference in clousre through getDelay method call after expensive for loop executed.


var stopWatch = function () {
    let startTime = Date.now()

    function getDelay() {
        console.log(Date.now() - startTime)
    }

    return getDelay;
}

var timer = stopWatch()

for(let i = 0; i<10000;i++){
    var a = Math.random() * i;
}

timer()
console.dir(timer)

timer = null
// timer()


// closure use in asynchronice way
var a;

var async = function () {
    a = 20;
    var delay = function () {
        console.log(a) // output: 30 because a declare with var as a global variable but if var decalre with in function then output 20;
    }
    setTimeout(delay, 3000)

    console.dir(delay)
}

async()

a = 30;


// closure example for interview
// following code output is 0 1 2
// because i declare with let variable. let is block scope.every time looping i declare as new variable
// so closure reference three i 

for(let i = 0; i < 3; i++) {
    const myFunc = function () {
        console.log(i)
    }

    setTimeout(myFunc, 3000);
}


for(var x = 0; x < 3; x++) {
    const myFunc = function () {
        console.log(x)
    }

    setTimeout(myFunc, 3000);
}
