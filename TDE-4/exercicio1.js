// 1. Crie uma função de soma que precisará ter como resultado um número par. 
// Para isso, você precisará criar os seguintes callbacks:
// - callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par (resultado da soma).
// - callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).


const soma = (n1, n2, sucess, error) => {
    const result = n1 + n2;
    if (result % 2 === 0) return sucess(result)
    error(result)
}

const ehPar = (result) => {
    console.log(result, "é par")
}

const ehImpar = (result) => {
    console.log(result, "é ímpar")
}

soma(1, 3, ehPar, ehImpar)