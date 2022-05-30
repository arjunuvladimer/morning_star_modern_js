// Decision Making
// if
// Syntax: if(expression){

// }
var a = 10
if(a == 11){
    console.log(true)
} // exit the block if the statement of expression is false


// if else
if(a == 11){
    console.log(true)
} else{
    console.log("I am printing false")
}

// nested if
var b = 11
if(a==11){
    console.log("Printing a value" + a)
    if(b == 11){
        console.log("Printing b value" + b)
    }
}
var c = 10
// switch
switch (c) {
    case 11:
        console.log("case 1 true")
    case 11:
        console.log("case 2 true")
       
    case 12:
        console.log("case 3 true")
    case 11:
        console.log("case 4 true")
    case 11:
        console.log("case 5 true")
    default:
        console.log("case 6 true")
}


// Loops 

// for loop
// for(intialization; condition/expression; update )
for(var i = 0; i < 10; ++i){
    console.log(i)
}
// for in loop
var obj = {
    fname:'arjun',
    lname:'sn',
    id:1232
}
for(var key in obj){
    console.log(obj[key])
}
// for of loop
var array = [1,2,3,4]
for(var i of array){
    console.log(i)
}
// while loop
var d = 12
while(d < 20){
    console.log(d)
    d++
}
// do while loop
var i = 11
do{
    console.log("Hello world")
    i++
}while(i<11)