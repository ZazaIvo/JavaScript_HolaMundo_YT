// Arreglo de N números loop While
let num;
let arrNum = [];
function crearArrayN(num) {
    let arr = [];
    let i = 0;
    if (num === 0) {
        arr[0] = 1;
        return arr;
    } else if (num >= 0) {
        while (i < num) {
            arr[i] = i + 1;
            i++;
        };
        return arr;
    } else {
        return ['Error: número menor de cero']
    };
};

num = 10;
arrNum = crearArrayN(num);
console.log('Metodo While');
console.log('Para número: ',num);
console.log(arrNum);

// Arreglo de N números loop For
function crearArrayFor (num) {
    let arr = [];
    if (num <= 0){
        return arr = ['Error, número menor o igual a 0'];
    };
    for (let i = 0; i < num ; i++){
        arr[i] = i + 1;
    };
    return arr;
};

arrNum = crearArrayFor(num);
console.log('Metodo For');
console.log('Para número: ',num);
console.log(arrNum);