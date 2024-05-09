console.log('ARREGLOS - Eliminar');
console.log(' ');
// Arreglo
const letras = ['a','b','c','d','e',];
// Ver indices
for (i in letras){
    console.log(i,letras[i]);
};
console.log(' ');

//Eliminar .pop() - Ultimo
let clead = letras.pop();
console.log('Elemento eliminado:', clead);
console.log('Nuevo arreglo:');
console.log(letras);
console.log(' ');

// Eliminar .shift() - Primero
let pimClead = letras.shift();
console.log('Elemento eliminado:', pimClead);
console.log('Nuevo arreglo:');
console.log(letras);
console.log(' ');

// Eliminar .splice(index, cant) - Intermeio
let intClead = letras.splice(1,1);
console.log('Elemento eliminado:', intClead);
console.log('Nuevo arreglo:');
console.log(letras);
console.log(' ');