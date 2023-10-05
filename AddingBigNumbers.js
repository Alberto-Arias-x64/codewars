// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    const aArray = a.split('')
    const bArray = b.split('')
    let maxLength = 0
    let carry = 0
    const response = []
    if (aArray.length > bArray.length) {
        aArray.unshift(0)
        maxLength = aArray.length
        while (bArray.length < maxLength) {
            bArray.unshift('0')
        }
    }
    else {
        bArray.unshift(0)
        maxLength = bArray.length
        while (aArray.length < maxLength) {
            aArray.unshift('0')
        }
    }
    for (let index = maxLength; index > 0; index--) {
        let number = (Number(aArray[index - 1]) + Number(bArray[index - 1]))
        if (carry > 0) {
            number += carry
            carry = 0
        }
        if (number >= 10) {
            response.unshift(number % 10)
            carry = parseInt(number / 10)
        }
        else response.unshift(number)
    }
    if (response[0] === 0) response.shift()
    return '' + response.reduce((acc,element) => acc += `${element}`)
}


// console.log(add("1", "1")) //"2"
// console.log(add("123", "456")) //"579"
// console.log('response ' + add("888", "222")) //"1110"
// console.log(add("1372", "69")) //"1441"
// console.log(add("12", "456")) //"468"
// console.log(add("101", "100")) //"201"
console.log(add('63829983432984289347293874', '90938498237058927340892374089')) //"91002328220491911630239667963"