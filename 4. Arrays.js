// Single Dimensional Array
var array1 = [1,2,3,4,5,6]
// Multi Dimensional Array
var array2 = [[1,2],[3,4]]

console.log(array2[1][1])


// Matrices
// 1 2                  5   6
// 3 4 // 2X2 Matrix    7   8 // 2X2 Matrix
// 1 + 5    2 + 6
// 3 + 7    4 + 8
// 6  8
// 10 12
var matrix1 = [[1,2],[3,4]]
var matrix2 = [[5,6],[7,8]]
var sum = [[],[]]
for(var i = 0; i < matrix1.length; i++){
    for(var j=0; j < matrix2.length; j++){
           sum[i][j] = matrix1[i][j] + matrix2[i][j]
        // sum[0][0] = matrix1[0][0] + matrix2[0][0]
        // sum[0][0] = 1 + 5
        // sum[0][1] = matrix1[0][1] + matrix2[0][1]
        // sum[0][1] = 2 + 6
        // sum[1][0] = matrix1[1][0] + matrix2[1][0]
        // sum[1][0] = 3 + 7
        // sum[1][1] = matrix1[1][1] + matrix2[1][1]
        // sum[1][1] = 4 + 8
    }
}
console.log(sum)

// Matrices
// 1 2                  5   6
// 3 4 // 2X2 Matrix    7   8 // 2X2 Matrix
// 1 * 5 + 2 * 7    1 * 6 + 2 * 8
// 3 * 5 + 4 * 7    3 * 6 + 4 * 8
// 19 22
// 43 50


var array1 = [1,2,3,4]
var array2 = new Array(1,2,3,4)

// Built in Methods
// 1. Concat Method
// Array.concat(array1,array2,array3,...)
// Syntax: used to merge multiple arrays
var alpha = ["a","b","c"]
var numeric = [1,2,3]
var alphaNumeric = alpha.concat(numeric)
console.log("Concat Method" + alphaNumeric)

// 2. Every Method
// Array.every(callback(element,index))
// Iterate each element in the array and gives the result as boolean
// statement
var everyResult = [1,10,12,13].every(
    (value,idx) => {
        return idx < 3
    }
)
console.log("Every Method: " + everyResult)

// 3. Filter Method(***)
// Syntax: Array.filter(callback)
var filterResult = [12,15,5,8,23,44].filter((value) => {
    return value < 10
})
console.log("Filter Method: " + filterResult)

// 4 For Each Method
// Syntax: Array.forEach(callback(element,idx))
var forEachResult = [12,13,14,15,16].forEach((value,idx) =>{
    console.log("For Each Method" + value * 2)
})

// 5. Reverse Method
// Syntax: Array.reverse() [never use]
var reverseResult = [1,2,3,4,8].reverse()
console.log("Reverse Array:" + reverseResult)

// 6. Index of Method
// Syntax: Array.indexOf()
var indexOfArray = [5,5,132,123,1].indexOf(132)
console.log("Index of Method" + indexOfArray)

// 7. Join Method
// Syntax: Array.join(seperator)
var joinArray = new Array("Hello","Arjun","How are you")
var stringJoin = joinArray.join("!")
console.log("Join Method" + stringJoin)

// 8. Last Index of Method
// Syntax: Array.lastIndexOf(element)
var indexOfLastElement = [1,2,34,53423,2312,12,1].lastIndexOf(2312)
console.log("Last index of Method:" + indexOfLastElement)

// 9. Map Method(*****)
// Syntax: Array.map(callback)
var arrayForMap = [12,3,2,123,3]
let newArrayForMap = arrayForMap.map(value => value * 2)
console.log("Map Method:" + newArrayForMap)

// 10. Pop Method
// Syntax: Array.pop()
var lastElementofArray = ["Jay","Arjun","Jenny","Ludmilla"].pop()
console.log("POP Method: " + lastElementofArray)
