console.log('Funciones Flecha');
console.log(' ');
const sumaArray = function (a, b) {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
};
console.log('La suma de los argumentos es:',sumaArray(1, 3, 2, 7, 9));