// Importa o módulo readline nativo do Node.js
const readline = require("readline");

// Função auxiliar para perguntar no terminal e aguardar resposta
function perguntar(pergunta)
{
    return new Promise((resolve) =>
    {
        rl.question(pergunta, (resposta) =>
        {
            resolve(resposta);
        });
    });
}

// Classe genérica de herói
class Heroi
{
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    atacar()
    {
        let ataque = "";

        switch (this.tipo)
        {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.tipo} ${this.nome} com ${this.idade} anos, atacou usando ${ataque}`);
    }
}

// Cria a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função principal
async function main()
{
    const herois = [];

    let quantidadeHerois = parseInt(await perguntar("Quantos heróis deseja cadastrar? "));

    // Laço para cadastrar os Heróis
    for (let i = 0; i < quantidadeHerois; i++)
    {
        console.log(`\nCadastro do herói ${i + 1}:`);
        let nome = await perguntar("Digite o nome do herói: ");
        let idade = parseInt(await perguntar("Digite a idade do herói: "));
        let tipo = await perguntar("Digite o tipo do herói (mago, guerreiro, monge, ninja): ");

        herois.push(new Heroi(nome, idade, tipo));
    }

    console.log("\n--- Ataques ---");
    for (let heroi of herois)
    {
        heroi.atacar();
    }

    rl.close();
}

main();
