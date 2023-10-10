// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

/* function doubleChar(str) {
    let res = ""
    const list = Array.from(str)
    list.forEach(element => res += (`${element}${element}`))
    return res
} */

/* const mi_lista = [1,2,3,"k","0",6,7,8,9,0,456456,345234,456478,true + true - false]
console.log(mi_lista[13]) */

function duplicar(nombre = "") {
    let resultado = ""
    //nombre.length
    for (let index = nombre.length - 1; index > 0; index-=1) {
        resultado = resultado.concat(nombre[index] + nombre[index])
    }
    return resultado
}

console.log(duplicar("mereketenge")) // 13
console.log(duplicar("no se")) //5