
/*
    ===== Código de TypeScript =====

    https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

let habilidades: string[] = ['Bash','Counter','Healing'];

 // habilidades.push(2);


 interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
 }
 

 const personaje: Personaje = {
     nombre: 'Strider',
     hp: 100,
     habilidades: ['Bash','Counter','Healing']
 }

 personaje.puebloNatal = 'Pueblo Paleta';

 console.table(personaje);