
/*
    ===== Código de TypeScript =====

    https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad:string;
    },
    mostrarDireccion:() => void;
}

const superHero:SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ',' + this.direccion.ciudad + ',' + this.direccion.pais;
    }
}

const direccion = superHero.mostrarDireccion();

console.log(direccion);
