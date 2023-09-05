function TrappingRainWater(list) {
    const localMax = []
    for (let index = 2; index < list.length; index++) {
        if (list[index] < list[index - 1] && list[index - 1] < list[index - 2]) localMax.push(index - 1)
    }
    return localMax
}

console.log(TrappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
//                             0  1  2  3  4  5  6  7  8  9  10 11