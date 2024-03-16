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

// Valores
x = 10;
y = 12;
console.log("Numero1: " + x);
console.log("Numero2: " + y);

// Funciones
function sumar(par1, par2) {
  sum = par1 + par2;
  return sum;
}
suma = sumar(x, y);

function restar(x, y) {
  if (x >= y) {
    rest = x - y;
    return rest;
  } else if (y > x) {
    rest = y - x;
  }
  return rest;
}
resta = restar(x, y);

function multiplicar(x, y) {
  mult = x * y;
  return mult;
}
multi = multiplicar(x, y);

function dividir(x, y) {
  if (x >= y) {
    div = x / y;
  } else if (y > x) {
    div = y / x;
  }
  return div;
}
divicion = dividir(x, y);

// Mostrar
console.log("Calculos:");
console.log("La suma de " + x + " y " + y + " es: " + suma);
console.log("La resta de " + x + " y " + y + " es: " + resta);
console.log("La multiplicacion de " + x + " y " + y + " es: " + multi);
console.log("La division de " + x + " y " + y + " es: " + divicion);

// Multiples argumentos
function sumar2(par1, par2) {
    sum = par1 + par2;
    console.log(arguments);
    return sum;
  }
suma = sumar2 (9, 7, 10, 11, 7, 21);
