// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    const find = arr.sort((element_1, element_2) => {
        if (element_2 === 0) return -1
        else return 0
    })
    return find
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))