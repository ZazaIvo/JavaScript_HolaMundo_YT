console.log('Ejercicio 03 - Filtro exluye');
console.log(' ');

// Arreglo de objetos
const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];
console.log(usuarios);
console.log(' ');

// Solución Propia
function getPaidUserP(usrs) {
    let noFree = usrs.filter(u => {
        if (u.plan !== 'free') {
            return true;
        }
    });
    return noFree;
};
console.log('Los ususarios de pago son:');
console.log(getPaidUserP(usuarios));

// Solucion Curso
function getPaidUserC(usrs) {
    return usrs.filter(u => u.plan !== 'free');
};
console.log('Los ususarios de pago son:');
console.log(getPaidUserC(usuarios));