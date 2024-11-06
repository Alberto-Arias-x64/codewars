// Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

// How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

// A 1x1 matrix |a| has determinant a.

// A 2x2 matrix [ [a, b], [c, d] ] or

// |a  b|
// |c  d|
// has determinant: a*d - b*c.

// The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

// For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

// |a b c|
// |d e f|
// |g h i|
// the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of
// the 2x2 matrix created by crossing out the row and column in which the element a occurs:

// |- - -|
// |- e f|
// |- h i|
// Note the alternation of signs.

// The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

// det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)

// function determinant(m) {
//   if (m.length === 1) return m[0][0]
//   if (m.length === 2) {
//     return m[0][0] * m[1][1] - m[0][1] * m[1][0]
//   } else {
//     const length = m.length * 2 - 1
//     let matrix = []
//     for (let index = 0; index < length; index++) {
//       let row = m.at(index)
//       if (!row) row = m.at(index - m.length)
//       matrix.push(row)
//     }
//     let forward = 0
//     let backward = 0
//     for (let index = 0; index < m.length; index++) {
//       let line = 1
//       for (let index2 = 0; index2 < m.length; index2++) {
//         line *= matrix[index2 + index][index2]
//       }
//       // console.log(line)
//       forward += line
//     }
//     for (let index = 0; index < m.length; index++) {
//       let line = 1
//       let index3 = 0
//       for (let index2 = m.length - 1; index2 >= 0; index2--) {
//         console.log(matrix[index3 + index][index2])
//         line *= matrix[index3 + index][index2]
//         index3++
//       }
//       console.log("line")
//       backward += line
//     }
//     return forward - backward
//   }
// }

function determinant(m) {
  const n = m.length;
  
  if (n === 1) return m[0][0];
  if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  
  let det = 0;
  
  for (let col = 0; col < n; col++) {
    const subMatrix = m.slice(1).map(row => row.filter((_, j) => j !== col));
    det += ((col % 2 === 0 ? 1 : -1) * m[0][col] * determinant(subMatrix));
  }
  
  return det;
}

const m1 = [
  [4, 6],
  [3, 8],
]
const m2 = [
  [1, 2, 3, 4],
  [5, 0, 2, 8],
  [3, 5, 6, 7],
  [2, 5, 3, 1],
] 
const m5 = [
  [2, 4, 2],
  [3, 1, 1],
  [1, 2, 0],
]

// const m2 = [    Forward | Backward
//   [1, 2, 3, 4], 
//   [5, 0, 2, 8],
//   [3, 5, 6, 7],
//   [2, 5, 3, 1],  0       80
//   [1, 2, 3, 4],  300     240
//   [5, 0, 2, 8],  360     210
//   [3, 5, 6, 7],  56      0
// ]                716     530

console.log(determinant(m2))
