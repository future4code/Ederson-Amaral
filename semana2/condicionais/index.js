// --- EXEMPLOS ---------------------------------------------------------------------

// USANDO O SOLICITADO NO CHALLENGE COM APLICAÇÃO DE ELSE IF

// const primeiraPessoa = {
//     nome: "Lais",
//     genero: "Feminino"
// }

// const segundaPessoa = {
//     nome: "Ederson",
//     genero: "Masculino"
// }

// const terceiraPessoa = {
//     nome: "Ariel",
//     genero: "Nao Binario"
// }
// const desejaBoasVindas = (pessoa) => {
//     if(pessoa.genero === "Feminino"){
//         return "Seja bem vinda!"
//     } else if (pessoa.genero === "Masculino") {
//         return "Seja bem vindo!"
//     } else {
//         return "Desejamos boas vindas"
//     }
// }
// console.log(desejaBoasVindas(primeiraPessoa))



// --- EXERCÍCIO 1 ------------------------------------------------------------------

// let numero1 = Number(prompt('Digite um numero'))
// let numero2 = Number(prompt('Digite outro numero'))
// if (numero1 === numero2) {
//     console.log("sucesso")
// }

// FAZENDO O MESMO EXERCÍCIO, AGORA COM UMA FUNÇÃO

// const comparaNumeros = () => {
//     let numero1 = Number(prompt('Digite um numero'))
//     let numero2 = Number(prompt('Digite outro numero'))
//     if (numero1 === numero2) {
//         console.log("sucesso")
//     }   
// }
// comparaNumeros()

// --- EXERCÍCIO 2 ------------------------------------------------------------------

// USANDO ELSE PARA O EXERCÍCIO 1

// const comparaNumeros = () => {
//     let numero1 = Number(prompt('Digite um numero'))
//     let numero2 = Number(prompt('Digite outro numero'))
//     if (numero1 === numero2) {
//         console.log("são iguais")
//     } else {
//         console.log("não são iguais")
//     }   
// }
// comparaNumeros()

// --- EXERCÍCIO 3 ------------------------------------------------------------------

// const comparaNumeros = () => {
//     let numeroa = Number(prompt('Digite um numero'))
//     let numerob = Number(prompt('Digite outro numero'))
//     if (numeroa > numerob) {
//         console.log("O primeiro é maior")
//     } else if (numeroa < numerob) {
//         console.log("O primeiro é menor")
//     } else {
//         console.log("Os numeros sao iguais")
//     }  
// }
// comparaNumeros()

// --- EXERCÍCIO 4 ------------------------------------------------------------------

// const defineTipoPokemon = () => {
//     const pokemon = prompt('Digite um pokemon').toLowerCase()
//     switch (pokemon) {
//         case 'bulbassauro':
//             console.log('Planta e veneno')
//             break
//         case 'charmander':
//             console.log('Fogo')
//             break
//         case 'squirtle':
//             console.log('Agua')
//             break
//         default:
//             console.log('Não conheço esse bicho')

//         }
// }
// defineTipoPokemon()

// --- EXERCÍCIO 5 ------------------------------------------------------------------

// const concluiuEnsinoMedio = prompt('Você concluiu o ensino médio? Sim ou Não?')
// const idade = Number(prompt('Qual é a sua idade?'))
// const outraFaculdade = prompt('Você estuda em outra faculdade?')

// outraFaculdade === false é a mesma coisa que !outraFaculdade

// const podeEstudar = () => {
//     if(concluiuEnsinoMedio === 'sim' && idade >= 18 && outraFaculdade === 'não') {
//         console.log('Pode')
//     } else {
//         console.log('Não pode')
//     }

// }
// podeEstudar()

