// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const x = /[Xx]/gm.test(str)
    const o = /[Oo]/gm.test(str)
    const any = /[^XxOo]+/gm.test(str)
    if (x && o && !any) {
        const list = Array.from(str)
        const countX = list.filter(element => /[Xx]/gm.test(element))
        const countO = list.filter(element => /[Oo]/gm.test(element))
        return countO.length === countX.length
    }
    return false
}

function XO2(str) {
    const normalized = str.toLowerCase()
    let counterX = 0
    let counterO = 0
    let counterOther = 0
    Array.from(normalized).forEach(element => {
        if (element === 'x') counterX ++
        else if (element === 'o') counterO ++
        else counterOther ++
    })
    if (counterOther.length > 0) return false
    return counterX === counterO
}

console.log(XO2("xo"))