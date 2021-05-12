// Exercícios de interpretação de código
// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

        // let valor = 0
        // for(let i = 0; i < 5; i++) {
        //   valor += i
        // }
        // console.log(valor)
     
        // Enquanto i for menor que 5, será executado a função loop, e sempre incrementando o valor de i+1 (mesmo que i++). O código define que a variável i será 'valor = valor + 1'. Portanto, toda execução pegará o resultado do valor += i e altera a variável i que está reservada em for. Exemplo:                                                         
        // (let i = 0; i < 5; i++) 0+1 ==> [0] ==> 1 ==> 0+0
        // (let i = 1; i < 5; i++) 1+2 ==> [1] ==> 2 ==> 1+2
        // (let i = 2; i < 5; i++) 2+1 ==> [2] ==> 3 ==> 3+3
        // (let i = 3; i < 5; i++) 3+1 ==> [3] ==> 4 ==> 6+4
        // (let i = 4; i < 5; i++) 4+1 ==> [4] ==> 5 ==> 10 sendo esse o valor impresso no console.


// 2. Leia o código abaixo:
//        
        // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        // for (let numero of lista) {
        //   if (numero > 18) {
        // 		console.log(numero)
        // 	}
        // }
        
//  a) O que vai ser impresso no console?

//  Serão impressos todos os números que são maiores que 18; 19-21-23-25-27-30

//  b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

        // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        // let maior = 18
        // for (let numero of lista) {
        //   if (numero > maior) {
        //       maior = numero
        // 		console.log(numero)
        // 	}
        // }

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//
// Esta concatenando e empilhando em linhas o número 0. Se digitar o número 4, estamos dizendo para o código que desejamos que seja limitado a concatenação em 4 linhas, ou seja, ficará:
        // 0
        // 00
        // 000
        // 0000
        //       
        // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        // let quantidadeAtual = 0
        // while(quantidadeAtual < quantidadeTotal){
        //   let linha = ""
        //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        //     linha += "0"
        //   }
        //   console.log(linha)
        //   quantidadeAtual++
        // }

// Exercícios de escrita de código
// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
        
        // let quantosBichosEstimacao = Number(prompt('Quantos bichos de estimação você tem?'))
        // let bichosQuePossue = []

//  a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
      
        // if (quantosBichosEstimacao === 0) {
        //     console.log("Que pena! Você pode adotar um pet!")
        // } else {
      
//  b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

        // for (let i = 0; i < quantosBichosEstimacao; i++) {
        // let nomesBichosEstimacao = prompt('Digite o nome dos animais')
        // bichosQuePossue.push(nomesBichosEstimacao)                                      
        // }        
     
    // Código geral

        // let quantosBichosEstimacao = Number(prompt('Quantos bichos de estimação você tem?'))
        // let bichosQuePossue = []

        // if (quantosBichosEstimacao === 0) {
        //     console.log("Que pena! Você pode adotar um pet!")
        // } else {
        //     for (let i = 0; i < quantosBichosEstimacao; i++) {
        //     let nomesBichosEstimacao = prompt('Digite o nome dos animais')
        //     bichosQuePossue.push(nomesBichosEstimacao)                                      
        // }
        // }
        // console.log(bichosQuePossue)
    

// c) Por fim, imprima o array com os nomes dos bichinhos no console
        //console.log(bichosQuePossue)

//     2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//         a) Escreva um programa que imprime cada um dos valores do array original.

//         b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

//         c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

//         d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

//         e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


