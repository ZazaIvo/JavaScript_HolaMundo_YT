console.log('Ejercicio 08 - Filtrado caso real');
console.log(' ');

// Arreglo de objetos
const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 23, nombre: 'Felipe', plan: 'gold' },
    { edad: 25, nombre: 'Jose', plan: 'gold' },
    { edad: 26, nombre: 'Martin', plan: 'free' },
    { edad: 40, nombre: 'Lucas', plan: 'free' },
    { edad: 42, nombre: 'Pedro', plan: 'premium' },
];
console.log('Ususarios:', usuarios);
console.log(' ');

//Obtener los usuarios pago
//Ordenar de mayor a menor por edad
//Devolver el nombre del usuario
//Crear una plantilla HTML
//Imprimir por pantalla

console.log(`
Consigna:
    1-Obtener los usuarios pago
    2-Ordenar de mayor a menor por edad
    3-Devolver el nombre del usuario
    4-Crear una plantilla HTML
    5-Imprimir por pantalla
`);
console.log(' ');

// Solucion propia
console.log('Solución PROPIA');
// Usuarios de pago
const usrsBay = usuarios.filter(u => {
    if (u.plan === 'premium' || u.plan === 'gold') {
        return true;
    };
});
console.log('1- Usuarios de pago:');
console.log(usrsBay);
// Usuarios de pago por edad
const usrsEdad = usrsBay.sort((a, b) => {
    if (a.edad > b.edad) { return -1 };
    if (a.edad < b.edad) { return 1 };
    return 0;
});
console.log('2- Usuarios de Mayor a menor:');
console.log(usrsEdad);
// Nombre de los usuarios ordenados
const usrsBayName = usrsEdad.reduce((acc, el) => {
    acc.push(el.nombre);
    return acc;
}, []);
console.log('3- Nombres de usuarios:');
console.log(usrsBayName);
// Lista HTML
const usrsArrayHTML = usrsBayName.map((arr) => {
    return `<li>${arr}</li>`;
});
console.log('4- Lista de usuarios:');
console.log(usrsArrayHTML);
// Impresion solo HTML
const usrsHtmlName = `
<ul>
    ${usrsArrayHTML.join(`
    `)}
</ul>`;
console.log('5- Lista HTML:');
console.log(usrsHtmlName);
console.log(' ');

// Solucion Curso
console.log('Solución CURSO');
// Ususarios pagos
const pagos = usuarios.filter(u => u.plan !== 'free')
// Ordenar pagos
pagos.sort((a, b) => {
    if (a.edad < b.edad) {
        return 1;
    };
    if (a.edad > b.edad) {
        return -1;
    };
    return 0;
});
// Lista no ordenada
const lista = pagos.map(u => `<li>${u.nombre}</li>`);
// Lista HTML formateada
const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`;
console.log(html);
console.log(' ');

// Reutilizar - Función.
console.log('Función Filtrar Pagos');
function listarPagosOrder(u){
    let p = u.filter(u => u.plan !== 'free')
    p.sort((a, b) => {
        if (a.edad < b.edad) {
            return 1;
        };
        if (a.edad > b.edad) {
            return -1;
        };
        return 0;
    });
    let l = p.map(u => `<li>${u.nombre}</li>`);
    let h = `
    <ul>
        ${l.join(`
        `)}
    </ul>
    `;
    return h;
};
const listaFunction = listarPagosOrder(usuarios);
console.log(listaFunction);