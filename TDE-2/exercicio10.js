// 10. Crie uma função que receba um número como parâmetro e retorne o fatorial desse número.

function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(4))