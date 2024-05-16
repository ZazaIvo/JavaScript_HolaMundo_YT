console.log('ARREGLOS - Orden');
console.log(' ');

// Arreglo
let numeros = [15, 20, 13, 7, 2, 8, 21,];
let letras = ['b', 'a', 't', 'j', 'y',]

// .sort()
let numMinMax = numeros.sort();
console.log('Números por primer dígito', numMinMax);
let strOrder = letras.sort();
console.log('Letras en orden:', strOrder);
console.log(' ');

// .reverse()
let numMaxMin = numeros.reverse();
console.log('Números de mayor a menor', numMaxMin);
let strOrderInv = letras.reverse();
console.log('Letras en orden invertido:', strOrderInv);
console.log(' ');

// .sort(function)
console.log('Orden con .sort(()=>{})');
let strMayMin = ['Z', 'b', 'D', 'K', 'a'];
let strOrdSimple = strMayMin.sort();
console.log('Ordenado sin función flecha:');
console.log(strOrdSimple);
console.log('Ordenado con función flecha:');
let strOrdFlecha = strMayMin.sort((a, b) => {
    /* Condiciones:
    a < b => -1
    a > b => 1
    a = b => 0 
    */
    let aLower = a.toLowerCase();
    let bLower = b.toLowerCase();
    // Condicionales
    if (aLower < bLower) { return -1 };
    if (aLower > bLower) { return 1 };
    return 0;
});
console.log(strOrdFlecha);
console.log(' ');

let numOrdFlecha = numeros.sort((a, b) => {
    /*  
    a < b => -1
    a > b => 1
    a = b => 0 
    */
    if (a < b) { return -1 };
    if (a > b) { return 1 };
    return 0;
});
console.log('Números ordenados por valor:');
console.log(numOrdFlecha);
console.log(' ');

// Ordenar Obejtos
let users = [
    { edad: 15, name: 'Pepe', alias: 'Pep', clave: 1234 },
    { edad: 12, name: 'Juan', alias: 'Juancho', clave: 1234 },
    { edad: 18, name: 'Jose', alias: 'Orde', clave: 1234 },
    { edad: 17, name: 'Marcos', alias: 'Jp', clave: 1234 },
];
// Por edad
let userOrder = users.sort((a, b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
});
console.log('Usuarios sin ordenar:');
console.log(users);
console.log('Usuarios por edad:');
console.log(userOrder);
// Por Orden Alfabético
let userOrderAlfa = users.sort((a, b) => { 
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
});
console.log('Usuarios por nombre:');
console.log(userOrderAlfa);