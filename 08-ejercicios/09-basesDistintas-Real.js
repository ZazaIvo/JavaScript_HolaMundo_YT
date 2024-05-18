console.log('Ejercicio 09 - BASES DISTINTAS');
console.log(' ');

// Arreglos de objetos
const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 23, nombre: 'Felipe', plan: 'gold' },
];
const users = [
    { age: 25, name: 'Joshep', membership: 'gold' },
    { age: 26, name: 'Martin', membership: 'free' },
    { age: 40, name: 'Jhon', membership: 'free' },
    { age: 42, name: 'Peter', membership: 'premium' },
];
console.log('Arreglos:');
console.log('Usuarios', usuarios);
console.log('Users', users);
console.log(' ');

//Unificar las estructuras para que sean iguales
//Fusionar los arreglos
//Ordenar por edad
//Crear plantilla HTML con <li>Nombre: name, Edad: age>/li>
//Imprimir lista en consola

// Solución propia
console.log('Solución PROPIA');
const usuariosEn = usuarios.map(u => {
    return {
        age: u.edad,
        name: u.nombre,
        membership: u.plan,
    };
});
const usrsConcat = users.concat(usuariosEn);
const usrsMayMin = usrsConcat.sort((a, b) => {
    if (a.age > b.age) { return -1 };
    if (a.age < b.age) { return 1 };
    return 0;
});
const usrsLista = usrsMayMin.map(u =>
    `<li> Nombre: ${u.name}, Edad: ${u.age} </li`
);
const html = `
<ul>
    ${usrsLista.join(`
    `)}
</ul>
`;
console.log('Lista HTML para DOM');
console.log(html);
console.log(' ');

// Funcion Propia
console.log('Funcion PROPIA');
function usersEn(es, en) {
    let uEn = es.map(u => {
        return {
            age: u.edad,
            name: u.nombre,
            membership: u.plan,
        };
    });
    let l = en
        .concat(uEn)
        .sort((a, b) => {
            if (a.age > b.age) { return -1 };
            if (a.age < b.age) { return 1 };
            return 0;
        })
        .map(u => `<li> Nombre: ${u.name}, Edad: ${u.age} </li`);
    let h = `
    <ul>
        ${l.join(`
        `)}
    </ul>
    `;
    return h;
};
const usrs = usersEn(usuarios, users);
console.log('Usuarios:');
console.log(usrs);
console.log(' ');

// Solución curso
console.log('Solución CURSO');
// Cambiar nombre propiedades
const usersEspanol = users.map(u => 
    ({
        edad: u.age,
        nombre: u.name,
        plan: u.membership,
    })
);
// Fucionar arreglos
const todos = [...usuarios, ...usersEspanol];
// Ordenar
todos.sort((a, b) => {
    if (a.edad > b.edad){ return -1};
    if (a.edad < b.edad){ return 1};
    return 0;
});
// Lista
const lista = todos.map( u =>
    `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`
);
// HTML
const listaHtml = `
<ul>
    ${lista.join(`
    `)}
</ul>
`;
console.log(listaHtml);