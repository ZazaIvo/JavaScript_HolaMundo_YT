// Personaje de Tv
let nombre = 'Tanjiro';
let anime = 'Demon slayer';
let edad = 16;

// Objeto
let personaje = {
    nombre: 'Tanjiro',
    anime: 'Demon slayer',
    edad: 16,
};

console.log(personaje);
console.log("El nombre es: "+personaje.nombre);
console.log("El anime es: "+personaje.anime);
console.log("La edad es: "+personaje['edad']);

personaje.nombre = 'Suriji';

let llave = 'edad';
personaje[llave] = 16;

delete personaje.anime;
console.log(personaje);

