//READONLY ARRAY: Somente para leitura sem possibilidade de alteração

const preco:ReadonlyArray<number>=[23.90,99.90];
preco.push(45.90);
console.log(preco.length);
console.log(preco[2]);
preco[2]=45.60;
//error
//2
//undefined
//error
