// Para OR
let nombre = "";
let alias = "";
let userName = nombre || alias || "Anonimo";
console.log("El usuario es: ", userName);

nombre = "Ivan";
alias = "";
userName = nombre || alias || "Anonimo";
console.log("El usuario es: ", userName);

nombre = "";
alias = "Zaza";
userName = nombre || alias || "Anonimo";
console.log("El usuario es: ", userName);

nombre = "Ivan";
alias = "Zaza";
userName = nombre || alias || "Anonimo";
console.log("El usuario es: ", userName);

// Para AND

function fn1() {
  console.log("Funcion 1");
  return true;
}
function fn2() {
  console.log("Funcion 2");
  return false;
}
function fn3() {
  console.log("Funcion 3");
  return true;
}

let x = fn1() && fn2() && fn3();
