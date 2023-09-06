function TrappingRainWater(list = []) {
    const localMax = []
    let response = 0
    const calculateWater = (start, finish) => {
        const max = list[start] < list[finish] ? list[start] : list[finish]
        if (list[start] < list[finish]) {
            response += list[start] * (finish - start - 1)
        }
        else {
            response += list[finish] * (finish - start - 2)
        }
        const deep = list.slice(start + 1, finish)
        deep.forEach(element => {
            if (element < max) response -= element
        })
    }

    for (let index = 2; index < list.length; index++) {
        if (list[index] < list[index - 1] && list[index - 1] > list[index - 2]) localMax.push(index - 1)
    }
    for (let index = 1; index < localMax.length; index++) {
        calculateWater(localMax[index - 1], localMax[index])
    }
    return response
}

console.log(TrappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
//                             0  1  2  3  4  5  6  7  8  9  10 11
//                                   1     2  2  2        2