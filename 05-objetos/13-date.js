console.log('Tema: OBJETO DATE');
console.log(' ');

// Obejto Ahora
const ahora = new Date();
console.log(ahora);
console.log(' ');

// Crear Fecha
const fecha = new Date(1983, 11, 2, 1, 30, 0);
console.log(fecha);
console.log(' ');

// Formatos .to..();
console.log('.toDateString():');
console.log(ahora.toDateString());
console.log(fecha.toDateString());
console.log(' ');

console.log('.toISOString():');
console.log(ahora.toISOString());
console.log(fecha.toISOString());
console.log(' ');

console.log('.toTimeString():');
console.log('Mostrar solo la hora');
console.log(ahora.toTimeString());
console.log(fecha.toTimeString());
console.log(' ');

// Formatos .get..();
console.log('.getDate():');
console.log(ahora.getDate());
console.log(fecha.getDate());
console.log(' ');

console.log('.getDay():');
console.log(ahora.getDay());
console.log(fecha.getDay());
console.log(' ');

console.log('.getFullYear():');
console.log(ahora.getFullYear());
console.log(fecha.getFullYear());
console.log(' ');

// Cambio de datos .set..()
console.log('.setFullYear():');
ahora.setFullYear(2020);
fecha.setFullYear(1985);
console.log(ahora);
console.log(fecha);
console.log(' ');