const nome = 'Marcos'

switch (nome) {
    case 'vitor':
        console.log('O nome é vitor')
        break
    case 'joão':
        console.log('O nome é João')
        break
    case 'pedro':
        console.log('O nome é Pedro')
        break
    default:
        console.log('O nome não é Vitor, nem João e nem Pedro')
        console.log('O nome é: ' + nome)
        break
}