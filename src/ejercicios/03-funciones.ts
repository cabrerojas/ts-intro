
/*
    ===== Código de TypeScript =====

*/


function sumar(a: number, b: number): number {
    return a + b;
}


const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar (numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}
 
// const resultado = multiplicar(654,0,23);

// console.log(resultado);

interface PerosnajeLOR {
    nombre:string;
    pv: number;
    mostrarHP:() => void;
}

function curar( personaje: PerosnajeLOR, curarX: number ):void {

    personaje.pv += curarX;
    
    console.log(personaje);
    
}

const nuevoPersonaje: PerosnajeLOR = {
    nombre:"Legolas",
    pv: 1000,
    mostrarHP(){
        console.log('Puntos de Vida: ',this.pv);
    }
}


curar(nuevoPersonaje,43);

nuevoPersonaje.mostrarHP();


