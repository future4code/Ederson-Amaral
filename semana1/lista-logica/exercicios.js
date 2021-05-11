// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const mensagemUsuarioAltura = prompt('Digite a altura!')
   const mensagemUsuarioLargura = prompt('Digite a largura!')
   const area = mensagemUsuarioAltura * mensagemUsuarioLargura
   console.log(area)
}

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const anoCorrente = prompt('Digite o ano corrente!')
   const anoNascimento = prompt('Digite o seu ano de nascimento!')
   const idade = anoCorrente - anoNascimento
   console.log(idade)
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   const IMC = peso / (altura * altura)
   return IMC
}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   let nome = prompt('Digite o seu nome')
   let idade = prompt('Digite a sua idade')
   let email = prompt('Digite o seu email')
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   let coresFav = []
   coresFav[0] = prompt('Digite sua primeira cor favorita')
   coresFav[1] = prompt('Digite sua segunda cor favorita')
   coresFav[2] = prompt('Digite sua terceira cor favorita')
   console.log(coresFav)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   return `${string.toUpperCase()}`
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return custo / valorIngresso
}
calculaIngressosEspetaculo()

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const comparacao = string1.length === string2.length
  return comparacao
  
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   const array1 = array[0]
   return array1
     
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
   const novoArray = array[array.length-1]
   return novoArray
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   const primeiroArray = array[0]
   array[0] = array[array.length-1]
   array[array.length-1] = primeiroArray
   return array
   
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   return string1.toUpperCase() === string2.toUpperCase()
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   let anoAtual = Number(prompt('Digite o ano atual'))
   const anoNascimento = Number(prompt('Digite o ano do seu nascimento'))
   const anoEmissaoIdentidade = Number(prompt('Digite o ano da emissão da sua carteira de identidade'))
   let idadeUsuario = anoAtual - anoNascimento
   let idadeCarteiraIdentidade = anoAtual - anoEmissaoIdentidade
   const resultado = (idadeUsuario < 21 && idadeCarteiraIdentidade > 4) || ((idadeUsuario >= 20 && idadeUsuario <= 50) && (idadeCarteiraIdentidade > 9)) || (idadeUsuario > 49 && idadeCarteiraIdentidade > 14)
   console.log(resultado)
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
   let bissexto = (ano * 400) % ano
   return bissexto
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   let maiorIdade = prompt('Você tem mais de 18 anos? Sim ou Não?')
   let grauInstrucao = prompt('Você possui ensino médio completo? Sim ou Não?')
   let disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? Sim ou Não?')
   const aprovado = (maiorIdade === 'sim') && (grauInstrucao === 'sim') && (disponibilidade === 'sim')
   console.log(aprovado)
   return aprovado
}
