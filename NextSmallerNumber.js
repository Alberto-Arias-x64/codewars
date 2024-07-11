// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None),
// when there is no smaller number that contains the same digits.
// Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.
// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

function nextSmaller(n = 0) {
  const arr = n.toString().split('')
  let i = 1
  let res = 0
  while (i < arr.length) {
    const windowFirst = arr[arr.length - i]
    const windowSecond = arr[arr.length - i - 1]
    if (windowFirst < windowSecond) {
      const secondPart = arr.slice(arr.length - i - 1, arr.length)
      const firstPart = arr.slice(0, arr.length - i - 1)
      const sort = secondPart.slice(1, secondPart.length).sort((a, b) => b - a)
      const firstNumber = sort.find(e => e < secondPart[0])
      const rest = secondPart.join('').replace(firstNumber, '').split('').sort((a, b) => b - a)
      rest.unshift(firstNumber)
      const total = rest.join('')
      if (total[0] === '0' && firstPart.length === 0) break
      else {
        res = Number(firstPart.join('') + total)
        break
      }
    }
    i++
  }
  return res ? res : -1
}

// console.log(nextSmaller(513), 351)
console.log(nextSmaller(59884848483559), 59884848459853)
// console.log(nextSmaller(907), 790)
// console.log(nextSmaller(531), 513)
// console.log(nextSmaller(135), -1)
// console.log(nextSmaller(2071), 2017)
console.log(nextSmaller(1027), -1)
// console.log(nextSmaller(414), 144)
// console.log(nextSmaller(1234567908), 1234567890)
