console.log('Tema: PRIVATE-PUBLIC');
console.log(' ');

// Función constructora
function Usuario() {
    this.name = 'Ivan';
    this.log = function () {
        console.log('Logging..');
    };
    this.guardar = function () {
        this.log();
        console.log('Guardando...');
    };
};

// Construir Objeto
console.log('Objeto usuario1:');
let usuario1 = new Usuario();
console.log(usuario1);
usuario1.guardar();
console.log(' ');

// Cambiara método log()
usuario1.log = function () {
    console.log('Lala');
};
usuario1.guardar();
console.log(' ');

// Método privado
function Usuario2() {
    this.name = 'Ivan';
    let log = function () {
        console.log('Logging..');
    };
    this.guardar = function () {
        log();
        console.log('Guardando...');
    };
};

// Crear un objeto con método privado
const usuario2 = new Usuario2();
console.log(usuario2);
usuario2.guardar();

// Método y variable privados 
function Usuario3() {
    const id = 1;
    this.name = 'Ivan';
    let log = function () {
        console.log('Logging.. usuario id:', id);
    };
    this.guardar = function () {
        log();
        console.log('Guardando... usuario id:', id);
    };
};

// Crear un objeto
const usuario3 = new Usuario3();
console.log(usuario3);
usuario3.guardar();