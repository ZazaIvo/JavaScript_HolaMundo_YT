console.log('Tema: CLONADO OBJETOS');
console.log(' ');

// Variable Objeto
let punto3D = { z: 5 };
let punto = {
    x: 10,
    y: 12,
};

Object.assign(punto3D, punto,);
console.log(punto3D);
console.log(' ');

// Agregar método
let dibujar = {
    dibujar() {
        console.log('Dibujando');
    },
};
Object.assign(punto3D, dibujar);
console.log(punto3D);
console.log(' ');

// Agreagr más de un objeto
console.log('Objecto con varios clonados');
let objConstruido = Object.assign(
    {},
    punto,
    { z: 12 },
    {
        dibujar() {
            console.log('Dibujando..');
        }
    },
);
console.log(objConstruido);
console.log(' ');

// Cópia objeto Object.assing()
let punto2 = Object.assign({}, punto);
console.log('Objetos clonados con .assing():');
console.log(punto, punto2);

// Cambiar valor propiedad de un obj
punto2.x = 15;
punto2.y = 5;
console.log('Objeto modificado:');
console.log(punto, punto2);
console.log(' ');

// Cópia objeto {...objeto}
let punto3 = {...punto};
console.log('Objetos clonados con {...object}:');
console.log(punto, punto3);

// Cambiar valor propiedad de un obj
punto3.x = 17;
punto3.y = 8;
console.log('Objeto modificado:');
console.log(punto, punto3);
console.log(' ');

// Copia Antigua For-in
console.log('Copia por For-in');
let punto4 = {};
for (let llave in punto){
    punto4[llave] = punto[llave];
};
console.log('Objetos clonados con for-in');
console.log(punto, punto4);
console.log(' ');

// Cambiar valor propiedad de un obj
punto4.x= 20;
punto4.y= 6;
console.log('Objeto modificado:');
console.log(punto, punto4);