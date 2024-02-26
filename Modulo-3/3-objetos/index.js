const carro = {
    marca: 'Mercedes',
    cor: 'Branco',
    ano: 2024
}

console.log(carro)

console.log(carro.marca)
console.log(carro['cor'])
console.log(carro['ano'])

for (let propriedade in carro) {
    const valor = carro[propriedade]

    console.log(propriedade + ': ' + valor)
}