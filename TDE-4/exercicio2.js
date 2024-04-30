// 2. Utilize a função anterior para criar uma promise que tenha:
// - then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
// - catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.
// Dica: Utilize uma promise com função (resolve, reject).

const somaPromise = (n1, n2) => {
    return new Promise((sucess, error) => {
        const result = n1 + n2;
        if (result % 2 === 0) return sucess(result)
        error(result)
    })
}

const ehPar = (result) => {
    console.log(result, "é par")
}

const ehImpar = (result) => {
    console.log(result, "é ímpar")
}

somaPromise(1, 2).then(ehPar).catch(ehImpar)