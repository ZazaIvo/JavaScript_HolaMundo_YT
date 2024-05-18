console.log('Ejercicio 04 - FILTRAR ');
console.log(' ');

// Arreglo de objetos
const usuarios = [
    { edad: 18, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];
console.log('Ususarios:', usuarios);
console.log(' ');

// SOLUCION PROPIA
// Usuarios Premium
console.log('Solucion Propia');
function cantPremium(arr) {
    let arryPrem = arr.filter(u => {
        if (u.plan === 'premium') {
            return true;
        };
    });
    return arryPrem.length;
};
const userPrem = cantPremium(usuarios);
console.log('Usuarios Premium:', userPrem);

// Usuarios mayores
function cantMayores(arr) {
    let arryPrem = arr.filter(u => {
        if (u.edad >= 18) {
            return true;
        };
    });
    return arryPrem.length;
};
const userMay = cantMayores(usuarios);
console.log('Usuarios Mayores:', userMay);
console.log(' ');

// SOLUCION CURSO
console.log('Solucion Curso');
function cuantosPremium(usrs) {
    return usrs.reduce((acc, el) => {
        if (el.plan === 'premium') {
            return acc + 1;
        }
        return acc;
    }, 0);
};
const usrsPrem = cuantosPremium(usuarios);
console.log('Usuarios Premium:', usrsPrem);

function cuantosMayores(usrs) {
    return usrs.reduce((acc, el) => {
        if (el.edad >= 18) {
            return acc + 1;
        }
        return acc;
    }, 0);
};
const usrsMayores = cuantosMayores(usuarios);
console.log('Usuarios Mayores:', usrsMayores);
console.log(' ');

// DOBLE FILTRADO
// Lógica propia con .filter()
console.log('DOBLE FILTRADO');
console.log('Solucion Propia');
function cantPremiumMay(arr) {
    let arryPremMay = arr.filter(u => {
        if (u.plan === 'premium' && u.edad >= 18) {
            return true;
        };
    });
    return arryPremMay;
};
const userPremM = cantPremiumMay(usuarios);
console.log('Usuarios Premium - Mayores:', userPremM.length);
console.log(userPremM);

// Lógica del curso con .reduce()
console.log('Solucion Curso');
function cuantosPremiumMay(usrs) {
    return usrs.reduce((acc, el) => {
        if (el.plan === 'premium' && el.edad >= 18) {
            return { cantidad: (acc + 1), usuarios: el };
        }
        return acc;
    }, []);
};
const usrsPremMayor = cuantosPremiumMay(usuarios);
console.log('Usuarios Premium-Mayores:');
console.log(usrsPremMayor);
