// 3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros. 
// A função mapearArray deve aplicar a função recebida a cada elemento do array 
// e retornar um novo array com os elementos resultantes.

const mapearArray = (arr, filtro) => {
    const newArr = []
    for (let element of arr) {
        const filtrado = filtro(element)
        if (filtrado) newArr.push(filtrado)
    }
    return newArr
}

const arr = [2, 4, 6, 8, 10]
const somar = (e) => (e + 10)
const newArr = mapearArray(arr, somar)
console.log(newArr)