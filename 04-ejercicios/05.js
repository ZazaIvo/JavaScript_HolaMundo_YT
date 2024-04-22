// Arreglo
let array1 = [2,5,7,15,-5,-100,55];
let array2 = [7,25,6,12,-5,-101,46];
// Función
function getMayorMenor (arr){
    let menor = arr[0]; // Primer valor
    let mayor = arr[0]; // Primer valor
    for (num of arr){
        menor = menor <= num ? menor : num;
        mayor = mayor >= num ? mayor : num;
    };
    return [menor, mayor];
};

let extremo = getMayorMenor(array2);
console.log(extremo);