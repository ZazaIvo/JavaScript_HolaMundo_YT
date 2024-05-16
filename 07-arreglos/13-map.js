console.log('ARREGLOS - Maps - Join');
console.log(' ');

//Usuarios
let usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// Método map.()
console.log('Método .map()');
const lista1 = usuarios.map((usuario) => {
    return `<li>${usuario.nombre}</li>`;
});
console.log(lista1);
console.log(' ');

// Crear HTML
console.log('Método map() + join("")');
const list2 = `<ul>${lista1.join('')}</ul>`;
console.log(list2);
console.log(' ');

// Crear nueva lista
console.log('Lista de mayor de edad');
const userMapped = usuarios.map(u => {
    return {
        ...u,
        mayor: u.edad > 17, // true - false
    };
});
console.log(userMapped);
console.log(' ');

// Lista de mayores de edad
console.log('Encadenado de .filter().map()');
console.log('Lista mayores de edad:');
const listMay = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`);
const listHtmlMay = `<ul>${listMay.join('')}</ul>`;
console.log(listHtmlMay);
console.log(' ');

// Lista menores de edad
console.log('Lista menores de edad');
const listMen = usuarios
    .filter(u => u.edad <= 17)
    .map( u => `<li>${u.nombre}</li>`);
    
const listHtmlMen = `<ul>${listMen.join('')}</ul>`;
console.log(listHtmlMen);
