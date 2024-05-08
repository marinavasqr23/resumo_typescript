//Tipando Funções

function calc(x: number, y: number): string {
    return `resultado: ${x + y}`;
   }
   let resultado : string;
   resultado = calc(10,15);
   console.log(resultado);
   //resultado: 25

   function calcu(x: number, y: number): string {
    return `resultado: ${x + y}`;
   }
   let resul : number;
   resultado = calc(10,15);
   console.log(resultado);
   //Type 'string' is not assignable to type 'number'.ts(2322)

//VOID: Função que não retorna valor

function log(): void {
    console.log('Sem retorno');
   }


//NEVER: Algo nunca deve ocorrer

function verificandoTipo(x: string | number): boolean {
    if (typeof x === "string") {
    return true;
    } else if (typeof x === "number") {
    return false;
    }
    return fail("Esse método não aceita esse tipo de type!");
    }
   function fail(message: string): never { throw new Error(message); }

//Type Assertions

function typeAssetions(codigoAny: any) {
    let codigoNumber: number = <number>codigoAny;
    return codigoNumber * 10;
   }
   let variavel= typeAssetions(10);
   console.log(variavel);

