function soma(num1,num2){
    return Number(num1) + Number(num2)
}

function diferenca(num1,num2){
    return Number(num1) - Number(num2)
}

function multiplicacao(num1,num2){
    return Number(num1) * Number(num2)
}

function divisao(num1,num2){
    return Number(num1) / Number(num2)
}

let num1G = Number(prompt("Informe um número:")), num2G = Number(prompt("Informe outro número:"))

console.log(
    `Números inseridos: ${num1G} e ${num2G}\nSoma: ${soma(num1G,num2G)}\nDiferença: ${diferenca(num1G,num2G)}\nMultiplicação: ${multiplicacao(num1G,num2G)}\nDivisão: ${divisao(num1G,num2G)}`
)