console.log('Declaraciones VS Expresiones');
console.log(' ');

// LLamado antes de las definiciones
console.log(sumar);
const sumando = sumar();

// Funcion Nombrada - Named function
function sumar(){
    console.log('sumando..');
};
let suma = sumar();

// Funcion Anónima - Anonymous function
/* function (){
    console.log('funcion anomina..');
}; */

// Expresion de funciones ánomima
const resta = function (){
    console.log('restando..');
};
resta();

// Expresion de funciones nombrada
const multiplica = function multiplicar(){
    console.log('multiplicando..');
};
multiplica();

// Expresión flecha
const divide = () => {
    console.log('dividiendo..');
};
divide();