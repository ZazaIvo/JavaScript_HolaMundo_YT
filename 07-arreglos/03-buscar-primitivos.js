console.log('ARREGLOS - Buscar Primitivos');
console.log(' ');

// Array
const letras = [1,'a','b','c','d','e','f','g','j',1];

// Primer indice
let valor = 1;
let index = letras.indexOf(valor);
if(index >= 0){
    console.log('El primer indice de "',valor,'" es:',index);
} else {
    console.log('No existe');
};
console.log(' ');

// Ultimo indice
let indexFin = letras.lastIndexOf(valor);
if(indexFin > 0){
    console.log('El último indice de "',valor,'" es:',indexFin);
} else {
    console.log('No existe');
};
console.log(' ');

// Incluido
let includ = letras.includes(valor);
console.log('Existe el valor',valor,'?');
console.log(includ);