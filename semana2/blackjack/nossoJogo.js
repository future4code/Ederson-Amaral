/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let somaCartas = (numero1, numero2) => {
   return numero1 + numero2
}

let carta1 = comprarCarta()
let carta2 = comprarCarta()
let carta3 = comprarCarta()
let carta4 = comprarCarta()

alert('Bem vindo(a) ao jogo de Blackjack!')

console.log('Bem vindo(a) ao jogo de Blackjack!')

   if(confirm('Quer iniciar uma nova rodada?')) {
   
   const valorCarta1Usuário = carta1.valor
   const textoCarta1Usuário = carta1.texto
   const valorCarta2Usuário = carta2.valor
   const textoCarta2Usuário = carta2.texto
   const valorCarta3Computador = carta3.valor
   const textoCarta3Computador = carta3.texto
   const valorCarta4Computador = carta4.valor
   const textoCarta4Computador = carta4.texto
   const maiorValorAdmissivel = Number(21)

   console.log(`Usuário Cartas - ${textoCarta1Usuário} ${textoCarta2Usuário} - Pontuação ${somaCartas(valorCarta1Usuário, valorCarta2Usuário)}`)
   
   console.log(`Computador Cartas - ${textoCarta3Computador} ${textoCarta4Computador} - Pontuação ${somaCartas(valorCarta3Computador, valorCarta4Computador)}`)

      if ((valorCarta1Usuário + valorCarta2Usuário > valorCarta3Computador + valorCarta4Computador) || (maiorValorAdmissivel === true)) {
      console.log('O usuário ganhou')

   } else if ((valorCarta1Usuário + valorCarta2Usuário) === (valorCarta3Computador + valorCarta4Computador)) {
      console.log('Empate!')

   } else if ((valorCarta1Usuário + valorCarta2Usuário < valorCarta3Computador + valorCarta4Computador) || (maiorValorAdmissivel === true)) {
      console.log('O computador ganhou')
   
   }
   
} else {
  console.log('O jogo acabou!')
} 
      
 
   
   