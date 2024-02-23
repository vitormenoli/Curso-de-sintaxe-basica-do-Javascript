const nome = 'Vitor'

console.log(nome)

let idade = 17

console.log(idade)

var celular = 'samsung'

console.log(celular)

// Gera erro!
// nome = 'Pedro'

idade = 20
console.log(idade)

celular = 'iphone'
console.log(celular)

celular = null

if (celular === 'iphone') {
    console.log('O Celular é um iphone!')
    // var linguagem = 'js'

    // console.log(linguagem)
} else if (celular === 'samsung') {
    console.log('O Celular é um samsung!')
} else {
    console.log('O Celular não possui marca!')
}