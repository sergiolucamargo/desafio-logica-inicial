// Importa o módulo para entrada de dados
const readline = require('readline');

// Configuração do readline para ler e escrever no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas)
{
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador com base nas vitórias
function determinarNivel(saldo)
{
    if (saldo <= 10) return "Ferro";
    else if (saldo >= 11 && saldo <= 20) return "Bronze";
    else if (saldo >= 21 && saldo <= 50) return "Prata";
    else if (saldo >= 51 && saldo <= 80) return "Ouro";
    else if (saldo >= 81 && saldo <= 90) return "Diamante";
    else if (saldo >= 91 && saldo <= 100) return "Lendário";
    else return "Imortal";
}

// Função principal que recebe vitórias e derrotas e retorna a mensagem final
function exibirResultado(vitorias, derrotas)
{
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(saldoVitorias);
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Entrada de dados do usuário
rl.question("Digite a quantidade de vitórias: ", (inputVitorias) =>
{
    rl.question("Digite a quantidade de derrotas: ", (inputDerrotas) =>
    {
        
        const vitorias = parseInt(inputVitorias);
        const derrotas = parseInt(inputDerrotas);

        exibirResultado(vitorias, derrotas);

        // Fecha o readline
        rl.close();
    });
});