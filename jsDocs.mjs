// @ts-check
"use strict"

import utils from "nodemon/lib/utils"

/** @type {string} */
let word
word = '0'

const primitive_1 = 0x55
const primitive_2 = 0x55

console.log(word)


/** @type {{id: number, name: string, age: number}} */
const simio = {
    id: 1,
    name: 'Nicolas',
    age: 25
}

const person = [simio]
/**
* Function to retrieve a person using an id
* @param {number} id Identificator for the person
* @returns td: number, name: string, age:
*/
const getPerson = (id) => {
    return Promise.resolve(person.find(person => person.id === id))
}


class nepe {
    constructor(carName = ''){
        this.value = 0
        this.name = carName
    }
}

const carro = new nepe('ss')

console.log(carro.name)

function names (params) {
    return (param_2) => {
        return params + param_2
    }
}

console.log(names(2)(3))