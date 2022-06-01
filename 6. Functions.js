// Functions

// General Function Expression
function generalFunctionExpression(){
    var a = 10
    var b = 11
    console.log("hello world")
} // Function Definition

generalFunctionExpression()// Functional Call
generalFunctionExpression()// Functional Call

// Parameterized Functions
function parameterizedFunction(a, b){ // pass by values
    var c = a + b
    console.log(c)
}
parameterizedFunction(c=10,d=14) // pass by reference 

// Default Parameter
function defaultParameterFunction(a,b=10){
    var c = a * b
    console.log(c)
}
defaultParameterFunction(2,11); // Functional Call

// Anonymous Function => No Function Name
(function (a=10,b=11){
    var c = a /b
    console.log(c)
})(10,2); // Immediately Invoked Function Expresssion 
// Or Tail Call Optimization

// Lambda Function or Fat Arrow Function
(
    (a = 10, b = 12) => {
        var c = a + b
        console.log(c)
    }
)(20,30);

((a=10,b=12) => console.log("hello world"))()

// Variables to lamda functions
var add = (a=10,b=12) => console.log("hello world")
add()// Function Call

var display = a => console.log(a)
display(10)

var a = 10

var  display2 = () => {
    console.log("some statement")
    return 10
}
console.log(display2())

// Recurive Functions
function factorial(num){
    if(num<=0) return 1
    return num * factorial(num -1)
    // 5 * factorial(5 -1)
            // 4 * factorial(4 -1)
                // 3 * factorial(3 -1)
                    // 2 * factorial(2 -1)
                        // 1 * factorial(1 -1)
                            // 1 * 1
}

console.log(factorial(5))


// Callback Functions
function messaging(fnSms,fnEmail){ // Function Definition Messaging
    console.log("Messaging")
    fnSms() // Functional Call of fnSMS
    fnEmail() // Functional Call of fnEmail
}

messaging(function fnSms(){
    console.log("Printing SMS")
}// Function Definiton of FNSMS
, function fnEmail(){
    console.log("Printing Email")
}// Function Defintion of FnEmail
)// Functional Call of Messaging Function

// Note:
// Function/ Function Definition as a parameter is passed
// Functional Calls are being done in a call back way

// Synchronous Functions
function addition(){
   console.log("Addition Function") 
}
function subtract(){
    console.log("Subtract Function") 
}
function multiplication(){
    console.log("Multiplication Function") 
}
function division(){
    console.log("Division Function") 
}

// Asynchronous Programming
addition()
subtract() // delay of time
multiplication()
division()