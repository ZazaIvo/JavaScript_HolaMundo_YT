
// Función Constructora
function Usuario(){
    // Propiedades
    this.id = 1;
    this.name = 'Ivan';
    // Métodos
    this.recuperarClave = function(){
        console.log('Recuperando Clave');
    };
};

// Crear objeto
let user1 = new Usuario();
console.log(user1);