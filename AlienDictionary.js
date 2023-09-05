// # Input
// palabras = ['conocer', 'cono']
// orden_alfabeto = 'abcdfghijklmnopqrstuvwxyz'
// # Ouput: 
// False

// # Input
// palabras = ['habito', 'hacer', 'lectura', 'sonreir']
// orden_alfabeto - 'hlabcdefgikmnopqrstuvqxyz'
// # Output:
// True

const alphabet0 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'q', 'x', 'y', 'z']
const alphabet1 = ['h', 'l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'q', 'x', 'y', 'z']

function alienDictionary(wordsArray, dictionary) {
    dictionary = Array.from(dictionary)
    const comparer = (word1, word2) => {
        word1 = Array.from(word1)
        word2 = Array.from(word2)
        for (let index = 0; index < word1.length; index++) {
            const index1 = dictionary.findIndex(element => element === word1[index])
            const index2 = dictionary.findIndex(element => element === word2[index])
            if (index2 === index1) { }
            else if (index2 < index1) return false
            else return true
        }
    }
    for (let index = 0; index < wordsArray.length; index++) {
        if (index === 0) { }
        else if (!comparer(wordsArray[index - 1], wordsArray[index])) return false
    }
    return true
}

console.log(alienDictionary(['habito', 'hacer', 'lectura', 'sonreir'], alphabet1))