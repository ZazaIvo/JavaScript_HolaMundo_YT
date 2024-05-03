console.log('Tema: TEMPLATES');
console.log(' ');

// Formato de texto
let plantilla = `"Hola Mundo!"
Bienvenidos a Ultimate JavaScript
Todo sobre:
    -Variables
    -Arreglos
    -Objetos
    -Clases
    -Funciones
Muy buen curso!
`;
console.log(plantilla);
console.log(' ');

// Con HTML5
console.log('Con HTML5');
let plantilla2 = `<h2>"Hola Mundo!"</h2>
Bienvenidos a Ultimate JavaScript
Todo sobre:
<ul>
    <li>-Variables</li>
    <li>-Arreglos</li>
    <li>-Objetos</li>
    <li>-Clases</li>
    <li>-Funciones</li>
</ul>
Muy buen curso!
`;
console.log(plantilla2);
console.log(' ');

// Con variables
console.log('Con ${variables}');
let nombre = 'Ivan';
let user = 'Zaza';
let plantilla3 = `Hola ${nombre}!
Tu nuevo usuario es:
    ${user}
Que tengas buen día!
`;
console.log(plantilla3);
console.log(' ');

//Con funciones
console.log('Con ${funcion()}');
function saludar() {
    return 'Hola';
};
let plantilla4 = `${saludar()} ${nombre}!
Tu nuevo usuario es:
    ${user}
Que tengas buen día!
`;
console.log(plantilla4);
console.log(' ');

// Como función
console.log('Como una función');
function plantilla5(nombre) {
    return `${saludar()} ${nombre}!
Tu nuevo usuario es:
    ${user}
Que tengas buen día!
`;
};
let saludo5 = plantilla5('Ivan');
console.log(saludo5);