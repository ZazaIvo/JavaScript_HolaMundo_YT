// Variables
let suma;
let resta;
let multi;
let divicion;
let x;
let y;
let sum;
let rest;
let mult;
let div;

// FUnciones
function saludar() {
  console.log("Hola Mundo");
}

saludar();

function sumar(x, y) {
  sum = x + y;
  return sum;
}

function restar(x, y) {
  if (x >= y) {
    rest = x - y;
    return rest;
  } else if (y > x) {
    rest = y - x;
  }
  return rest;
}

function multiplicar(x, y) {
  mult = x * y;
  return mult;
}

function dividir(x, y){
    if (x >= y){
        div = x/y;
    } else if(y > x){
        div = y/x;
    }
    return div;
}

// Ejecucion
x = 10;
y = 12;
console.log("Numero1: " + x);
console.log("Numero2: " + y);
console.log("Calculos:");
suma = sumar(x, y);
resta = restar(x, y);
multi = multiplicar(x, y);
divicion = dividir(x, y);

// Mostrar
console.log("La suma de "+x+" y "+y+" es: "+ suma);
console.log("La resta de "+x+" y "+y+" es: "+ resta);
console.log("La multiplicacion de "+x+" y "+y+" es: "+ multi);
console.log("La division de "+x+" y "+y+" es: "+ divicion);
