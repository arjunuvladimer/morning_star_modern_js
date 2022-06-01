// category identity operator value
console.log(l)
var l
// Definition, Intialization, Declaration
var e; // Declaration => &7380943432 which belongs to var
e = 10 // Intialization 
e = 11 // Update the value => Reinitialize

var e // Redeclaration  => &24383203 which belongs to var
e = "hello"

var h = 1023809 // Definition
var a = 10.123214
var b = "ddssd"
var c = true
var d = null
var e = undefined
console.log(a)
var f = [1,2,3,"hello",5,6] // Structured Data or Data Structure
// Based on index positions => 0,1,2,3,4,5 => Javascript Engine
var g = {
    fname: "arjun",
    lname: "sn" ,
    id: 123
} 
// Unstructured Data => Javascript Engine doesn't know about the structure 



// Primitive Data Types
// 1. Number => [int, float, double]
// 2. String or Character
// 3. Boolean
// 4. Null
// 5. Void

// Non Primitive Data Types
// 1. Array
// 2. Object



// Category Var
// 1. Storing the value
// 2. Updating the value
// 3. Scope
// 4. It can accept only specific set of data


// SCOPE OF VARIABLES
// Global Scope
var i = 10 
function add(){
    console.log(i)
    function inside(){
        console.log(i)
    }
    inside()
}
add()
// Local/Functional Scope
function subtract(){
    var j = 11 // Locally belongs to subtract function
    console.log(j)
}
console.log(subtract)

// Block Scope
{
    let k = 123
    const l = 1229
}
// console.log(k)

// Hoisting
// Variable Hoisting: 
// All the declarations will be taken to the top by JS Engine

var check = false
if(check){
    let someVariable = 10
}else{
    console.log("b is not declared")
}
console.log(someVariable)

{
    let a = 10
    let b = 11

}
// var check2
// check2 = 123
// let check1
// check1 = 213
// const checki = 12332

// Let and const also hoisting happens it is blocked by a 
// thing called temporal dead zone
// Note: const cannot be declared it always have to be defined








































// console.log(k)
// Lexical Scope


