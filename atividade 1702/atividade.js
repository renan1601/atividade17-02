const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;


function menuBanco() {
    rl.question(
        "Escolha uma opção:\n1 - Ver saldo\n2 - Sacar\n3 - Depositar\n4 - Sair\nDigite o número da opção: ",
        (opcao) => {
            opcao = parseInt(opcao);

            switch (opcao) {
                case 1:

                    console.log("Seu saldo atual é R$ ${saldo}");
                    menuBanco();
                    break;
                case 2:

                    rl.question("Digite o valor que deseja sacar: R$ ", (saque) => {
                        saque = parseFloat(saque);
                        if (saque > saldo) {
                            console.log("Saldo insuficiente para essa operação.");
                        } else if (saque > 0) {
                            saldo -= saque;
                            console.log("Você sacou R$ ${saque}. Seu novo saldo é R$ ${saldo}");
                        } else {
                            console.log("Valor inválido para saque.");
                        }
                        menuBanco();
                    });
                    break;
                case 3:

                    rl.question("Digite o valor que deseja depositar: R$ ", (deposito) => {
                        deposito = parseFloat(deposito);
                        if (deposito > 0) {
                            saldo += deposito;
                            console.log("Você depositou R$ ${deposito}. Seu novo saldo é R$ ${saldo}");
                        } else {
                            console.log("Valor inválido para depósito.");
                        }
                        menuBanco();
                    });
                    break;
                case 4:

                    console.log("Saindo do sistema. Até logo!");
                    rl.close();
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
                    menuBanco();
            }
        });
}


menuBanco();



//atividade=4

const alunos = [
    { aluno: 'joao', nota: 10 },
    { aluno: 'maria', nota: 6 },
    { aluno: 'mateus', nota: 8 },
    { aluno: 'diego', nota: 7 },
];

let somaNotas = 0;

alunos.forEach(aluno => {
    somaNotas += aluno.nota;
});

console.log('A soma das notas é:', somaNotas);

//atividade= 5

const palavras = ["maçã", "banana", "laranja", "maçã", "banana", "maçã"];

const contagem = {};


for (const palavra of palavras) {
    contagem[palavra] = (contagem[palavra] || 0) + 1;
}


for (const palavra in contagem) {
    console.log('${palavra}: ${contagem[palavra]}');
}