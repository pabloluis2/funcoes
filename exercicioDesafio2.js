function pitagoras(cat1,cat2){
    return (Number(cat1)**2)+(Number(cat2)**2)
}

console.log(`O valor da hipotenusa é: ${pitagoras(prompt("Informe o valor do primeiro cateto para calcular a hipotenusa:"),prompt("Informe o valor do segundo cateto para calcular a hipotenusa:"))}`)