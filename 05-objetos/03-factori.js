// Fucnión factori
function crearUsuario(name,email,activo){
    return {
        name,
        email,
        activo,
        recuperarClave : function (){
            console.log('Recuperando clave..');
        },
    };
};
// Crear ususarios
let user1 = crearUsuario('Ivan','zaza@hotmail.com',true);
console.log(user1);
let user2 = crearUsuario('Yamila','yami@gmail.com',true);
console.log(user2);