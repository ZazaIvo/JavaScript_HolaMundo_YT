let nombre = 'Ivan';
// Función Ususario Objeto
function Usuario(nombre) {
    this.nombre = nombre;
    return this.nombre;
};

// Propiedades como Objeto
console.log(Usuario.name);
console.log(Usuario.length);

// Asignar a una variable
let U = Usuario;
let user1 = new U('Yamila');
console.log(user1);

// Como argumento
function Of(Fn, arg) {
    return new Fn(arg);
};
let user2 = Of(Usuario, nombre);
console.log(user2);