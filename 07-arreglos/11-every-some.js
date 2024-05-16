console.log('ARREGLOS - Every-Some');
console.log(' ');

// Arreglo Usuarios
let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
    { id: 4, activo: true },
];
console.log('Ususarios:', usuarios);
console.log(' ');

// Método Every()
console.log('Método .every(predicate)');
usuarios.every((u) => {
    console.log('Activo id:', u.id);
    return u.activo;
});
// Corrección con if()
console.log('Correccion con if()');
usuarios.every((u) => {
    if (u.activo) {
        console.log('Activos id:', u.id);
        return true;
    } else return true;
});
console.log(' ');

usuarios.every((u) => {
    if (!u.activo) {
        console.log('Inactivos id:', u.id);
        return true;
    } else return true;
});
console.log(' ');

// Método .some(predicate)
console.log('Método .some(predicate)');
usuarios.some((u) => { 
    console.log('Primer activo id:',u.id);
    return u.activo;
});