//Var: variável que pode ser acessada de qualquer ponto dentro do código

var nome='Marina';

if(true){
    var sobrenome='Rodrigues';
    console.log(sobrenome);
}

console.log(nome);
console.log(sobrenome);

//Rodrigues
//Marina
//Rodrigues

//Let: acessível apenas dentro do bloco que foi declarada e não ocorre o hoisting
let curso;
curso ='Computação';

console.log(curso);

let escola;
escola='FB';

if(true){
    console.log(escola);
    let cidade='Fortaleza';
    console.log(cidade);
}
console.log(cidade); //Fora do bloco em que foi criado
//Computação
//FB
//Fortaleza
//ERROR

//CONST: valor imutável - não ocorre o hoisting - também limitadas a um escopo

const curso1='Fisica'; //tem que sempre ser incializada
console.log(curso1);

if(true){
    const name='Luis';
    console.log(name);
    console.log(curso1);
}
console.log(name);

//Fisica
//Luis
//Fisica
//ERROR

