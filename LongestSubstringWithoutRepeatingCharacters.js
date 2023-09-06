function LSWRC(substring = "") {
    let result = 0
    let accumulator = ""
    for (let index = 0; index < substring.length; index++) {
        accumulator += substring.charAt(index)
        if (accumulator.includes(substring.charAt(index + 1))){
            if (result < accumulator.length) result = accumulator.length
            accumulator = ""
        }
    }
    return result
}

console.log(LSWRC("abcabcbb"))
console.log(LSWRC("jdkafnlcdsalkxcmpoiuytfccv"))