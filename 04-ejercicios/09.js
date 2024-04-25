// Arreglos pares sin id
let arrPar1 = [
    [1, { name: 'Nicolas' }],
    [2, { name: 'Felipe' }],
    [3, { name: 'Chanchito' }]
];
let arrPar2 = [
    [20, { name: 'Ivan' }],
    [3, { name: 'Pedro' }],
    [105, { name: 'Yamila' }],
    [11, { name: 'Juan' }]
];
let resultado;
function toCollection(arr) {
    let arreglo = [];
    let id;
    let name;
    for (idx in arr) {
        id = arr[idx][0];
        name = arr[idx][1].name;
        arreglo[idx] = { id, name };
    };
    return arreglo;
};
resultado = toCollection(arrPar1);
console.log(resultado);

resultado = toCollection(arrPar2);
console.log(resultado);