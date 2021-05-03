/*

Exercícios de interpretação de código

Exercício 1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)
Resposta é console.log(10, 5), pois a variavel let permite a alteração de valores, como no caso da "b"

/*

Exercício 2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
Resposta é console.log(20,10,10) embora não tenha a variavel "c" declarada inicialmente, é possível determinar
através das demais que foram declaradas.

/*

Exercício 3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase.
Alem disso, os nomes não podem começar com números ou caracteres especiais. 

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

Resposta
let qtdHorasTrabDia = prompt("Quantas horas você trabalha por dia?")
let qtdRecebDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${qtdRecebDia/qtdHorasTrabDia} por hora`)

*/

/*

Exercícios de escrita de código

1. Construa um programa, seguindo os seguintes passos:

a) Declare uma variável para armazenar um nome, sem atribuir um valor.
const nome = prompt ("Qual é o seu nome?")

b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
let idade = prompt ("Qual a sua idade?")

c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log (typeof nome)
console.log (typeof idade)

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
Foi impresso dessa forma porque se trata de uma string

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
const nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual a sua idade?")

f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log (typeof nome)
console.log (typeof idade)

g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
console.log ("Olá", nome, "você tem" , idade, "anos.")

2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável.
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

a) Crie três novas variáveis, contendo as respostas
const generoMusical = "Rock"
let nomeBanda = "Guns"
let musicaPreferida = "Patiente"

b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

generoMusical = prompt ("Gosta de Rock?")
nomeBanda = prompt ("Curte Guns?")
musicaPreferida = prompt ("Escutou Patiente?")

console.log ("O genero musical é", generoMusical, "a banda é" , nomeBanda, "e escutou" , musicaPreferida)


*/
