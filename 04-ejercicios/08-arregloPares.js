let array1 = [
    { id: 1, name: 'Nicolas' },
    { id: 2, name: 'Felipe' },
    { id: 3, name: 'Chanchito' }
];
let array2 = [
    { id: 20, name: 'Ivan' },
    { id: 3, name: 'Pedro' },
    { id: 105, name: 'Yamila' },
    { id: 11, name: 'Juan' }
];
let resultado;
function toPairs(arr) {
    let i = 0;
    let pares = [];
    for (let obj of arr) {
        pares[i] = [i + 1, obj];
        i++;
    };
    return pares;
};
console.log('Para arreglo 1:');
resultado = toPairs(array1);
console.log(resultado);

console.log('Para arreglo 2:');
resultado = toPairs(array2);
console.log(resultado);

// Respetando el ID con "for-in"
function toPairsId(arr){
    let pares = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pares[idx] = [elemento.id,elemento];
    };
    return pares;
};

console.log('Para arreglo 1 "for-in":');
resultado = toPairsId(array1);
console.log(resultado);

console.log('Para arreglo 2 "for-in":');
resultado = toPairsId(array2);
console.log(resultado);