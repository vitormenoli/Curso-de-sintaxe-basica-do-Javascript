function numeroUm() {
    let menu = parseFloat(prompt('Digite um número:'))

    while(isNaN(menu)) {
        menu = parseFloat(prompt('Digite um número válido:'))
    }

    return menu
}

function operador() {
    let menu = parseFloat(prompt('Escolha um operador:\n1) +\n2) -\n3) *\n4) /'))

    while (isNaN(menu) || menu < 1 || menu > 4) {
        menu = parseFloat(prompt('Escolha um número válido:\n1) +\n2) -\n3) *\n4) /'))
    }

    return menu
}

function numeroDois() {
    let menu = parseFloat(prompt('Digite outro número:'))

    while(isNaN(menu)) {
        menu = parseFloat(prompt('Digite um número válido:'))
    }

    return menu
}

alert('Calculadora!')

let numero1 = numeroUm()
let operadorAritmetico = operador()
let numero2 = numeroDois()

let sair = false

while(sair == false) {
    let resultado
    let operadorString

    switch (operadorAritmetico) {
        case 1:
            resultado = numero1 + numero2
            operadorString = '+'
            break;
        case 2:
            resultado = numero1 - numero2
            operadorString = '-'
            break;
        case 3:
            resultado = numero1 * numero2
            operadorString = '*'
            break;
        case 4:
            resultado = numero1 / numero2
            operadorString = '/'
            break;
    }

    alert('O resultado de ' + numero1 + ' ' + operadorString + ' ' + numero2 + ' é: ' + resultado)
    sair = confirm('Você deseja sair?')

    if (sair) {
        break
    }

    numero1 = numeroUm()
    operadorAritmetico = operador()
    numero2 = numeroDois()
}