// https://en.wikipedia.org/wiki/Regular_number
// A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

// Specifically:

// The first smallest Hamming number is 1 = 2^0*3^0*5^0
// The second smallest Hamming number is 2 = 2^1*3^0*5^0
// The third smallest Hamming number is 3 = 2^0*3^1*5^0
// The fourth smallest Hamming number is 4 = 2^2*3^0*5^0
// The fifth smallest Hamming number is 5 = 2^0*3^0*5^1
// The sixth smallest Hamming number is 6 = 2^1*3^1*5^0
// The seventh smallest Hamming number is 8 = 2^3*3^0*5^0
// The eighth smallest Hamming number is 9 = 2^0*3^2*5^0
// The ninth smallest Hamming number is 10 = 2^1*3^1*5^1
// The tenth smallest Hamming number is 12 = 2^2*3^2*5^0
// The eleventh smallest Hamming number is 15 = 2^3*3^1*5^0
// The twelfth smallest Hamming number is 16 = 2^4*3^0*5^0
// The thirteenth smallest Hamming number is 18 = 2^2*3^3*5^0
// The fourteenth smallest Hamming number is 20 = 2^4*3^1*5^0
// The 20 smallest Hamming numbers are given in the Example test fixture.

// Your code should be able to compute the first 5 000 ( LC: 400, Clojure: 2 000, Haskell: 12 691, NASM, C, D, C++, Go and Rust: 13 282 )
// Hamming numbers without timing out.

function hamming(n) {
  const index = [0, 0, 0]
  const result = [1] 

  const formula = (index) => [
    result[index[0]] * 2,
    result[index[1]] * 3,
    result[index[2]] * 5
  ]

  while (result.length < n) {
    const [two, three, five] = formula(index)
    const nextHamming = Math.min(two, three, five)
    result.push(nextHamming)
    
    if (nextHamming === two) index[0]++
    if (nextHamming === three) index[1]++
    if (nextHamming === five) index[2]++
  }

  return result.at(-1)
}


console.log(hamming(10))
