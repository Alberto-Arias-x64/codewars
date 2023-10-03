function searchInMatrix(matrix = [], objetivo) {
    const horizontal = matrix[0].length
    const vertical = matrix.length
    let dy = 0
    let dx = 0
    while (true) {
        if (matrix[dy][0] <= objetivo && matrix[dy][horizontal - 1] >= objetivo) break
        else if (dy !== vertical) dy++
        else return false
    }
    while (true) {
        if (matrix[dy][dx] <= objetivo && matrix[dy][dx] >= objetivo) break
        else if (dx !== horizontal) dx++
        else return false
    }
    return [dy, dx]
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
]

console.log(searchInMatrix(matrix, 3))
console.log(searchInMatrix(matrix, 16))