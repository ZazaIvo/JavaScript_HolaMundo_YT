console.log('Tema: OBJETO MATH');
console.log(' ');

// Número entero
let x = 12.3;
let entero = Math.floor(x)
console.log('El entero de', x, 'es:', entero);

// Redondear valor
let y = 12.7;
function redondear(num) {
    if ((num - Math.trunc(num)) < 0.5) {
        let ent = Math.floor(num);
        console.log('El redondeo de', num, 'es:', ent);
    } else {
        let ent = Math.ceil(num);
        console.log('El redondeo de', num, 'es:', ent);
    };
};
redondear(y);
redondear(15.3);
redondear(7.5);
redondear(21.8);
redondear(1.4);
console.log(' ');

// Redondeo con Math.round()
console.log('Math.round()');
function round(n) {
    let round = Math.round(n);
    console.log('El redondeo de', n, 'es:', round);
};
round(12.7);
round(13.4);
round(0.7);
console.log(' ');

// Valor absoluto
console.log('Valor Abosluto');
let c = -12;
let abs = Math.abs(c);
console.log('El valor absoluto de', c, 'es:', abs);
console.log(' ');

// Números aleatorios entre 0 y 100
console.log('Entre 0 y 100:');
function buscarAle(){
    let aleat = Math.random() * 100;
    let numEnt = Math.trunc(aleat);
    console.log(numEnt);
};
buscarAle();
buscarAle();
buscarAle();
console.log(' ');

// Número con mínimo y máximo
console.log('Min y Max:');
let min;
let max;
function getRandom(min, max){
    let aleat = (Math.random() * (max - min)) + min;
    let numEnt = Math.trunc(aleat)
    console.log(numEnt);
};
min = 10;
max = 20;
console.log('Valor entre: ', min,max);
getRandom(min, max);
console.log(' ');

min = 0;
max = 10;
console.log('Valor entre: ', min,max);
getRandom(min, max);
console.log(' ');

min = 1;
max = 4;
console.log('Valor entre: ', min,max-1);
getRandom(min, max);
console.log(' ');
