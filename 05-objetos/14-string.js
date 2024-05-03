console.log('Tema: STRING');
console.log(' ');

const saludo = "Hola Mundo!";
const despedida = new String("Chao mundo :(");

console.log(typeof (saludo));
console.log(typeof (despedida));

// Métodos para tipado string
let letras = saludo.length;
console.log('Las letras de -', saludo, '- son:', letras);
letras = despedida.length;
console.log('Las letras de', despedida, 'son:', letras);
console.log('Las letras de -', saludo.toString(), '- son:', letras);

let caracter = "3";
let getM = saludo.indexOf(caracter);
if (getM >= 0 ) {
    console.log('El indice de M es:', getM);
} else if (getM < 0) {
    console.log('No hay coincidencia');
};

let getInc = saludo.includes("Ho");
if (getInc){
    console.log('El texto buscado se encuentra');
} else {
    console.log('No se encuentra');
};
console.log(' ');

// Cambiar texto
let saludo2 = saludo.replace('Mundo','a todos!');
console.log(saludo);
console.log('Cambia por:');
console.log(saludo2);
console.log(' ');

// Cambiar tamaño
let saludoMay = saludo.toUpperCase();
let saludoMin = saludo.toLowerCase();
console.log('Saludo en Mayúsculas:');
console.log(saludoMay);
console.log('Saludo en Minúsculas:');
console.log(saludoMin);

// Devolver parte del texto
let hola1 = saludo.substring(0, 4);
console.log(hola1);
let hola2 = saludo.substr(0, 4);
console.log(hola2);