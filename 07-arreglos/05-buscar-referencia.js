console.log('ARREGLOS - Buscar Referencia');
console.log(' ');

// Arreglo Usuario
const usuarios = [
    { id: 1, name: 'Zaza', },
    { id: 2, name: 'Yami', },
    { id: 3, name: 'Micha', },
    { id: 1, name: 'Nico', },
];
console.log('Arreglo:');
console.log(usuarios);
console.log(' ');

console.log('Tipos de elementos:');
for (i in usuarios) {
    console.log(i, typeof (usuarios[i]));
};
console.log(' ');

// Busqueda con indexOf()
console.log('Busqueda con .indexOf()');
const resultado = usuarios.indexOf({ id: 1, name: 'Zaza', });
console.log(resultado);
console.log(' ');

// Método .find()
console.log('Busqueda con .find(function)');
const resultadoFind = usuarios.find(function (usuario) {
    return usuario.id === 1;
});
console.log(resultadoFind);
console.log(' ');

// Método .find(flecha)
console.log('Busqueda con .find(flecha)');
const resultadoFlecha = usuarios.find(usuario =>
    usuario.id === 1);
console.log(resultadoFlecha);
console.log(' ');

// Método .find(flecha)
console.log('Busqueda con .findIndex(flecha)');
const resultadoIndex = usuarios.findIndex(usuario =>
    usuario.id === 1);
console.log('El indice coincidente:',resultadoIndex);
console.log(' ');