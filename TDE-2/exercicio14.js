// 14. Escreva uma função que receba dois números como parâmetros e 
// retorne verdadeiro se a soma deles for divisível por 5 e falso caso contrário.

function divCinco (a, b) {
    return (a+b)%5 === 0
}

console.log(divCinco(23, 5))