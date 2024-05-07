//UNION: Uma mesma variável pode ser de diferentes tipos

var exemplo : (string | number);
exemplo = "Marina";
console.log(exemplo);
exemplo = 23;
console.log(exemplo);
//Marina
//23

var exemplo2 : (string[] | number[]);
exemplo2=['Ola','Bonjour','Hello'];
var i:number;

for(i=0;i<exemplo2.length;i++){
    console.log(exemplo2[i]);
}

exemplo2=[12,34,56];

for(i=0;i<exemplo2.length;i++){
    console.log(exemplo2[i]);
}