// var is function scope and let is block scope
//example

if(true){
    var varvariable = 'This is var';
}

console.log(varvariable) // output is : This is var. because var is function scope thats why varvariable print outside block.

if (true) {
    let letvariable = 'This is let';
}

console.log(letvariable) //output is: error: letvariable is not defined.because let is block scope.let only work with in block not outside block.

//var varibale can be declare multiple time with same name but let varibale not declare multiple time with same name
// example

var a = 10;
console.log(a) // output: 10

if(true){
    var a = 90;
}

console.log(a) //output: 90

if(true){
    let x = 10
    let x = 20
    console.log(x) // output: error: x already be defined.
}

//this is the defference between var and let variable


//const also block scope and const variable can not reassign
// child scope can access parent scope property but parent scope can not access child scope property

function t(){
    var t = 0
}

console.log(t) //output : t is undefined

if (true) {
    const x = 10
    x = 20 //output: error: const can not reassigned
}

console.log(x) // const can not be  access child scope variable from parent scope

const t = {g:10} // when object name declare with const it can not be reassign but object property can be change
t.g = 30
console.log(t) // output {g:30}
t = {g:40}
console.log(t) // const t variable can not be reassigned.