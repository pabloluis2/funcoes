function soma(num1,num2){
    return Number(num1) + Number(num2)
}

console.log(soma(prompt("Informe o primeiro número para soma:"),prompt("Informe o segundo número para soma:")))

function maiorIgual(num1,num2){
    return  Number(num1) >= Number(num2)
}

console.log(maiorIgual(prompt("Informe o primeiro número para comparação:"),prompt("Informe o segundo número para comparação:")))

function ePar(num1){
    return (num1 % 2) === 0
}

console.log(ePar(prompt("Informe um número para verificar se é par:")))

function tamanhoFrase(texto){
    console.log(`O tamanho do texto é: ${texto.length}\nE sua versão toda maiúscula é: ${texto.toUpperCase()}`)
}

tamanhoFrase(prompt("Insira uma frase para verificar seu tamanho:"))