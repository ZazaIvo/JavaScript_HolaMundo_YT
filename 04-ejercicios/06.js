// Arreglo
let array1 = [2, 5, 7, 15, -5, -100, 55];
let array2 = [7, 25, -6, 12, -5, -101, 46];
let resultado;
function cuantosPosit(arr) {
    let cantPos = 0;
    for (let num of arr) {
        if (num > 0) {
            cantPos++;
        };
    };
    return cantPos;
};

resultado = cuantosPosit(array1);
console.log('Cantidad de números positivos arreglo 1:', resultado);
resultado = cuantosPosit(array2);
console.log('Cantidad de números positivos arreglo 2:', resultado);

