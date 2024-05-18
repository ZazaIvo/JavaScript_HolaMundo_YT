console.log('Operador Ternario');
console.log(' ');
// condición ? "expr p/verdadero" : "expr p/falso";

// Seleccionar bebida.
console.log('Ejecicio tragos');
const edad = 20;
let bebida;
function selectBebida(edad) {
    if (edad < 18) {
        return 'Jugo';
    } else {
        return 'Cerveza';
    };
};
bebida = selectBebida(edad);
console.log('Con if()');
console.log('Para', edad, 'años, servir:', bebida);
console.log(' ');

// Operador ternario
console.log('Con ternario');
bebida = edad < 18 ? 'Jugo' : 'Cerveza';
console.log('Para', edad, 'años, servir:', bebida);
console.log(' ');

// Confirmar si es miembro
console.log('Ejercicio miembros');
let users = {
    name: 'Roberto',
    isMember: true,
};

// Con if(){}else{}
console.log('Con if()');
function getMember(usrs) {
    if(usrs.isMember){
        return 2;
    } else {
        return 10;
    };
};
let bay = getMember(users);
console.log('Cobrar:',bay);
console.log(' ');

//Con ternario
console.log('Con ternario');
bay = users.isMember ? 2 : 10;
console.log('Cobrar:',bay);
console.log(' ');