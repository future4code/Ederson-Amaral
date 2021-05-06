// --- EXERCÍCIO 1 ------------------------------------------------------------------


// function imprimeOlaMundo() {
//   console.log('Olá mundo')
// }

// imprimeOlaMundo()





// --- EXERCÍCIO 2 ------------------------------------------------------------------
// function imprimeOlaNome (nome) {
//   console.log(`Olá ${nome}`)
// }

// const nomeInserido = prompt('Insira seu nome')
// imprimeOlaNome(nomeInserido)
// imprimeOlaNome('Vitória')
// imprimeOlaNome('Luis')



// --- EXERCÍCIO 3 ------------------------------------------------------------------

//Exemplo 

// function calculaArea(altura, largura) {
//   const area = altura * largura //number
//   console.log(area)
//   return area
// }

// // const areaCalculada = calculaArea(2, 5)
// // console.log(areaCalculada)

// const areaCalculada1 = calculaArea(5, 5) //valor retornado = 25
// console.log(areaCalculada1)
// const areaCalculada2 = calculaArea(3, 4) //valor retornado = 12
// console.log(areaCalculada2)

// const areaTotal = areaCalculada1 + areaCalculada2
// console.log(areaTotal)

// Exercício

// Crie uma função que receba dois números e retorne a soma entre eles

// function somaDoisNumeros (num1, num2) {
//   const somaDois = num1 + num2
//   return somaDois
// }

// const soma1 = somaDoisNumeros(10, 20)
// const soma2 = somaDoisNumeros(15, 30)

// const somaTotal = soma1 + soma2
// console.log(somaTotal)

// --- EXERCÍCIO 4 ------------------------------------------------------------------
// Crie uma função que receba um array de números e retorne um novo array com o último e o primeiro número do array recebido divididos por dois.

// function divideNumeros(arrayDeNumeros) {
//   const novoArray = []
//   const tamanho = arrayDeNumeros.length
//   const primeiroNumero = arrayDeNumeros[0] / 2
//   const ultimoNumero = arrayDeNumeros[tamanho - 1] / 2
//   novoArray.push(primeiroNumero, ultimoNumero)
//   return novoArray
// }

// const resultado = divideNumeros([0, 2, 3, 5, 7, 8, 10])
// console.log(resultado)

// --- EXERCÍCIO 5 ------------------------------------------------------------------

//expressão de função

// const imprimeOlaNome = function(nome) {
//   console.log(`Olá ${nome}`)
// }

// imprimeOlaNome('Tiago')
// imprimeOlaNome('Vitória')
// imprimeOlaNome('Luis')


//arrow function
// const calculaArea = (altura, largura) => {
//   const area = altura * largura //number
//   return area
// }

// console.log(calculaArea(5, 6))

//-------------------------------------------------------------------------------------------------

// EXERCÍCIOS DA TARDE

// Exercícios de interpretação de código

// 1. Leia o código abaixo
      
// function minhaFuncao(variavel) {
// return variavel * 5
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?
// Será impresso o cálculo de 2*5 e 5*10, portanto, ira exibir 10 e 50

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse 
// a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// Não é exibido nada no console

// 2. Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");
// const outraFuncao = function(texto) {
// return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade
// Só retornou True quando digitado a palavra cenoura em quaisquer de suas variantes minusculas, maiusculas ou combinadas.
// Qualquer palavra diferente de cenoura, retornou false. Portanto, acho que essa função testa se o texto informado pelo
// usuário é a palavra incluída no banco independente da forma que ele digite.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//    i.   Eu gosto de cenoura // true
//    ii.  CENOURA é bom pra vista // true
//    iii. Cenouras crescem na terra // true

// Exercícios de escrita de código
// 1. Escreva as funções explicadas abaixo:
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
// falando algumas informações sobre você, como: 
//  "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// 
// function meusDados (){
// const nome = 'Caio'
// const idade = 23
// const cidade = 'São Paulo'
// const ocupacao = 'estudante'
// const dadosGerais = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`)
// console.log (dadosGerais)
// return meusDados
// }
// meusDados()

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
// Lembrando que a função não possui entradas, apenas imprime essa mensagem.
//
// function meusDados (){
//   const nome = 'Ederson'
//   const idade = 36
//   const cidade = 'Tatuí'
//   const ocupacao = 'estudante'
//   const dadosGerais = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`)
//   console.log (dadosGerais)
//   return meusDados
//   }
//   meusDados()
//
// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às 
// informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
// Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
// 
//     Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//    
//     - Exemplo:
//     Para a entrada:  "Laís", 23, "São Paulo" e "instrutora", deve retornar:
//     "Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."

// function dadosUsuario () {
//   const nome = 'Ederson'
//   const idade = 36
//   const cidade = 'Tatuí'
//   const ocupacao = 'estudante'
//   const dadosGerais = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`)
//   console.log (dadosGerais)
//   return dadosUsuario
// }
// dadosUsuario()

//2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function numeros () {
// const B = (10)
// const A = (5)
// const somaFinal = A + B
// console.log(somaFinal)
// return numeros
// }
// numeros()

//b) Faça uma função que recebe 2 números e retorne um booleano que informa 
//se o primeiro número é maior ou igual ao segundo.

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o 
//tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
// inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10
