let quantidadeVitorias = 90;
let quantidadeDerrotas = 50;

let saldoVitorias = saldoRankeadas(quantidadeVitorias, quantidadeDerrotas);

nivel = nivelHeroi(quantidadeVitorias);

console.log("O herói tem um saldo de " + saldoVitorias + " e está no nível de " + nivel + "!");


function saldoRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

function nivelHeroi(vitorias) {
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return nivel;
}