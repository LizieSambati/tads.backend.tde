// 2. Escreva uma função chamada somaElementosPares que aceita um array de números como parâmetro 
// e retorna a soma de todos os elementos pares do array.

const somaElementosPares = (arr) => {
    let soma = 0
    for (let element of arr) {
        if (element % 2 === 0) {
            soma += element
        }
    }
    return soma
}

console.log(somaElementosPares([2, 3, 7, 1, 32]))