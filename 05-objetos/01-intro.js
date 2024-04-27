console.log('Introducción a Objetos');
let user = {
    email : 'zaza@hotmail.com',
    name : 'Ivan',
    direccion : {
        calle : 'Las Palmeras',
        numero : 2,
        codP : 33320
    },
    activo : true,
    // Función anónima
    recuperarClave : function () {
        console.log('Recuperendo Clave');
    }
};
