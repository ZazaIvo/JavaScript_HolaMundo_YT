/* Encontrar el mayor y menor de un arreglo con solo una
iteración. */
// Arreglo
let array1 = [2,5,7,15,-5,-100,55];
let array2 = [7,25,6,12,-5,-101,46];
// Función
function getMayorMenor (arr){
    let menor = arr[0]; // Primer valor
    let mayor = arr[0]; // Primer valor
    // Usar for-of para evaluar valores
    for (num of arr){
        // var = condicion(true/false) ? (accion en true) : (accion en false);
        menor = menor <= num ? menor : num;
        mayor = mayor >= num ? mayor : num;
    };
    // Retorna el final del for
    return [menor, mayor];
};

let extremo = getMayorMenor(array2);
console.log(extremo);