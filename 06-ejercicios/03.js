console.log('Ejercicio 03 - Objetos Similares');
console.log(' ');

// Objetos
const objeto1 = {id: 1, nombre : 'Ivan'};
const objeto2 = {id: 1, nombre : 'Ivan'};
const objeto3 = {id: 2, nombre : 'Ivan'};
function similares(obj1, obj2){
    let distintos = false;
    for (let llave in obj1){
        if (obj1[llave] !== obj2[llave]){
            distintos = true;
        }
    };
    return !distintos;
};

let resultado = similares(objeto1 , objeto2);
console.log('obj1 y obj2 son iguales?:',resultado);
resultado = similares(objeto1 , objeto3);
console.log('obj1 y obj3 son iguales?:',resultado);