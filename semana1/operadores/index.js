// ----------------------> Exemplos <---------------------------

console.log('Olá, Molina!')

// ----------------------> Exercicio 1 <---------------------------
/*
Operadores Aritméticos
//1 
const soma = 3 + 4
console.log ('soma', soma)
//2
const resultado = 3 * 5 / 2
console.log ('resultado', resultado)
//3
const resultado2 = (4 - 5) * -1
console.log ('resultado', resultado2) 
//4
const resto = 234 % 5
console.log ('resto', resto)
*/ 
// ----------------------> Execicio 2 <---------------------------
/*
Comparadores
const numero1 = 10
const numero2 = 5

//1 
console.log ("o numero1 é igual ao numero2?", numero1 === numero2)
//2
console.log ("o numero1 é diferente ao numero2?", numero1 !== numero2)
//3
console.log ("o numero1 é maior ao numero2?", numero1 > numero2)
//4
console.log ("o numero1 é menor ao numero2?", numero1 < numero2)
*/
// ----------------------> Exercicio 3 <---------------------------
/*
Operadores Lógicos (AND, E, &&)
const a = true
const b = false
const c = true

//1
console.log ('a e b', a && b)
//2
console.log ('b e c', b && c)
//3
console.log ('a e c', a && c)
//4
console.log ('a e b e c', a && b && c)
*/
// ----------------------> Exercicio 4 <---------------------------
/*
Operadores Lógicos (OR, OU, ||)

const a = true
const b = false
const c = true

//1
console.log ('a ou b', a || b)
//2
console.log ('b ou c', b || c)
//3
console.log ('a ou c', a || c)
//4
console.log ('a ou b ou c', a || b || c)
*/
// ----------------------> Exercicio 5 <---------------------------
/*
Operadores Lógicos (NOR, NÃO, !)

const nome = prompt ('Insira o seu nome')
const anoNascimento = prompt ('Insira do ano do seu nascimento')
const anoAtual = prompt ('Insira o ano atual')

//1
console.log ('Olá', nome)
//2
const idade = Number(anoAtual) - Number(anoNascimento)
console.log ('Idade', idade)
//3
console.log ('É maior de idade?', idade >= 18)
//4
const idadeFuturo = 2050 - anoNascimento
console.log ('Em 2050 terei', idadeFuturo, "anos")
*/

/*
Atividades da aula 04 - semana 1 - Turma Molina - 04/05/2021
Exercícios de interpretação de código

1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a = false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b = false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c = true

console.log("d. ", typeof resultado) // o resultado pode ser true ou false, uma vez que é de características booleanas
*/
/*
2. Seu colega se aproxima de você falando que o código dele não funciona como devia.
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero // está tentado somar duas Strings sem converter para Número

console.log(soma) // resultado da soma será combinação de qualquer dado digitado, ex: 2 e 3 será 23 e não 2+3 = 5
*/
/*
3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor
impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero =  Number(prompt("Digite outro numero!"))

let soma 
soma = primeiroNumero + segundoNumero

console.log (soma) 

Exercícios de escrita de código

1. Faça um programa que:

a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
seguido pela resposta (`true` ou `false`)
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
- 💡  Dica
Dica: não se esqueça de converter as respostas para o tipo **número**

let suaIdade = Number(prompt('Qual é a sua idade?'))
let idadeMelhorAmigo = Number(prompt('Qual é a idade do seu melhor amigo(a)?'))
console.log ('Sua idade é maior do que a do seu melhor amigo?', suaIdade >= idadeMelhorAmigo)
console.log ('A diferença de idade entre você e seu amigo(a) é:' , suaIdade - idadeMelhorAmigo, "anos")

2. Faça um programa que:

a) Peça ao usuário que insira um número **par**
b) Imprima na console **o resto da divisão** desse número por 2.
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
Em todas as operações com números pares diviseis por 2, o resultado sempre será 0, não havendo resto.
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
Para os casos em que é digitado um número impar, será exibido o resto desta divisão por 2, ou seja, 5 / 2 é o mesmo
que (2*2)+1, ou seja, o resto é 1
- 💡  Dica
Dica: não se esqueça de converter as respostas para o tipo número

let numeroPar = Number(prompt('Digite qualquer número que seja PAR'))
const restoDaDivisao = numeroPar % 2 
console.log (restoDaDivisao)

3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

a) A idade do usuário em meses
b) A idade do usuário em dias
c) A idade do usuário em horas

let suaIdade = Number(prompt('Qual é a sua idade em anos?'))
console.log ('Sua idade em meses é' , suaIdade * 12)
console.log ('Sua idade em dias é' , suaIdade * 365)
console.log ('Sua idade em horas é' , suaIdade * 365 * 24)

4. Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as seguintes mensagens:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

let numero1 = Number(prompt('Digite o primeiro número'))
let numero2 = Number(prompt('Digite o segundo número'))
console.log ('O primeiro número é maior que o segundo?', numero1 > numero2)
console.log ('O primeiro número é igual ao segundo?', numero1 === numero2)
console.log ('O primeiro número é divisível pelo segundo?', (numero1 % numero2) === 0)
console.log ('O segundo número é divisível pelo primeiro?', (numero2 % numero1) === 0)
/*
