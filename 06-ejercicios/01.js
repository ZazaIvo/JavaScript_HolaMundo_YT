console.log('Ejercicio 01');
console.log(' ');

// Funcion constructora - Propia
function UsuarioP(name, alias, correo){
    this.name = name;
    this.alias = alias;
    this.correo = correo;
    this.id = Math.round(Math.random() * 100000);
    this.aviso = function(){
        console.log(`El usuario ${this.name} fue creado!`);
        console.log('Nombre:',this.name);
        console.log('Alias:',this.alias);
        console.log('Correo:',this.correo);
        console.log('Id:',this.id);
    };
};

let user1 = new UsuarioP('Ivan','Zaza','zaza@hotmail.com');
user1.aviso();
let user2 = new UsuarioP('Yami','Chami','yami@gmail.com');
user2.aviso();
console.log(' ');

// Funcion constructora - Curso
function UsuarioC(name){
    this.id = Math.random();
    this.name = name;
};

let user3 = new UsuarioC('Carlos');
console.log(user3);
let user4 = new UsuarioC('Pedro');
console.log(user4);