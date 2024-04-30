// 1. Crie um modulo de calculadora, exportando as 4 operações básicas: somar, subtrair, dividir, multiplicar
// - Dentro de outro arquivo, importar as funções e executar as operações


const calculadora = require('./exercicio1.calculadora');

console.log(calculadora.somar(2, 3))
console.log(calculadora.subtrair(4, 3))
console.log(calculadora.dividir(12, 6))
console.log(calculadora.multiplicar(7, 2))