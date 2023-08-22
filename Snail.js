// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

snail = function (array) {
    const rest = []
    const horizontal = array[0].length
    const vertical = array.length
    let counter = 0
    let x = [0, 0, horizontal - 1]
    let y = [0, 0, vertical - 1]
    let dir = "E"
    let turn = 0
    while (counter < horizontal * vertical) {
        rest.push(array[y[0]][x[0]])
        if (dir === "E") {
            if (x[0] === x[2]) {
                dir = "S"
                y[0]++
                turn++
                if (turn > 2) y[2]--
            }
            else x[0]++
        }
        else if (dir === "S") {
            if (y[0] === y[2]) {
                dir = "W"
                x[0]--
                turn++
                if (turn > 2) x[1]++
            }
            else y[0]++
        }
        else if (dir === "W") {
            if (x[0] === x[1]) {
                dir = "N"
                y[0]--
                turn++
                if (turn > 2) y[1]++
            }
            else x[0]--
        }
        else if (dir === "N") {
            if (y[0] === y[1]) {
                dir = "E"
                x[0]++
                turn++
                if (turn > 2) x[2]--
            }
            else y[0]--
        }
        counter++
    }
    return rest
}

console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))