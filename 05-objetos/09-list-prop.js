console.log('Listar Propiedades');
console.log(' ');

const punto = {
    x: 10,
    y: 15,
    dibiujar() {
        console.log('Dibujando');
    },
};
console.log(' ');

console.log('Propiedades:');
let keys = Object.keys(punto);
console.log(keys);
console.log(' ');

console.log('Propiedades y valor:');
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
};
console.log(' ');

console.log('[key, value] con .entries');
const keyValue = Object.entries(punto);
console.log(keyValue);
console.log(' ');

console.log('Listado con for-in');
for (let llave in punto) {
    console.log([llave, punto[llave]]);
};
console.log(' ');

console.log('Borrado de propiedad');
delete punto.dibiujar;
keys = Object.keys(punto);
console.log(keys);
console.log(' ');

console.log('Propiedad valor / borrado:');
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
};
console.log(' ');

