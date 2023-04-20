//bigInt
//Nullish Coalescing Operator ??
//Optional Chaining Operator ?.
//Promise.allSettled
//globalThis

let will_pokemon = {
    pikachu: {
        species: `Mouse`,
        height: 0.4,
        weight: 6
    }
}

let george_pokemon = {
    raichu: {
        species: `Mouse`,
        height: 0.8,
        weight: 30
    }
}

// let weight = will_pokemon.pikachu.weight
// console.log(weight)
if (george_pokemon.pikachu && george_pokemon.pikachu.weight){
    let weight2 = george_pokemon.pikachu.weight
} else {
    let weight2 = undefined
} // in loc de asta putem folosi ==>>
//==>>
let weight3 = george_pokemon?.pikachu?.weight
console.log(weight3);

// let weight2 = george_pokemon.pikachu.weight
// console.log(weight2)
