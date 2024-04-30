// 1. Crie um modulo de calculadora, exportando as 4 operações básicas: somar, subtrair, dividir, multiplicar
// - Dentro de outro arquivo, importar as funções e executar as operações


const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const dividir = (a, b) => {
    if (b === 0) {
        console.log('Divisão por zero não é permitida.')
        return Infinity;
    }
    return a / b;
}
const multiplicar = (a, b) => a * b;

module.exports = {somar, subtrair, dividir, multiplicar};