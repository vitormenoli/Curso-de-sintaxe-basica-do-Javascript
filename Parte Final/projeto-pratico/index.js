const numero = Math.floor(Math.random() * 100) + 1
let resp
let tentativas = 0

alert('Boas Vindas ao jogo de acertar o número!')
alert('Lembre-se que o intervalo está de 1 a 100.')

do {
    resp = parseFloat(prompt('Digite o número que estou pensando:'))

    if (resp !== numero) {
        if (resp > numero) {
            alert('Errou, tente chutar mais baixo!')
        } else {
            alert('Errou, tente chutar mais alto!')
        }

        tentativas++
    }

} while (resp !== numero)

alert('Você acertou! O número era ' + numero + '!' + '\nNúmero de tentativas: ' + tentativas)