console.log('Tema: FUNCTION');
console.log(' ');

console.log('Método .call({this},arg)');
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () {
        console.log('Dibujando..');
    };
};
function saludar() {
    return 'Hola';
};
let punto = { z: 7, saludar };
Punto.call(punto, 1, 2);
console.log(punto);

console.log(' ');
console.log('Método .apply({this},[arg])');
let punto2 = { z: 7 };
Punto.apply(punto2, [1, 2]);
console.log(punto2);

console.log(' ');
console.log('Constructor Function');
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function () {
    console.log('Dibujando..')};
`);
console.log(typeof (Point));

const p = new Point(1, 2);
console.log(p);
console.log(typeof (p));