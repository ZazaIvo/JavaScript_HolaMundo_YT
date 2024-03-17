// AND &&
console.log(true && true);
console.log(false && true);
console.log(true && false);
let mayor = true;
let suscrito = true;
console.log('Ejemplo AND:', mayor && suscrito);

// OR ||
console.log(true || false);
console.log(false || true);
console.log(false || false);
mayor = false;
suscrito = true;
console.log('Ejemplo OR:', mayor || suscrito);

// NOT !
console.log('Operador NOT para !true: ', !true);
console.log('Operador NOT para !false: ', !false);
mayor = false;
let soloCatalogoInfantil = !mayor;
console.log('Mostrar catálogo infantil: ', soloCatalogoInfantil);