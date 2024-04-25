// Variables
let precio;
let impuesto;
let valor;
//Función impuesto
function valorImp(precio, impuesto) {
    valor = precio * (1 + impuesto);
    return valor;
};
valor = valorImp(10, 0.15)
console.log('El valor con impuesto para', precio,'es:',valor);