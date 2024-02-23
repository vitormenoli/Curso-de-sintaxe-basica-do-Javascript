const carro = 'TesLa CyberTruck'

console.log(carro)

// Todas letras minúsculas
console.log(carro.toLowerCase())

// Todas letras maiúsculas
console.log(carro.toUpperCase())

// Parte da string

console.log(carro.slice(0, 5))

console.log(carro.slice(6, 16))
console.log(carro.slice(6, carro.length))

// Remove espaços em torno da string

const palavraComEspaco = '         Olá, mundo  !       '

console.log(palavraComEspaco.trim())