let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

/*
a. Explique o que essa função faz e qual é sua utilidade
R: A função transforma o texto de entrada, convertendo os caracteres para caixa baixa e verifica se a palavra cenoura está inclusa no texto

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` true
     ii.  `CENOURA é bom pra vista` true
     iii. `Cenouras crescem na t` true
*/