console.log('Funciones - REST');
console.log(' ');

let suma = (a, b, ...rest) => {
    return a + b + rest.reduce((acc , el) => acc + el);
};
console.log(suma(1, 2, 3, 4));

// Ejemplo real
const logMsg = (desc, ...msgs) => {
    for (let msg of msgs){
        console.log(desc , msg);
    };
};

let mens = ['Error 1', 'Peticion aceptada', 'socket activo'];
logMsg('Cliente móvil:', ...mens, 'Otro error');