console.log('Ejercicio 05 - Listado Prop´s');
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

let propiedad = 'name';

// Función getProp
function getProp(obj, propName){
    let existProp = false;
    for (let llave in obj){
        if (llave === propName){
            existProp = true;
        };
    };
    return existProp;
};

let existProp = getProp(objeto,propiedad);
console.log('La propiedad', propiedad,'existe?:');
console.log(existProp);
console.log(' ');

// Function listProp
function listType(obj){
    let getM = []; // Respeta el orden
    let getP = []; // Respeta el orden
    // Separar tipo
    for (let key in obj){
        if(typeof(obj[key]) === 'function'){
            getM[key]= key;
        } else {
            getP[key] = key;
        };
    };
    // Formato salida
    console.log('Los métodos son:');
    for (let i in getM){
        console.log(i);
    };
    console.log(' ');
    console.log('Las propiedades son:');
    for (let i in getP){
        console.log(i);
    };
};
listType(objeto);
console.log(' ');

// Object.keys()
function objKeys(obj, nomPro){
    let prop = Object.keys(obj);
    let existe = false;
    for (let key of prop){
        if (key === nomPro){
            existe = true;
        };
    };
    return existe;
};
let existProp2 = objKeys(objeto,propiedad);
console.log('La propiedad', propiedad,'existe:');
console.log(existProp2);