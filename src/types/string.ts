//STRING: 

let nome:string ='Marina';
nome='Luiza';

let idade:number=20;

let frase:string= 'Oi eu sou a ${nome} e tenho ${idade} anos.'

//Trabalhando com string

//LENGTH: tamanho da string

console.log(frase.length); //conta inclusive os espaços em branco
//42

//INDEXOF: posição de uma string

console.log(frase.indexOf('nome'));
//14
console.log(frase.indexOf('idade'));
//30

console.log(frase.indexOf('sobrenome'));
//-1 (não está dentro da string)

