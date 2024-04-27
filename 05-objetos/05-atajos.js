console.log('Atajos de constructor');
let user = {id : 2, name : 'Ivan'};
console.log(user);
console.log(typeof (user));
console.log(user.constructor);

let user2 = new Object({
    id: 3,
    name : 'Zaza',
});
console.log(user2);
console.log(typeof (user2));
console.log(user2.constructor);

let numero = 1;
console.log(numero);
console.log(typeof (numero));
console.log(numero.constructor);

let numero2 = new Number(2);
console.log(numero2);
console.log(typeof (numero2));
console.log(numero2.constructor);

const s1 = '1+1';
const s2 = new String ('1+1');
console.log(s1, '-', s2);
console.log(typeof(s1));
console.log(typeof(s2));
console.log('Con eval(): ',eval(s1) ,' / ',eval(s2));

const s2String = s2.valueOf();
console.log(s2String);
console.log(typeof(s2String));
