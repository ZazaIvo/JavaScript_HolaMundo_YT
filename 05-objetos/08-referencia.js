console.log('Referencia de datos');
console.log(' ');

// Variables Primitivas
let a = 1;
let b = a;
b++;
console.log(a, b);
console.log(' ');

console.log('Variables de Referencia');
// Variable Referencia
let obj1 = [1, 2];
let obj2 = [1, 2];
let comp = obj1 === obj2;
console.log('Los objetos son iguales?: ',comp);

obj2 = obj1;
comp = obj1 === obj2;
console.log('Los objetos son iguales?: ',comp);
console.log(' ');

console.log('Modificando datos misma referencia');
obj1[2] = 3;
console.log('Objeto obj1 modificado:',obj1);
console.log('Objeto obj2 cambia:',obj2);


