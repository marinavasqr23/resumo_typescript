//TUPLA: Igual array mas com a possibilidade de diferentes tipos de dados

let alunos:[string,number,string]=['Arthur',14,'Lima'];
let aluno:[nome:string,idade:number,sobrenome:string]=['Leo',34,'Silva'];
console.log(aluno[0]);
//Leo
console.log(aluno[1]);
//34
let list: readonly [name:string, age:number] = ['Maria', 1];

list.push('Mariana',13);
//error
