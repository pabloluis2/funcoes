const arFunc1 = (par) => console.log(par)
const arFunc2 = (num1,num2) => Number(num1) + Number(num2)

arFunc1(prompt("Escreva alguma coisa:"))

console.log(arFunc2(prompt("Informe o primeiro numero pra soma:"),prompt("Informe o segundo numero pra soma:")))