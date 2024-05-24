function alcnaces(){
    function saludo(){};
    var vieja = 'ya no usar';
    let variable = 'Hola Mundo';
    const constante = 'Hola Mundo';
    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);
};
alcnaces();
console.log(' ');

// Fuera de la funcion
/* console.log('Llamado fuera de la');
console.log(saludo);
console.log(vieja);
console.log(variable);
console.log(constante); */

// Variables globales
let afuera = 'estoy afuera';
function modifica(){
    afuera = 'estoy adentro';
};
console.log('Antes de la función');
console.log(afuera);
modifica();
console.log('Despues de la función');
console.log(afuera);