console.log('Ejercicio 06 - TIPOS ');
console.log(' ');

// Arreglo
const myArray = [
    'Hola',
    12,
    true,
    'Mundo',
    {},
    false,
    { id: 5 },
    ['lala'],
    10,
];

// Solución Propia
console.log('Solución Propia');
function dividePorTipoP(arr) {
    return arr.reduce((acc, el) => { 
        if( typeof el === 'number'){
            acc.number.push(el);
        };
        if( typeof el === 'string'){
            acc.string.push(el);
        };
        if( typeof el === 'boolean'){
            acc.boolean.push(el);
        };
        if( typeof el === 'object'){
            acc.object.push(el);
        };
        return acc;
    }, {number: [],string: [], boolean: [], object: []});
};
let arr = dividePorTipoP(myArray);
console.log(arr);
console.log(' ');

// Solución Curso
console.log('Solución Curso');
function dividePorTipoC(arr){
    return arr.reduce((acc, el)=> {
        let llave = typeof el;
        // Generar arreglo de tipo
        acc[llave] = acc[llave] ? acc[llave] : [];
        // si existe usa => string: [textos],
        // is no exites => newProp : [],

        // Agregar elemento al arreglo
        acc[llave].push(el);
        return acc;
    }, {});
};
arr = dividePorTipoC(myArray);
console.log(arr);
console.log(' ');
