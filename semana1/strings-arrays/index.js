// Exercícios de interpretação de código
// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// let array
// console.log('a. ', array)
// vai inserir a letra 'a' e exibir no console, porém não há definição do que é 'array', por isso será exibido undefined

// array = null
// console.log('b. ', array)
// vai inserir a letra 'b' e exibir no console, porém agora 'array' passou a ser 'null', então 'b' = 'null'

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// //       0  1  2  3  4  5  6   7   8   9  10 
// console.log('c. ', array.length)
// será retornado a quantidade de ítens em 'array', que no caso é 11, portanto 'c' = '11'

// let i = 0
// console.log('d. ', array[i])
// vai retornar algum erro, pois a array não está definida

// array[i+1] = 19
// console.log('e. ', array)
// vai retornar algum erro, pois a array não está definida

// const valor = array[i+6]
// console.log('f. ', valor)
// vai retornar algum erro, pois a array não está definida

// 2. Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// SUBI NUM ÔNIBUS EM MIRROCOS
// 27

//Exercícios de escrita de código
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
// let nomeDoUsuario = prompt('digite o seu nome')
// let emailDoUsuario = prompt('digite o seu e-mail')
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas,
// armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima na tela o array completo
// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, 
// **uma embaixo da outra**.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
// Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

// const array = ['Arroz', 'Feijão', 'Macarrão', 'Carne', 'Salada']
// console.log(array)

// const comidasPreferidas = (`Essas são as minhas comidas preferidas:
// Arroz
// Feijão
// Carne
// Macarrão
// Salada`)
// console.log(comidasPreferidas)

// let comidaPreferidaUsuario = prompt('Qual a sua comida preferida?')
// let novaComidaPreferida = comidasPreferidas.replaceAll('Feijão' , comidaPreferidaUsuario)
// console.log(novaComidaPreferida)

// 3. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//c) Imprima o array na tela
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array na tela

//a
// let array = []
// let listaDeTarefas = array
//b
// let tarefasUsuario1 = prompt('Qual a primeira tarefa no seu dia?')
// listaDeTarefas.push(tarefasUsuario1)
// let tarefasUsuario2 = prompt('Qual a segunda tarefa no seu dia?')
// listaDeTarefas.push(tarefasUsuario2)
// let tarefasUsuario3 = prompt('Qual a terceira tarefa no seu dia?')
// listaDeTarefas.push(tarefasUsuario3)
//c
// console.log(listaDeTarefas)
//d
// let tarefa = prompt('Digite qual a tarefa já realizada: 0, 1 ou 2')
// console.log(tarefa)
//e
// array.splice(0, 1)
//f
// console.log(array)