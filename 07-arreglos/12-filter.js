console.log('ARREGLOS - Filter');
console.log(' ');

//Usuarios
let usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// Filtro por edad
let userMay = usuarios.filter(usuario => {
    if (usuario.edad >= 18) {
        return true;
    };
});
console.log('Mayores de edad:');
console.log(userMay);

let userMen = usuarios.filter((u) => {
    if (u.edad < 18) {
        return true;
    };
});
console.log('Menores de edad:');
console.log(userMen);