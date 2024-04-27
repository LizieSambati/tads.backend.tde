// 6. Escreva uma função chamada gerarLista que aceita um número inteiro positivo n e uma função de geração como parâmetros. 
// A função de geração deve receber um índice e retornar o valor correspondente da lista. 
// A função gerarLista deve criar uma lista de tamanho n, preenchendo cada elemento com o resultado da função de geração.


const gerarLista = (n, gerarNumero) => {
    const newArr = []
    for (let i = 0; i < n; i++) {
        const element = gerarNumero(i)
        newArr.push(element)
    }
    return newArr
}

const arr = gerarLista(10, (n) => n * 3)
console.log(arr)