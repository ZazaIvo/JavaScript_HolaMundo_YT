console.log('Loop For - in');
let user = {
    id: 1,
    name: 'Ivan',
    age: 40,
    correo: 'zaza@zaza.com'
};

for (let prop in user) {
    console.log(prop,': ',user[prop]);
};

console.log('For-in en Arreglos:');
let animales = ['Perro','Cabra','Pato'];
for (let indice in animales){
    console.log(indice, animales[indice]);
};