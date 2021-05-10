// --- EXEMPLOS ---------------------------------------------------------------------

//estrutura do objeto

// const cachorro = {
//   corPelo: 'caramelo',
//   raca: 'akita',
//   porte: 'médio',
//   nome: 'Pitoco',
//   coisasQueGosta: ['brincar', 'carinho', 'bagunçar', 'comer'],
//   latir: () => {
//     console.log('au au')
//   }
// }

//notação de ponto

// const porteDoCachorro = cachorro.porte
// console.log(porteDoCachorro)

// console.log('Nome do cachorro: ', cachorro.nome)
// console.log('Raça do cachorro: ', cachorro.raca)
// console.log('Cor de pelo do cachorro: ', cachorro.corPelo)

//notação de colchetes

// const nomeDoCachorro = cachorro['nome']
// const porteDoCachorro = cachorro['porte']
// const racaDoCachorro = cachorro['raca']

// console.log('Nome do cachorro: ', nomeDoCachorro)
// console.log('Porte do cachorro: ', porteDoCachorro)
// console.log('Raça do cachorro: ', racaDoCachorro)

//reatribuindo valores

// cachorro.nome = 'Rex'
// console.log(cachorro)

// cachorro['raca'] = 'labrador'
// console.log(cachorro)

//acessando métodos do objeto

// console.log(cachorro.latir())

//acessando objeto dentro de objeto

// const paiDePet = {
//   nome: "Caio Teixeira",
//   pet: {
//     nome: "Lupin",
//     raca: "Salsicha", 
//     idade: 1
//   } 
// }

// const nomeDoPet = paiDePet.pet.nome
// const racaDoPet = paiDePet.pet.raca
// const idadeDoPet = paiDePet.pet.idade
// console.log(nomeDoPet)
// console.log(racaDoPet)
// console.log(idadeDoPet)

// console.log('Nome do pet: ', paiDePet.pet.nome)

//acessando valores do array dentro de um objeto

// const curso = {
//   nome: "Noturno Frontend",
//   linguagens: ["JS", "CSS", "HTML"]
// }

// // curso.linguagens -> ["JS", "CSS", "HTML"]
// console.log(curso.linguagens[0])
// console.log(curso.linguagens[1])
// console.log(curso.linguagens[2])
// const linguagensDoCurso = curso.linguagens //["JS", "CSS", "HTML"]

// console.log('Primeira linguagem: ', linguagensDoCurso[0])

//acessando propriedades de um array de objetos

// const instrutoras = [
//   {nome: "Lais", modulo: 1}, // posição 0 do array
//   {nome: "Amanda",modulo: 2}, // posição 1 do array
//   {nome: "Chijo",modulo: 3} // posição 2 do array
// ]

// const nomeDaInstrutora = instrutoras[0].nome.toUpperCase()
// const moduloDaInstrutora = instrutoras[0].modulo
// console.log(nomeDaInstrutora)
// console.log(moduloDaInstrutora)

//adicionando novas propriedades ao objeto

//propriedade do objeto = chave + valor
// const curso = {
//   nome: "Noturno Frontend",
//   linguagens: ["JS", "CSS", "HTML"]
// }

// curso.numeroEstudantes = 50
// console.log('Número de estudantes', curso.numeroEstudantes)

// console.log(curso)

//operador spread

// const usuario = {
//   nome: 'Samira',
//   email: 'samira@gmail.com',
//   idade: 20
// }


// const novoUsuario = {
//   ...usuario,
//   nome: 'Lucas',
//   dataNascimento: '19/08/2000'
// }

// console.log(novoUsuario)

// const listaDeCompras = ['banana', 'feijão', 'arroz']
// const novaListaDeCompras = [...listaDeCompras, 'cenoura']
// novaListaDeCompras.push('batata')
// console.log(novaListaDeCompras)

// --- EXERCÍCIO 1 ------------------------------------------------------------------

// const filme = {
//   nome: 'Taxi Driver',
//   direcao: 'Scorsese',
//   anoLancamento: 1976,
//   elenco: ['Rober De Niro', 'Jodie Foster'],
//   jaAssistiu: true
// }

// console.log('Nome: ', filme.nome)
// console.log('Diretor: ', filme.direcao)
// console.log('Ano de Lançamento: ', filme['anoLancamento'])
// console.log('Elenco: ', filme['elenco'])
// console.log('Assistido: ', filme['jaAssistiu'])

// --- EXERCÍCIO 2 ------------------------------------------------------------------

// const pessoa = {
//   nome: 'Matt',
//   idade: 20,
//   generoMusical: 'rock'
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)

// --- EXERCÍCIO 3 ------------------------------------------------------------------

// "O nome do filme é ___. Seus personagens são ___, ___ e ___"

// const filme = {
//   nome: 'Taxi Driver',
//   direcao: 'Scorsese',
//   anoLancamento: 1976,
//   elenco: ['Rober De Niro', 'Jodie Foster'],
//   jaAssistiu: true
// }

// filme.personagens = ['Taxista', 'Mocinha']
// filme.elenco[0] = 'Xuxa'

// console.log('Ator: ', filme.elenco[0])
// console.log('Atriz: ', filme.elenco[1])
// console.log(filme)

// console.log(`O nome do filme é ${filme.nome} e seus personagens são ${filme.personagens[0]} e ${filme.personagens[1]}`)

// --- EXERCÍCIO 4 ------------------------------------------------------------------

// "O nome da pessoa é ___ e suas comidas preferidas são ___, ___ e ___. Seu melhor amigo se chama ___ e tem ___ anos"

// const pessoa = {
//   nome: 'Matt',
//   idade: 20,
//   generoMusical: 'rock'
// }

// const pessoa2 = {
//   nome: 'Igor',
//   idade: 20,
//   generoMusical: 'rock'
// }


// function adicionaInfo(objetoPessoa) {
//   const novaPessoa = {
//     ...objetoPessoa,
//     comidasPreferidas: ['churrasco', 'batata frita', 'lasanha'],
//     melhorAmigo: {
//       nome: 'Johnny',
//       idade: 25
//     }
//   }
//   return novaPessoa
// }

// const pessoaModificada = adicionaInfo(pessoa)


// console.log(`O nome da pessoa é ${pessoaModificada.nome} e suas comidas preferidas são ${pessoaModificada.comidasPreferidas[0]}, ${pessoaModificada.comidasPreferidas[1]} e ${pessoaModificada.comidasPreferidas[2]}. Seu melhor amigo se chama ${pessoaModificada.melhorAmigo.nome} e tem ${pessoaModificada.melhorAmigo.idade} anos.`)

// EXERCÍCIOS DA TARDE

// Exercícios de interpretação de código
// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 
// 1 - Leia o código abaixo
// a) O que vai ser impresso no console?
// "MATHEUS NACHTERGAELE" 
// "Virginia Cavendish"
// "Globo, 14h"

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// 2 - Leia o código abaixo
// a) O que vai ser impresso no console?
// Juca - 3 - SRD
// Juba - 3 - SRD
// Jubo - 3 - SRD
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// se trata de uma SPREAD e ela faz a cópia de um objeto inteiro para outro objeto e pode mudar, adicionar as propriedades.

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// 3 - Leia o código abaixo
// a) O que vai ser impresso no console?
// false
// undefined
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// No objeto está declarado que a propriedade backender é false, portanto, ao chamar o mesmo pela função "minhaFuncao" a qual coloca o return objeto[propriedade], este valida o valor em evidência da propriedade "backender" que é um boolean false. E devido não haver a declaração da propriedade do objeto "altura", então este será undefined.

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23,
//   backender: false
  
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// Exercícios de escrita de código
// 1. Resolva os passos a seguir: 
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

    // Exemplo de entrada
    // const pessoa = {
    //    nome: "Amanda", 
    //    apelidos: ["Amandinha", "Mandinha", "Mandi"]
    // }

    // Exemplo de saída
    // "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
//  - 💡  Dica

//    Não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

// const sujeito1 = {
//   nome: "Ederson",
//   apelidos: ['Eder', 'Edy', 'Ed'],
//   imprimeMensagem: (sujeito1) => {
//   }
// }
// console.log(`Eu sou ${sujeito1.nome}, mas pode me chamar de: ${sujeito1.apelidos}`)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const sujeito2 = {
//   ...sujeito1,
//   apelidos: ['Bareta', 'Preto', 'Engenheiro'],
//   imprimeMensagem: (sujeito2) => {
//   }
// }
// console.log(`Eu sou ${sujeito2.nome}, mas pode me chamar de: ${sujeito2.apelidos}`)

// - 💡  Dica

// Não lembra da sintaxe de espalhamento ou spread? Não tem problema!

// Pode pesquisar a vontade! Nesse [link](https://blog.fellyph.com.br/javascript/spread-operator/) tem vários exemplos - e não se esqueçam que o Google é melhor amigo da pessoa desenvolvedora 💘

// 2. Resolva os passos a seguir: 
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// const dadosPessoa1 = {
//   nome: 'João',
//   idade: 25,
//   profissao: 'Estudante'
// }
// const dadosPessoa2 = {
//   nome: 'Ederson',
//   idade: 36,
//   profissao: 'Engenheiro'
// }

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// function dadosDePessoas(dadosPessoa1, dadosPessoa2) {
//   const array = []
//   array.push(dadosPessoa1.nome, dadosPessoa1.nome.length, dadosPessoa1.idade, dadosPessoa1.profissao, dadosPessoa1.profissao.length)
//    return array
// }
// console.log(dadosDePessoas(dadosPessoa1))
// console.log(dadosDePessoas(dadosPessoa2))

    // 1. O valor de `nome`
    // 2. O numero de caracteres do valor `nome`
    // 3. O valor de `idade`
    // 4. O valor de `profissão`
    // 5. O numero de caracteres do valor `profissão`
    

    // - Exemplo

        
        // const pessoa = {
        // 	nome: "Bruno", 
        //   idade: 23, 
        // 	profissao: "Instrutor"
        // }

        // minhaFuncao(pessoa)

        // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
      
// 3. Resolva os passos a seguir: 
// a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
// let carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

// const fruta1 = {
//   nome: 'laranja',
//   disponibilidade: true
// }
// const fruta2 = {
//   nome: 'pera',
//   disponibilidade: true
// }
// const fruta3 = {
//   nome: 'maça',
//   disponibilidade: true
// }

// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

// function compras(fruta1) {  
//   carrinho.push(fruta1, fruta2, fruta3)
//   return carrinho
//   }
//   console.log(compras(fruta1))

  // - 💡  Dica

  //     Aqui você deve usar o método **push()**

// d) Imprima a variável `carrinho` e garanta que ela agora seja um array preenchido com três objetos. 
//   console.log(compras(fruta1))

// - 💡  Dica
//     Deve aparecer algo assim no console do seu navegador:
//     ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png)

//     Se voce clicar nessa setinha, o array é expandido e deve parecer com isso:
//     ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png)