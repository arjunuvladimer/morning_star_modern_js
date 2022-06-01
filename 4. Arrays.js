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
