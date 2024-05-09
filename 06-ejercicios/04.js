console.log('Ejercicio 04 - Encontrar métodos');
console.log(' ');

// Objeto
let objeto = {
    id: 1,
    name: 'zaza',
    password: 1234,
    logIn(){
        console.log('Ingresando..');
    },
    logOut(){
        console.log('Saliendo..');
    },
    changePass(){
        console.log('Cambio de contrasela Ok');
    },
};

// Función
function getMetodos(obj){
    for (let llave in obj){
        if(typeof(obj[llave]) === 'function'){
            console.log(llave);
        }
    }
};
console.log('Métodos de objeto:');
getMetodos(objeto);
