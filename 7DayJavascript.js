//Desafio #01

/*const valoresNumero = [1,30,10];

const valoresString = ['1','30','10'];

let verificar = compararValores(valoresNumero[0],valoresString[0]);

function compararValores(valoresNumero,valoresString){
    if (valoresNumero == valoresString){
        console.log('As variáveis tem o mesmo valor, mas tipos diferentes')
    }else{
        console.log('As variáveis não tem o mesmo valor')
    }
};

console.log(verificar);*/

//____________________________________

let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

let infoUsuario = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

console.log(infoUsuario);

let opcoes = prompt`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`;

if (opcoes == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.")
}else (opcoes == 2);{
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
};