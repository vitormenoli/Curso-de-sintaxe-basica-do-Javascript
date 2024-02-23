// function funcaoDesconhecida() {
//     console.log('Meio do bloco try')
// }

// try {
//     console.log('Início do bloco try')

//     // throw new Error('Novo erro encontrado!')

//     funcaoDesconhecida()

//     console.log('Fim do bloco try')
// } catch (error) {
//     console.error('Ocorreu um erro:', error.message)
// } finally {
//     console.log('Bloco finally - sempre é executado!')
// }

// Outro exemplo

function dividir(a, b) {
    try {
        console.log('Iniciando divisão!')

        if (b === 0) {
            throw new Error('Divisão por zero não é permitida!')
        }

        // Se o divisor não for zero, realizar a divisão
        return a / b
    } catch (error) {
        // Captura e trata o erro
        console.error('Erro ao dividir: ', error.message)
        // Retorna um valor padrão ou faz outra manipulação, se necessário

        return null
    } finally {
        // Este bloco é executado independemente de ocorre um erro ou não
        console.log('Divisão executada!')
    }
}

// Exemplos de uso
console.log(dividir(10, 2))
console.log(dividir(5, 0))