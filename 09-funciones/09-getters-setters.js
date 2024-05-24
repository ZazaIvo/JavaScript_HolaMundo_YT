console.log(('Getters y Setters').toUpperCase());
console.log(' ');

// Objeto Usuario
const usuario = {
    nombre: 'Ivan',
    apellido: 'Azzarello',
    edad: 40,
    nombreCompl: () => {
        return `${usuario.nombre} ${usuario.apellido}`;
    }
};
console.log(usuario.nombreCompl());