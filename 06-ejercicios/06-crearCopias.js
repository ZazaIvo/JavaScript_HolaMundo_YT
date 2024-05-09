console.log('Ejercicio 06 - Crear Copias');
console.log(' ');

// Objeto
const objeto = {
    id: 1,
    name: 'Ivan',
    correo: 'zaza@hotmail.com',
    logIn(){
        console.log('Ingresando..');
    },
    logOut(){
        console.log('Saliendo..');
    },
};

// Forma manual
let objetoCopy1;
function createCopy1(obj){
    let copy = {};
    for (let key in obj){
       copy[key] = obj[key]
    };
    return copy;
};
console.log('Método manual');
console.log('El objeto a copiar es:');
console.log(objeto);
objetoCopy1 = createCopy1(objeto);
console.log('El objeto copiado es:');
console.log(objetoCopy1);
console.log(' ');

// Copia con Object.assign()
let objetoCopy2;
objetoCopy2 = Object.assign({},objeto);
console.log('Método Object.assign()');
console.log('El objeto a copiar es:');
console.log(objeto);
objetoCopy1 = createCopy1(objeto);
console.log('El objeto copiado es:');
console.log(objetoCopy2);
console.log(' ');

// Copia con "..."
let objetoCopy3 = {};
objetoCopy3 = {...objeto};
console.log('Método "..."');
console.log('El objeto a copiar es:');
console.log(objeto);
objetoCopy1 = createCopy1(objeto);
console.log('El objeto copiado es:');
console.log(objetoCopy2);
console.log(' ');

// Verificar
objetoCopy1.name = 'Marcos';
objetoCopy2.name = 'Yami';
objetoCopy3.name = 'Nico';
console.log('Los objetos modificados son:');
console.log(objeto);
console.log(objetoCopy1);
console.log(objetoCopy2);
console.log(objetoCopy3);