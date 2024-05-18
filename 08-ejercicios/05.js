console.log('Ejercicio 05 - VALOR PROPIEDAD');
console.log(' ');

// Arreglo de objetos
const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];
console.log('Ususarios:', usuarios);
console.log(' ');

// Solución Propia - .reduce()
console.log('Solución Propia');
function getMayor(usrs) {
    let mayor =  usrs.reduce((acc, el) => {
        if (acc.edad < el.edad) {
            acc = el;
        };
        return acc;
    }, { edad: 0 });
    return mayor;
};
let mayorEdad = getMayor(usuarios);
console.log('El usuario de mayoer edad es:',mayorEdad.nombre);
console.log(mayorEdad);
console.log(' ');

// Solución Curso - for(){}
console.log('Solución Curso');
function obtenerMayor(arr){
    let compMay = arr[0]; // Obj inicial
    for ( let usuario of arr) {
        if (compMay.edad < usuario.edad){
            compMay = usuario;
        }
    }
    // Retornar el usuario mayor
    return compMay;
};
mayorEdad = obtenerMayor(usuarios);
console.log('Usuario mayor edad:', mayorEdad.nombre);
console.log(mayorEdad);