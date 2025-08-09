// Importa o módulo readline para entrada e saída no terminal
const readline = require('readline');

// Cria a interface de leitura e escrita no terminal
const rl = readline.createInterface({
  input: process.stdin,  // entrada padrão (teclado)
  output: process.stdout // saída padrão (console)
});

// Pergunta ao usuário o nome do herói
rl.question('Digite o nome do herói: ', (nome) =>
{
  // Pergunta ao usuário a quantidade de XP do herói
    rl.question('Digite a quantidade de XP do herói: ', (xpString) =>
    {
    // Converte a entrada de XP para número
    const xp = Number(xpString);

        // Verifica se o XP é um número válido e positivo
        if (isNaN(xp) || xp < 0)
        {
         console.log('XP inválido! Por favor, insira um número positivo.');
        rl.close(); // Encerra a interface de entrada/saída
        return;     // Sai da função para não continuar a execução
        }

        let nivel = '';

        // Estrutura de decisão para classificar o nível do herói baseado no XP
        if (xp < 1000)
        {
            nivel = 'Ferro';
        }   else if (xp >= 1001 && xp <= 2000)
            { nivel = 'Bronze'; }
            else if (xp >= 2001 && xp <= 5000)
            { nivel = 'Prata'; }
            else if (xp >= 5001 && xp <= 7000)
            { nivel = 'Ouro'; }
            else if (xp >= 7001 && xp <= 8000)
            { nivel = 'Platina'; }
            else if (xp >= 8001 && xp <= 9000)
            { nivel = 'Ascendente'; }
            else if (xp >= 9001 && xp <= 10000)
            { nivel = 'Imortal'; }
            else if (xp >= 10001)
            { nivel = 'Radiante'; }

    // Exibe o resultado no console
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

    // Encerra a interface para liberar recursos
    rl.close();
    });
});
