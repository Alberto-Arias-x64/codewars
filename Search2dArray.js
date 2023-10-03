function searchInmatriz(matriz = [], objetivo) {
    const horizontal = matriz[0].length
    const vertical = matriz.length
    let dy = 0
    let dx = 0
    while (true) {
        if (matriz[dy][0] <= objetivo && matriz[dy][horizontal - 1] >= objetivo) break
        else if (dy !== vertical) dy++
        else return false
    }
    while (true) {
        if (matriz[dy][dx] <= objetivo && matriz[dy][dx] >= objetivo) break
        else if (dx !== horizontal) dx++
        else return false
    }
    return true
}

const matriz = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
]

console.log(searchInmatriz(matriz, 3))
console.log(searchInmatriz(matriz, 16))