console.log('ARREGLOS - Vaciado');
console.log(' ');
console.log('Arreglo:');
let arr = [1, 2, 3, 4, 5,];
console.log(arr);
console.log(' ');

// Vaciar []
console.log('Vaciar []');
let arr2 = arr;
arr = [];
console.log(arr);
console.log(arr2);
console.log(' ');

// Vaciar .length = 0
console.log('Vaciar .length');
let arr3 = [1, 2, 3];
let arr4 = arr3;
arr3.length = 0;
console.log(arr3);
console.log(arr4);
console.log(' ');

// Vaciar .splice()
console.log('Vaciar .splice.()');
let arr5 = [1, 2, 3, 4];
let arr6 = arr5;
arr6.splice(0, arr6.length);
console.log(arr5);
console.log(arr6);

// Vaciar con while ()
console.log('Vaciar while(){}');
let arr7 = [1, 2, 3,];
let arr8 = arr7;
while (arr7.length > 0){
    console.log(arr7);
    arr7.pop();
};
console.log('Arreglos vacios:');
console.log(arr7);
console.log(arr8);
