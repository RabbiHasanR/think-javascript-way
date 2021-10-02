'use strict'


var x = 10;

function childScope(){
    console.log(x); // 10
}

childScope();

console.log(x); // 10

/**
 * We know when we defined some variable without any function , class, object by default this variable defiend
 * within global object..when script run any browser global object is window. so basicaly here global object or window object is
 * global scope..when we defined some variable with in global scope we access it from any function, object, loop, class  child
 * scope.
 * Thas why here childScope() function print x value 10 and global scope console.log() print 10;
 * We can modify global scope varibale from child scope. Following example:
 */


var a = 20;

function childScopeTwo(){
    a = 30;
    console.log(a); // 30
}

childScopeTwo();

console.log(a); // 30

/**
 * abouve example we show we can modify global scope variable from child scope.
 * that's why childScopeTwo() and console.log() print a variable value 30;
 * But we don't access child scope variable from parent scope.if we do then we get refrerence error.Following example:
 */

function childScopeThree(){
    var b = 40;
    console.log(b); // 40
}

childScopeThree();
//console.log(b); // ReferenceError: b is not defined

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

/**
 * here i don't defined z but javascript by default defined it. control this javascript behaviour 
 * we use 'use strict' top in the .js file..after use strict we get reference error.
 * 
 * by the we can access global varibale using window object when we run .js file in browser like:
 */

console.log(window.x); // 10
console.log(window.a); // 20