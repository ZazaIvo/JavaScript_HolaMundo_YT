console.log('ARREGLOS - Reduce');
console.log(' ');

const numeros = [1, 2, 3, 4];

// Reducir sumando
const suma = numeros.reduce((acc, el) => {
    return acc + el;
}, 0);
console.log('La suma es:', suma);
console.log(' ');

// Aplanar arreglo
const arrayArray = [numeros, [12, 20, 17, 18], 25];
const arrayPlano = arrayArray.reduce((acc, el) => {
    return acc.concat(el);
}, [])
console.log('Arreglo:', arrayArray);
console.log('Arreglo plano:');
console.log(arrayPlano);
console.log(' ');

// Indexado
let usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

const indexName = usuarios.reduce((acc, el) => {
    return {
        ...acc,
        [el.nombre]: el,
    };
}, {});
console.log('Usuarios Indexados:');
console.log(indexName);
const edadFel = indexName.Felipe.edad;
console.log('Edad de Felipe:', edadFel);