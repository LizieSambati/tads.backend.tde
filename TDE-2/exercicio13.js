// 13. Faça um programa que verifique se um número é negativo, positivo ou zero.

function verificarNumero (num) {
    if (num > 0) {
        return "número positivo"
    } else if (num < 0) {
        return "número negativo"
    } else {
        return "zero"
    }
}

console.log(verificarNumero(-9))