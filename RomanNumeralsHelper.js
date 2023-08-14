// Write two functions that convert a roman numeral to and from an integer value. 
// Multiple roman numeral values will be tested for each function.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
// 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

// Examples
// to roman:
// 2000 -> "MM"
// 1666 -> "MDCLXVI"
// 1000 -> "M"
//  400 -> "CD"
//   90 -> "XC"
//   40 -> "XL"
//    1 -> "I"

// from roman:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      -> 400
// "XC"      -> 90
// "XL"      -> 40
// "I"       -> 1

/* const dic = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
}

class RomanNumerals {

    static toRoman(num) {
        let res = ''
        while (num > 0) {
            if (num - dic.M >= 0) {
                num -= dic.M
                res += 'M'
            }
            else if (num - dic.D >= 0) {
                num -= dic.D
                res += 'D'
            }
            else if (num - dic.C >= 0) {
                num -= dic.C
                res += 'C'
            }
            else if (num - dic.L >= 0) {
                num -= dic.L
                res += 'L'
            }
            else if (num - dic.X >= 0) {
                num -= dic.X
                res += 'X'
            }
            else if (num - dic.V >= 0) {
                num -= dic.V
                res += 'V'
            }
            else if (num - dic.I >= 0) {
                num -= dic.I
                res += 'I'
            }
        }
        if (res.length > 3) {
            const response = Array.from(res)
            res
        }
        return res
    }

    static fromRoman(str) {
        return 4
    }
}

console.log(RomanNumerals.toRoman(9)) */

/* function decimalToRoman(decimal) {
    if (decimal <= 0) return false
    if (decimal >= 4000) return false

    const romanThousands = ['', 'M', 'MM', 'MMM'];
    const romanOnes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const romanTens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const romanHundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

    const romanInteger = romanThousands[Math.floor(decimal / 1000)] +
        romanHundreds[Math.floor((decimal % 1000) / 100)] +
        romanTens[Math.floor((decimal % 100) / 10)] +
        romanOnes[decimal % 10]

    return romanInteger
}

console.log(decimalToRoman(1234))
console.log(decimalToRoman(2019))
console.log(decimalToRoman(0))
console.log(decimalToRoman(4000)) */

class RomanNumerals {

    static toRoman(num) {
        if (num <= 0) return false
        if (num >= 4000) return false

        const romanThousands = ['', 'M', 'MM', 'MMM'];
        const romanOnes = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        const romanTens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
        const romanHundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

        const romanInteger = romanThousands[Math.floor(num / 1000)] +
            romanHundreds[Math.floor((num % 1000) / 100)] +
            romanTens[Math.floor((num % 100) / 10)] +
            romanOnes[num % 10]

        return romanInteger
    }

    static fromRoman(str) {
        for (let index = 1; index < 4000; index++) {
            if(this.toRoman(index) === str){
                return index
            }
        }
        return false
    }
}

console.log(RomanNumerals.fromRoman(''))
