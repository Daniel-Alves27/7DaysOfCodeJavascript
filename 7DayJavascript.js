//Desafio #01

const valoresNumero = [1,30,10];

const valoresString = ['1','30','10'];

let verificar = compararValores(valoresNumero[0],valoresString[0]);

function compararValores(valoresNumero,valoresString){
    if (valoresNumero == valoresString){
        console.log('As variáveis tem o mesmo valor, mas tipos diferentes')
    }else{
        console.log('As variáveis não tem o mesmo valor')
    }
};

console.log(verificar);

//____________________________________