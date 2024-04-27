// 8. Crie uma função chamada menorNumero que recebe três números como parâmetros e retorna o menor deles.

function menorNumero(a, b, c) {
    if (a <= b && a <=c) {
        return a
    } else if (b <= a && b <= c) {
        return b
    } else {
        return c
    }    
}

const menor = menorNumero(11,45,19)
console.log("Menor número: " + menor)