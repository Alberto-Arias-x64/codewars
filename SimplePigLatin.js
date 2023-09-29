// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str = "") {
    const words = str.split(" ")
    return words.map(word => {
        if (word.length > 1) {
            const res = word += `${word[0]}ay`
            return res.substring(1)
        }
        else if (word.match(/[a-zA-Z]/gm)) return word += "ay"
        return word
    }).reduce((acc, element) => acc += ` ${element}`)
}

function pigIt_regex(str) {
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt_regex("Pig latin is cool")) // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")) // elloHay orldway !