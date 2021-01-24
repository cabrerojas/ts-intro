
/*
    ===== Código de TypeScript =====

*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1 :   Pasajero = {
    nombre: 'Guillermo'
}

const pasajero2 :   Pasajero = {
    nombre: 'Angie',
    hijos:['Sofia', 'Gabriel']
}

function imprimeHijos(pasajero : Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
    
}

console.log(imprimeHijos(pasajero1));

