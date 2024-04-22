let x;
let i = 0;
function numberImpar(x) {
    while (i <= x) {
        if ((i % 2) !== 0) {
            console.log('impar', i);
        };
        i++;
    }
};
x = 10;
let impares = numberImpar (x);