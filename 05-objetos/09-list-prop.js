console.log('Listar Propiedades');

const punto = {
    x: 10,
    y: 15,
    dibiujar() {
        console.log('Dibujando');
    },
};
console.log(' ');

// Listar propiedades Object.keys(obj)
console.log('Propiedades con Object.keys():');
let keys = Object.keys(punto);
console.log(keys);
console.log(' ');

// Acceder a propiedad y valor Object.keys(obj)
console.log('Prop-Val con for-of y Object.keys():');
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
};
console.log(' ');

// Prop Valor con Object.entries()
console.log('[key, value] con Object.entries');
const keyValue = Object.entries(punto);
console.log(keyValue);
console.log(' ');

console.log('Listado con for-in - Metodo Actual');
for (let llave in punto) {
    console.log([llave, punto[llave]]);
};
console.log(' ');

// Borrado de prop-método
console.log('Borrado de método "dibujar"');
delete punto.dibiujar;
keys = Object.keys(punto);
console.log(keys);
console.log(' ');

console.log('Prop-Valor con Object.keys():');
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
};
console.log(' ');

console.log('Prop-Val con for-in:');
for ( let i in punto){
    let propVal = [i,punto[i]];
    console.log(propVal);
};
console.log(' ');


