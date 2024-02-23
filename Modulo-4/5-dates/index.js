const data = new Date()

// console.log(data)

// Apenas Ano, Mês e Dia
// console.log('Ano: ' + data.getFullYear())
// console.log('Mês: ' + (data.getMonth() + 1))
// console.log('Dia: ' + data.getDate())

// Apenas Horas, Minutos e Segundos
// console.log(data.getHours() + ' Hora(s)')
// console.log(data.getMinutes() + ' Minuto(s)')
// console.log(data.getSeconds() + ' Segundos(s)')

// Adição ou Subtração de Dias

// const novaData = new Date(
//     data.setDate(data.getDate() + 7)
// )
// console.log(novaData)

// Formatação de data dia/mês/ano
console.log(data)
console.log(
    new Intl.DateTimeFormat('pt-BR').format(data)
)
console.log(
    new Intl.DateTimeFormat('en').format(data)
)