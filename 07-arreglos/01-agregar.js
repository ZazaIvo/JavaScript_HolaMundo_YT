console.log('ARREGLOS - Agregar');
console.log(' ');

// Arreglo
const letras = ['a','b'];
// Función
function saludar(){
    console.log('Hola');
};

// Al final .push()
console.log(letras);
letras.push('c');
letras.push({id:2,saludar});
console.log(letras);
console.log(' ');

// Al principio .unshift()
letras.unshift(1,2,3);
console.log(letras);
console.log(' ');

// Intermedio .splice()
letras.splice(4,0,'agregadoSplice()');
console.log(letras);
console.log(' ');