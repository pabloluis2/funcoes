let nomeG = prompt("Informe seu nome:")
let idadeG = prompt("Informe sua idade:")
let cidadeG = prompt("Informe a cidade em que você mora:")
let profissaoG = prompt("Informe sua profissão:")

function apresentacao1(){
    console.log(`Eu sou ${nomeG}, tenho ${idadeG} anos, moro em ${cidadeG} e sou ${profissaoG}.`)
}

function apresentacao2(nomeF,idadeF,cidadeF,profissaoF){
    return `Eu sou ${nomeF}, tenho ${idadeF} anos, moro em ${cidadeF} e sou ${profissaoF}.`
}


apresentacao1()

console.log(apresentacao2(prompt("Informe seu nome:"),prompt("Informe sua idade:"),prompt("Informe a cidade em que você mora:"),prompt("Informe sua profissão:")))