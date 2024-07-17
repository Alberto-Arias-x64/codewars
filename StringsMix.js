// Given two strings s1 and s2, we want to visualize how different the two strings are.
// We will only take into account the lowercase letters (a to z).
// First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2.
// In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb"
// where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4.
// In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears
// as many times as its maximum if this maximum is strictly greater than 1;
// these letters will be prefixed by the number of the string where they appear with their maximum value and :.
// If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix)
// will be in decreasing order of their length and when they have the same length sorted in
// ascending lexicographic order (letters and digits - more precisely sorted by codepoint);
// the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

function mix(s1 = '', s2 = '') {
  const listS1 = s1
    .split('')
    .filter((e) => e.charCodeAt() > 96 && e.charCodeAt() < 123)
    .sort()
  const listS2 = s2
    .split('')
    .filter((e) => e.charCodeAt() > 96 && e.charCodeAt() < 123)
    .sort()
  const counterS1 = {}
  const counterS2 = {}
  listS1.forEach((e) => (counterS1[e] ? counterS1[e]++ : (counterS1[e] = 1)))
  listS2.forEach((e) => (counterS2[e] ? counterS2[e]++ : (counterS2[e] = 1)))
  const entrieS1 = Object.entries(counterS1).filter((e) => e[1] > 1)
  const entrieS2 = Object.entries(counterS2).filter((e) => e[1] > 1)
  entrieS1.forEach((s1, i1) => {
    entrieS2.forEach((s2, i2) => {
      if (s1[0] === s2[0]) {
        if (s1[1] === s2[1]) return
        else if (s1[1] > s2[1]) entrieS2.splice(i2, 1)
        else entrieS1.splice(i1, 1)
      }
    })
  })
  const res1 = entrieS1.map((e) => `${1}:${e[0].repeat(e[1])}`)
  const res2 = entrieS2.map((e) => `${2}:${e[0].repeat(e[1])}`)
  let res = []
  res = [...res1, ...res2]
  const total = []
  for (let window1 = 0; window1 < res.length; window1++) {
    let repeat = false
    for (let window2 = window1 + 1; window2 < res.length; window2++) {
      if (res[window1][2] === res[window2][2]) {
        repeat = true
        res[window2] = ''
      }
    }
    if (res[window1]) {
      if (!repeat) total.push(res[window1])
      else total.push(res[window1].replace(/[12]/, '='))
    }
  }
  total.sort((a, b) => {
    const lengthA = a.length
    const lengthB = b.length
    const charA = a[2]
    const charB = b[2]

    if (lengthA !== lengthB) return lengthB - lengthA
    if (a.startsWith('1:') && b.startsWith('2:')) return -1
    else if (a.startsWith('2:') && b.startsWith('1:')) return 1
    if (a.startsWith('=') && !b.startsWith('=')) return 1
    else if (!a.startsWith('=') && b.startsWith('=')) return -1
    if (charA !== charB) return charA.localeCompare(charB)

    return 0
  })
  return total.join('/')
}

// console.log(mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff"))
console.log(mix('Are they here', 'yes, they are here'))
