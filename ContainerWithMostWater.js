function ContainerWithMostWater(list) {
    let result = 0
    let counter1 = 0
    let counter2 = list.length - 1

    const calculateWater = (height1, height2, distance) => {
        if (height1 < height2) return height1 * distance
        return height2 * distance
    }

    for (let index = 0; index < list.length; index++) {
        if (result < calculateWater(list[counter1], list[counter2], counter2 - counter1)) result = calculateWater(list[counter1], list[counter2], counter2 - counter1)
        if (list[counter1] < list[counter2]) counter1++
        else counter2++
    }

    return result
}

console.log(ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))