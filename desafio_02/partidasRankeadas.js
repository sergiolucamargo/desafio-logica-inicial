// Importa o módulo para entrada de dados
const readline = require('readline');

// Configuração do readline para ler e escrever no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador com base nas vitórias
function determinarNivel(saldoVitorias) {
    if (saldoVitorias <= 10) return "Ferro";
    else if (saldoVitorias >= 11 && saldoVitorias <= 20) return "Bronze";
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) return "Prata";
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) return "Ouro";
    else if (saldoVitorias >= 81 && saldoVitorias <= 90) return "Diamante";
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) return "Lendário";
    else return "Imortal";
}

// Função principal que recebe vitórias e derrotas e retorna a mensagem final
function exibirResultado(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(saldoVitorias);
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Entrada de dados do usuário
rl.question("Digite a quantidade de vitórias: ", (inputVitorias) => {
    rl.question("Digite a quantidade de derrotas: ", (inputDerrotas) => {
        
        const vitorias = parseInt(inputVitorias);
        const derrotas = parseInt(inputDerrotas);

        exibirResultado(vitorias, derrotas);

        // Fecha o readline
        rl.close();
    });
});