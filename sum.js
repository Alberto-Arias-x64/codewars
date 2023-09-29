// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
    let res = 0
    if(a < b){
        for (let index = a; index <= b; index++) {
            res += index
        }
        return res
    }
    else if(a > b){
        for (let index = b; index <= a; index++) {
            res += index
        }
        return res
    }
    else return a
}

console.log(getSum(-50,0)) // -1325
console.log(getSum(-69,448)) // 98092