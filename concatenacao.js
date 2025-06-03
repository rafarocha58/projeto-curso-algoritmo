/*
algoritmo "Concatenação"
// Função : [Linguagem e Lógica de Programação]
// Autor : Rafael
// Data : 24/05/2025
// Seção de Declarações 
var
   nome: caractere
   numero: real
inicio
// Seção de Comandos
   escreval("Digite o nome:")
   leia(nome)
   escreval("Digite o número:")
   leia(numero)
   
   escreval(nome, " : ", numero, 15)
fimalgoritmo
*/
var nome, numero

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o seu número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero