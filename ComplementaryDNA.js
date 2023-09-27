// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// @ts-checku

/**
 * 
 * @param {string} dna
 * @returns {any}
 */

function DNAStrand(dna) {
    const result = Array.from(dna).map(element => {
        if (element === 'A') return 'T'
        if (element === 'T') return 'A'
        if (element === 'G') return 'C'
        if (element === 'C') return 'G'
    })
    return result.reduce((accumulator, element) => accumulator += element)
}


function DNAStrand_dic(dna) {
    const pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}

console.log(DNAStrand("GTAT"))
console.log(DNAStrand_dic("GTAT"))