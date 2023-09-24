// Friday 13th or Black Friday is considered as unlucky day. 
// Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

//@ts-check

/**
 * @param {number} year 
 * @returns {number}
 */


function unluckyDays(year) {
    const start = new Date(year, 0, 1)
    const finish = new Date(year, 11, 31)
    let result = 0
    for (let index = start; index < finish; index.setDate(index.getDate() + 1)) {
        if (index.getDay() === 5 && index.getDate() === 13) result++
    }
    return result
}

console.log(unluckyDays(2065))