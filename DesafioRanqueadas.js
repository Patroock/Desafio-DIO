let saldoRanqueada = CalculadoraRanqueada(130,80)
let nivel = ''

function CalculadoraRanqueada(vitorias,derrotas){
    let somatorioRanqueada = vitorias - derrotas
    return somatorioRanqueada
}

    if(saldoRanqueada <= 10){
        nivel = 'Ferro'
    }else if(saldoRanqueada >= 11 && saldoRanqueada <= 20){
        nivel = 'Bronze'
    }else if(saldoRanqueada >= 21 && saldoRanqueada <= 50){
        nivel = 'Prata'
    }else if(saldoRanqueada >= 51 && saldoRanqueada <= 80){
        nivel = 'Ouro'
    }else if(saldoRanqueada >= 81 && saldoRanqueada <= 90){
        nivel = 'Diamante'
    }else if (saldoRanqueada >= 91 && saldoRanqueada <= 100){
        nivel = 'Lendario'
    }else if (saldoRanqueada >= 101){
        nivel = 'Imortal'
    }

    console.log(`O heroi tem o saldo de ${saldoRanqueada} e esta no nivel ${nivel}`)