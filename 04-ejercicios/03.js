// Arreglo
let arr = [1, 2, 3];
let idx;
// Función
function getByIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';
    };
    return arr[idx];
};
idx = 5;
let resultado = getByIdx(arr,idx);
console.log('El elemento para',idx,'es',resultado);