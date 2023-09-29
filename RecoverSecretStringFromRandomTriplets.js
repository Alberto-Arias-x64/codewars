// There is a secret string which is unknown to you. 
// Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such 
// that each letter occurs somewhere before the next in the given string.
// "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they
// contain sufficient information to deduce the original string. In particular, this means that the secret string 
// will never contain letters that do not occur in one of the triplets given to you.

const triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]

var recoverSecret = function (triplets = []) {
    const graph = {}
    let result = "";
    let visited = new Set();
    triplets.forEach(elements => {
        if (!graph[elements[0]]) graph[elements[0]] = new Array()
        if (!graph[elements[1]]) graph[elements[1]] = new Array()
        if (!graph[elements[2]]) graph[elements[2]] = new Array()
        if (!graph[elements[0]].includes(elements[1])) graph[elements[0]].push(elements[1])
        if (!graph[elements[1]].includes(elements[2])) graph[elements[1]].push(elements[2])
        if (!graph[elements[0]].includes(elements[2])) graph[elements[0]].push(elements[2])
    })

    function dfs(char) {
        visited.add(char);
        graph[char].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        });
        result = char + result;
    }

    Object.keys(graph).forEach(char => {
        if (!visited.has(char)) {
            dfs(char);
        }
    });

    return result;
}

console.log(recoverSecret(triplets1)) //whatisup