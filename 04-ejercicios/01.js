function cualEsMayor(a,b){
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'son iguales';
    }
};

let mayor = cualEsMayor(10,5);
console.log('Cuál número es mayor?',mayor);
mayor = cualEsMayor(5,5);
console.log('Cuál número es mayor?',mayor);
mayor = cualEsMayor(5,12);
console.log('Cuál número es mayor?',mayor);