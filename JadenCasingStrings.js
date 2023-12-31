// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized 
// in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

String.prototype.toJadenCase = function () {
    const spitedString = this.split(" ")
    const capitalizedString = spitedString.map(element => element[0].toUpperCase() + element.substring(1))
    const response = capitalizedString.reduce((accumulator, element) => accumulator += ` ${element}`)
    return(response)
}

console.log("this is my janden case".toJadenCase())