console.log('ARREGLOS - .spread()');
console.log(' ');

// Arreglos
let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9];
console.log('Arreglos:');
console.log(arr1);
console.log(arr2);

// Combinar
console.log('Método .spread()');
let arr3 = [...arr1, 4, 5, 6, ...arr2]
console.log('Nuevo arreglo:');
console.log(arr3);
console.log(' ');