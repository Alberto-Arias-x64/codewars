// Overview
// Dadas dos listas de números enteros nums1 y nums2, cada una ordenada en orden ascendente, 
// y dos enteros m y n, que representan la cantidad de elementos en nums1 y nums2 respectivamente.
// .
// Combinar nums1 y nums2 en un único array ordenado de forma ascendente.
// .
// Para ello, nums1 tienen una longitud de m+n, donde los primeros m elementos denotan los elementos que deben ser combinados, 
// y los últimos n elementos son 0 y deben ser ignorados.
// .

// si en una lista hay 3 elementos y en la otra 4, entonces nums1 tiene 7
// Ejemplo

// nums1 = [1, 2, 3, 0, 0, 0]
// m = 3
// nums2 = [2, 5, 6]
// n = 3

// ---> [1, 2, 2, 3, 5, 6]

function MergeTwoSortedLists(list1, list2) {
    let counter1 = 0
    let counter2 = 0
    const result = []
    const list3 = list1.slice(0, list1.findIndex(element => element === 0))
    for (let index = 0; index < list1.length; index++) {
        if (list3[counter1] < list2[counter2]) {
            result.push(list3[counter1])
            counter1++
        }
        else {
            result.push(list2[counter2])
            counter2++
        }
    }
    return result
}

console.log(MergeTwoSortedLists([1, 2, 3, 0, 0, 0, 0], [-4,2, 5, 6]))