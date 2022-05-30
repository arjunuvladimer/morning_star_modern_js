// 1. Arithematic Opeartors
// [+,-,*,/,%,++,--]
// left operand and right operand
var a = 10
console.log(a--) // a = a + 1
console.log(a)
var b = 11
console.log(--b) 

// 2. Relational Operators
//[<,>,<=,>=,!=,==,===]
var c = 10
if(c>10){
    console.log(true)
}
// 3. Logical Operators
// [&&, ||, !]
var d = 10 // false
var e = 10 // true => true
if(!(d ==="10" )|| e ===10 ){
    console.log(true)
}
else{
    console.log(false)
}

// 4. Bitwise Operators
// [&,\,^,~,<<,>>,>>>]
// & => Both statements should be true
// | => Either one of the statement should be true
// ^ => Neither both of them should be true or neither both false

var f = -10 // 1010 // 2^3 + 2^2 + 2^1 + 2^0 => 0 + 2 + 0 + 8
var g = 11 // 1011 // 2^3 + 2^2 + 2^1 + 2^0 => 1 + 2 + 0 + 8
//-----------------------------------------------------------
// h = 1 //  0001
var h = f ^ g
var i = ~f  // 10 -1 // +9
console.log(i)

// left shift (<<) position shift of your binary code to left
var j = 10
console.log(j << 2)
// 1010 => 0010 1000

// right shift (>>) position shift of your binary code to left

var k = 10
// 1010 => 0010 
console.log(k>>2)

// >>> zero fill shift

// 5. Assignment Operators
//[=,+=,-=,*=,/=,%=,&=,|=,^=]

var l = 10
l += 12 // l = l + 12
console.log(l)

// 6. Miscellaneous Operators
// [typeof, delete, ?, rest operator, spread operator]
var m = "12312"
console.log(typeof(m))
var obj = {
    fname:"arjun",
    id: 123
}
delete obj.fname
console.log(obj)

// ternary operator
var n = 10
var k = (n == 11 ? 14: 15)
console.log(k)

// + [concatenation]
var p = 10
var q = "hello"
console.log(p * q)
