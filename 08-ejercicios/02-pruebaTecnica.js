console.log('Ejercicio 02 - Filtrar tipos');
console.log(' ');

// Arreglo
const myArray = [
    'Hola',
    12,
    'Mundo',
    {},
    { id: 15 },
    ['lala'],
];
console.log('Arreglo:', myArray);
console.log(' ');

// Solución Propia
function divideTipoP(arr) {
    let typeString = [];
    let typeNumber = [];
    let typeObject = [];
    typeString = arr.filter(u => {
        if (typeof (u) === 'string') {
            return true;
        };
    });
    typeNumber = arr.filter(u => {
        if (typeof (u) === 'number') {
            return true;
        };
    });
    typeObject = arr.filter(u => {
        if (typeof (u) === 'object') {
            return true;
        };
    });
    return {
        String: typeString,
        Number: typeNumber,
        Object: typeObject,
    };
};

const myArrayType = divideTipoP(myArray);
console.log('Solución Propia');
console.log(myArrayType);
console.log(' ');


// Solución Curso
console.log('Solción Curso');
function divideTipoC(arr) {
    return {
        Number: arr.filter(n => typeof n === 'number'),
        String: arr.filter(n => typeof n === 'string'),
        Object: arr.filter(n => typeof n === 'object'),
    };
};
console.log(divideTipoC(myArray));