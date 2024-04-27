// 1. Escreva uma função chamada encontrarMaiorElemento que aceita um array de números como parâmetro 
// e retorna o maior elemento do array.

const arr = []
let maior = 0

const encontrarMaiorElemento = () => {
    for (let element of arr) {
        if (arr[i] > maior) {
            maior = arr[i]
        }
    }
    return maior
} 

console.log(encontrarMaiorElemento([16, -33, 55]))