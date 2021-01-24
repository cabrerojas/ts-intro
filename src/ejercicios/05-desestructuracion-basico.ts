
/*
    ===== Código de TypeScript =====

*/

interface Reproducto {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles{
    autor: string;
    anio: number;
}

const reproducto: Reproducto = {
    volumen: 90,
    segundo: 35,
    cancion: "Mr. Brightside",
    detalles: {
        anio: 2020,
        autor: "The Killers"
    }
}

const autor = 'Fulano';

const { volumen: vol, segundo, cancion, detalles } = reproducto;

const { autor: autorDetalle } = detalles;



// console.log('El volumen actual de:', vol);
// console.log('El segundo actual de:', segundo );
// console.log('La cancion actual de:', cancion);
// console.log('El autor es:', autorDetalle);

const dbz: string[] = ['Goku','Vegeta','Trunks'];
const [ p1, ,p3 ] = dbz;

console.log('Personaje 1:', p1);
console.log('Personaje 1:', dbz[1]);
console.log('Personaje 1:', p3);

