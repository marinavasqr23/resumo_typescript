//ENUM: Permite declarar um conjuntos de valores constantes e predefinidos

//Numérico: aramazenam strings com valores numéricos- não necessariamente precisa iniciar com um valor

export enum DiaDaSemana {
Segunda = 1,
Terça = 2,
Quarta = 3,
Quinta = 4,
Sexta = 5,
Sábado = 6,
Domingo = 7
}
//Auto incremento omeçando em 0
export enum DiasDaSemana {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
   }
   
//String: precisam iniciar com um valor

export enum Semana {
Segunda = "Segunda-feira",
 Terca = "Terça-feira",
 Quarta = "Quarta-feira",
 Quinta = "Quinta-feira",
 Sexta = "Sexta-feira",
 Sabado = "Sábado",
 Domingo = "Domingo",

}
console.log(Semana.Segunda);
console.log(Semana['Terca']);
//Segunda-feira
//Terça-feira

//HETEROGENEOUS: aceitam number e string

export enum Heterogeneous {
    Segunda = 'Segunda-feira',
    Terca = 1,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 18,
   }
   