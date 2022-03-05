Javascript Scope:
When we land javascript world form other programming world first time we think javascript is weird . So for this reason
javascript scope concept is ulimate weirdo for us. But trust me javascript give thrill and fun when you can think javascript way and use it.
So what is scope. In easy word scope is boundary. within this bounday we only use this boundary item. Scope can be parent and child. Child scope can access parent scope properties but parent scope cann't access child scope properties.

Javascript has 3 type scope:
1.Block Scope
2.Function Scope
3.Global Scope

Boock Scope: Before ES6 (2015), JavaScript had only Global Scope and Function Scope. ES6 introduced two important new JavaScript keywords: let and const.These two keywords provide Block Scope in JavaScript. Variables declared inside a { } block cannot be accessed from outside the block:

{
  let a = 2;
}
// a can not be access or use here

But, Variables declared with the var keyword can NOT have block scope. Variables declared inside a { } block can be accessed from outside the block.

{
  let b = 5;
}
// b can be access or use here


Function Scope: JavaScript has function scope: Each function creates a new scope. Variables defined inside a function are not accessible (visible) from outside the function.Variables declared with var, let and const are quite similar when declared inside a function.

function myFunction() {
  var x = "Sachin";   // Function Scope
}
function myFunction() {
  let y = "Lara";   // Function Scope
}
function myFunction() {
  const z = "Ponting";   // Function Scope
}



Global Scope: When we create any .js file and run it browser by default any think within .js file store in window object. Window is a global object. The window object is a global object that has the properties pertaining to the
current DOM document, which is what's in the tab of a browser. The document property of the window object has the DOM document and associated nodes and methods that we can use to manipulate the DOM nodes and listen to events for each node.
We can access any global scope properties from any block or function scope.

Example:

var x = 10;
let y = 20;
const z = 30;

function childScope(){
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30
}

childScope();

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30


Also We can change or modify any global scope varibale in function scope , block scope. Example:

var a = 20;

function childScopeTwo(){
    a = 30;
    console.log(a); // 30
}

childScopeTwo();

console.log(a); // 30

/**
 * but if we not defined any variable but assign like y=10 in child scope then by default javascript 
 * check it varibale defined in parent scope means global scope but not defined then javascript by default
 * defined it..following example:
 *
 */

function childScopeFour(){
    z = 50;
    console.log(z); // 50
}
//childScopeFour()
//console.log(z);// 50


here i don't defined z but javascript by default defined it. control this javascript behaviour we use 'use strict' top in the .js file..after use strict we get reference error.

we can access global varibale using window object when we run .js file in browser like:


console.log(window.x); // 10
console.log(window.a); // 20