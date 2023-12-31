// Take the following IPv4 address: 128.32.10.1

// This address has 4 octets where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

// Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

// Examples
// 2149583361 ==> "128.32.10.1"
// 32         ==> "0.0.0.32"
// 0          ==> "0.0.0.0"

function int32ToIp(int32) {
    let binary = ''
    while (int32 > 0) {
        const module = int32 % 2
        binary += module ? "1" : "0"
        int32 = module ? (int32 - 1) / 2 : int32 / 2
        if (int32 === 1) {
            binary += "1"
            break
        }
    }
    if (binary.length < 32) {
        const arrLength = 32 - binary.length
        for (let index = 0; index < arrLength; index++) {
            binary += "0"
        }
    }
    const toDecimal = (num) => {
        let result = 0
        Array.from(num).forEach((element, index) => {
            if (element == 1) {
                result += Math.pow(2, 8 - index)
            }
        })
        return result / 2
    }
    const array = Array.from(binary).reverse().join(', ').replace(/,\s/gm, '')
    const first = array.slice(0, 8)
    const second = array.slice(8, 16)
    const third = array.slice(16, 24)
    const four = array.slice(24, 32)
    return `${toDecimal(first)}.${toDecimal(second)}.${toDecimal(third)}.${toDecimal(four)}`
}

console.log(int32ToIp(32))