console.log('Arguments');

function suma(a, b) {
    console.log(arguments);
    return a + b;
};
console.log('La suma es:', suma(3, 5));
console.log('Con un solo parámetro:', suma(3));
console.log('Mustra los argumentos:');
console.log('Con varios argumentos:', suma(1, 3, 2, 7, 9));
console.log('');

// Métodos dentro de Arguments
function sumar(a, b) {
    console.log(arguments);
    let total = 0;
    for (valor of arguments) {
        total += valor;
    };
    return total;
};
console.log('Sumar el total');
console.log(sumar(1, 3, 2, 7, 9));
console.log(' ');

// Mejorar la iteracion de arguments
console.log('Mejorando la iteración con Array.from(Obj)');
function sumaArray(a, b) {
    console.log(arguments);
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
    /*     let args = Array.from(arguments);
        // Utilizar métodos de Array
        args = args.reduce((acc, el) => {
            return acc + el;  
        });
        return args; */
};
console.log(sumar(1, 3, 2, 7, 9));
