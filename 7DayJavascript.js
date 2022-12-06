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
//Desafio #02

/*
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
*/

//_________________________________________
//Desafio #03

/*const area = prompt("Você quer seguir para área de Front-end ou seguir para a área de Back-end? Digite a área de preferência.");
let linguagem = "";

if (area == "Front-end"){
    linguagem = prompt("Você quer aprende React ou Vue?");
}
else if(area == "Back-end"){
    linguagem = prompt("Você quer aprende C# ou Java?");
}
else{
    alert("Nenhuma informação foi inserida!");
};

const especializarOuFullstack = prompt(`Você quer se especializar em ${linguagem} ou se tornar Fullstack?Digite 1 para especializar ou 2 para Fullstack.`);

if(especializarOuFullstack == 1 ){
    alert(`Parabéns continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if(especializarOuFullstack == 2){
    alert(`Que tal aprender um nova linguagem ou framework para ser tornar um Dev Fullstack`);
}
else{
    alert("Nenhuma informação foi inserida!");
};

let msg = prompt("Qual outra tecnologia você gostaria de se especializar?Digite 'ok' para me dizer qual é");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender?Digite 'ok' para me dizer qual é");
};
*/

//_________________________________________

//Desafio #04
/*
let numeroAleatorio = Math.floor(Math.random()*11);
let errouNumero = 0;

console.log(numeroAleatorio)
for(let i = 0; i < 3; i+=1){
    adivinharValor = prompt("Tente adivinhar o número de 0 a 10:");
    //console.log(i);
    if(numeroAleatorio == adivinharValor){
        alert(`Parabéns!Você acertou.`); 
        break;
    }
    if(numeroAleatorio !== adivinharValor){
        errouNumero += 1;
        //console.log(errouNumero)
        alert("tente novamente")
    }
    if(errouNumero == 3){
        alert(`Que pena você errou.O número era ${numeroAleatorio}`)
    }
}
*/

//_________________________________________

//Desafio #05

//categoria
let frutas = ["laranja"];
let laticinios = ["queijo"];
let legumes = ["cenoura"];
let doces = ["bolacha"];

let inserirComida = "";
let opcaoCategoria = "";

let opcaoAdicionar = "sim";

while(opcaoAdicionar == "sim"){
    
    opcaoAdicionar = prompt("Você deseja adicionar uma comida na sua lista de compras?");

    if(opcaoAdicionar != "sim"){
        break;
    };

    inserirComida = prompt("qual comida você deseja inserir");
    //alert(`${inserirComida}`);
    opcaoCategoria = prompt("Em qual categoria você degeja inseri seu alimento.Digite 1 para frutas,2 para laticínios,3 para legumes ou 4 para doces.");


    if(opcaoCategoria == 1){
        frutas.push(inserirComida);
    }else if(opcaoCategoria == 2){
        laticinios.push(inserirComida);
    }else if(opcaoCategoria == 3){
        legumes.push(inserirComida);
    }else if(opcaoCategoria == 4){
        doces.push(inserirComida);
    }else{
    alert("categoria não definida");
    };

    
};

alert(`Lista de Compras:\n Frutas: ${frutas} \n Laticínios: ${laticinios} \n Legumes: ${legumes} \n Doces: ${doces} `);
