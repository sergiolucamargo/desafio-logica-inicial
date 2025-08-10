
// Importa biblioteca nativa para entrada de dados no terminal
const readline = require('readline');

// Função que calcula o saldo de vitórias
function calcularSaldo(vitorias, derrotas)
{
    return vitorias - derrotas;
}

// Função que retorna o nível do jogador baseado nas vitórias
function determinarNivel(saldo)
{
    let nivel;

    switch (true)
    {
        case (saldo <= 10):
            nivel = "Ferro";
            break;
        case (saldo >= 11 && saldo <= 20):
            nivel = "Bronze";
            break;
        case (saldo >= 21 && saldo <= 50):
            nivel = "Prata";
            break;
        case (saldo >= 51 && saldo <= 80):
            nivel = "Ouro";
            break;
        case (saldo >= 81 && saldo <= 90):
            nivel = "Diamante";
            break;
        case (saldo >= 91 && saldo <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
            break;
    }

    return nivel;
}

// Cria interface de entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Entrada de dados
rl.question("Digite o numero de vitorias: ", (vitoriasInput) =>
{
    rl.question("Digite o numero de derrotas: ", (derrotasInput) =>
    {
        
        let vitorias = parseInt(vitoriasInput);
        let derrotas = parseInt(derrotasInput);

        // Processamento
        let saldo = calcularSaldo(vitorias, derrotas);
        let nivel = determinarNivel(saldo);

        // Saída
        console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);

        rl.close();
    });
});
