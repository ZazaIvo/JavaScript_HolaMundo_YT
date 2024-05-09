console.log('Ejercicio 02');
console.log(' ');

function userCreate(firtsName, lastName){
    let id = Math.round(Math.random() * 10000);
    let name = firtsName;
    let apellido = lastName;
    return {id, name, apellido};
};

let user1 = userCreate('Ivan','Azzarello');
console.log(user1);