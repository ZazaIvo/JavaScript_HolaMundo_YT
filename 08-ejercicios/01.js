console.log('Ejercicio 01 - Absoluto');
console.log(' ');

// Arreglo
const ns = [-2, 3, -5, 4, 10, 12, -20];

// Solución Propia
function paraAbsolutoP(arr) {
    let absoluto = [];
    let absOrden = [];
    for (idx in arr) {
        absoluto[idx] = Math.abs(arr[idx]);
    };
    absOrden = absoluto.sort((a, b) => {
        if (a<b) { return -1};
    });
    return absOrden;
};
console.log('El arreglo:');
console.log(ns);
console.log('Arreglo absoluto y ordenado:');
console.log(paraAbsolutoP(ns));
console.log(' ');

// Solución Curso
function paraAbsolutoC(arr){
    return arr.map(n => Math.abs(n));
};
console.log('Absoluto por Curso:');
console.log(paraAbsolutoC(ns));