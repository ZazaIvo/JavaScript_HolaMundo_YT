console.log('ARREGLOS - Join');
console.log(' ');

// Arreglos
let arr1 = ['Ivan'];
let arr2 = ['Yami'];
let arr3 = ['Juan'];

// Combinar
let arr4 = [...arr1, ...arr2, ...arr3];
// Método .join() con separador
let mensaje = arr4.join(' - ');
console.log(mensaje);
console.log(' ');

// Separar por .split()
let nombres = 'Marcos Ivan Azzarello';
let user = nombres.split(" ");
console.log('Texto:', nombres);
console.log('Arreglo:', user);
console.log(' ');

//Crear Url
console.log('Crear Url');
let bag = 'Luaz Desarrollo';
console.log('Nombre Marca:',bag);
let bagArray = bag.split(" ");
let arrUrl = ['www.',...bagArray, '.com'];
let bagUrl = arrUrl.join('');
console.log(bagUrl);

