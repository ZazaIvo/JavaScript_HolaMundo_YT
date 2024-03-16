let perro = {
    edad: 10,
    color: 'marron',
    nombre: 'Coly',
};

let animales = ['chanchito', 'caballo', perro,];
console.log("Primer animal: "+ animales[0]);
console.log("Segundo animal: "+ animales[1]);
console.log(animales[2].nombre);


console.log("El arreglo tiene un "+animales[0]+", un "+animales[1]+" y un perro de nombre "+animales[2].nombre+ ", de color "+animales[2].color+" y una edad de "+animales[2].edad+" años.");

animales[5] = 'dragón'; // Agrega espacio vacios hasta indice 5
animales[0] = 'cabra'; // Cambia valor de chanchito
console.log(animales);

console.log("El arreglo animales es de tipo: "+typeof animales);
console.log("La longitu del arreglo es: "+animales.length);