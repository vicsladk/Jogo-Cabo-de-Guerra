jogador = ["", "", ""]
computador = ["", "", ""]
forcaJogador = 0
forcaComputador = 0

for (let i = 0; i < 3; i++) {
  escolhaJogador = prompt ("Digite o nome dos jogadores" + (i + 1))
  jogador[i] = escolhaJogador 
}
forcaJogador = Math.floor(Math.random() * 10) + 1
console.log ("Início Computador: " + computador)
for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 5)
  computadorJogadores = ["Robot", "Wally", "Sam", "Eva", "Bird"]
  computador [i] = computadorJogadores [indiceAleatorio]
} 
forcaComputador = forcaComputador + Math.floor(Math.random() * 10) + 1
console.log("Força final do computador é de: " + computador)

if (forcaComputador < forcaJogador) {
  alert ("Você ganhou! Parabéns!!! Sua força foi de " + forcaJogador + " e a força do Computador foi de " + forcaComputador + " =)")
}
else {
  if (forcaJogador < forcaComputador) {
    alert ("Você perdeu... sua força era de " + forcaJogador + " e a do Computador foi de " + forcaComputador + " que pena! = (")
  }
  else {
    alert ("Ufa foi muito difícil e a força dos dois acabaram resultando em.... EMPATE!")
  }
}