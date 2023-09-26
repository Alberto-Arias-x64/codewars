// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
//@ts-check

/**
 * 
 * @param {string} words 
 * @returns {string}
 */

function order(words) {
    if (!words) return ""
    const splittedWords = words.split(" ")
    const result = []
    splittedWords.forEach(element => {
        if (element.includes("1")) result[0] = element
        if (element.includes("2")) result[1] = element
        if (element.includes("3")) result[2] = element
        if (element.includes("4")) result[3] = element
        if (element.includes("5")) result[4] = element
        if (element.includes("6")) result[5] = element
        if (element.includes("7")) result[6] = element
        if (element.includes("8")) result[7] = element
        if (element.includes("9")) result[8] = element
    })
    return result.reduce((acc, element) => acc += ` ${element}`)
}

console.log(order("is2 Thi1s T4est 3a"))