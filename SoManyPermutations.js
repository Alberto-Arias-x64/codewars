// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!

function permutations(stringStart) {
    function per(string) {
        if (string.length === 1) {
            return [string];
        }
        const map = []
        for (var i = 0; i < string.length; i++) {
            let letter = string[i];
            let rest = string.slice(0, i) + string.slice(i + 1);
            let permutationsRest = per(rest)
    
            for (var j = 0; j < permutationsRest.length; j++) {
                map.push(letter + permutationsRest[j])
            }
        }
        return map
    }
    const middle = new Set(per(stringStart))
    const rest = []
    middle.forEach(element => rest.push(element))
    return rest
}
console.log(permutations('abc'))