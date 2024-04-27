const user = {
    id : 1,
    name : 'Ivan'
};

user.mail = 'zaza@hotmail.com';
user.name = 'Ivan Azzarello';
user.alias = 'Zaza';
user.guardar = function (){
    console.log('Guardando cambios con (', user.mail, ') y alias (', user.alias,')');
};

user.guardar();

let user1 = Object.freeze({
    id : 1,
    name : 'Zaza'
});

user1.id = 2;
user1.name = 'Zaza2';
user1.email = 'zaza@hotmail.com';
console.log(user1);

const user2 = Object.seal ({
    id : 3,
    name : 'Yami',
    email : 'yami@gmail.com'
});

user2.id = 4;
user2.name = 'Yamila';
user2.apellido = 'Ludueña';
console.log(user2);