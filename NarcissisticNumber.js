function nn (value){
    if (typeof(value) !== "number") return false
    const number = value.toString()
    const list = Array.from(number)
    const powList = list.map(element => Math.pow(element, number.length))
    const sum = powList.reduce((accumulator, currentValue) => accumulator + currentValue)
    return sum === value
}
console.log(nn(0))