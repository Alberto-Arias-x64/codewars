// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  let oddCounter = 0
  let lastOdd = 0
  let evenCounter = 0
  let lastEven = 0
  integers.forEach((element) => {
    if (element % 2 === 0) {
        evenCounter ++
        lastEven = element
    }
    else {
        oddCounter ++
        lastOdd = element
    }
  })
  if (oddCounter === 1) return lastOdd
  return lastEven
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
