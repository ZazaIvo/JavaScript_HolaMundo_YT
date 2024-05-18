console.log('Ejercicio 07 - Agrupar por valor ');
console.log(' ');

// Arreglo de objetos
const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 23, nombre: 'Felipe', plan: 'gold' },
    { edad: 25, nombre: 'Jose', plan: 'gold' },
    { edad: 26, nombre: 'Martin', plan: 'free' },
    { edad: 40, nombre: 'Lucas', plan: 'free' },
    { edad: 42, nombre: 'Pedro', plan: 'premium' },
];
console.log('Ususarios:', usuarios);
console.log(' ');

// Funcion
function groupBay(arr, prop) {
    return arr.reduce((acc, el) => {
        // Obtenemos el valor de la prop que pasamos
        let valor = el[prop];
        // Evaluamos si existe o creamos propiedad
        acc[valor] = acc[valor] ? acc[valor] : [];
        acc[valor].push(el);
        return acc;
    }, {});
};
const grouped = groupBay(usuarios, 'plan');
console.log(grouped);
