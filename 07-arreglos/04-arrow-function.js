console.log('ARREGLOS - Arrow  Function');
console.log(' ');

// Definicion de Funcion
function saludar(){
    return 'Hola mundo';
};
const hola = saludar();

// Función Flecha
const saludo = () => {
    return 'Hola Mundo!'
};
console.log(saludo());

// Función Flecha Resumida
const saludoF = () => 'Hola Mundo - Resumido';
console.log(saludoF());

// Un solo parámetro
const saludoP = mensaje => mensaje + 'Ok';
console.log(saludoP('Hola mundo - '));