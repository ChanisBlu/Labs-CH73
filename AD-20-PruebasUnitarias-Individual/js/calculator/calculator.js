const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

// Tarea 3 (TDD): primero se escribió la prueba de dividir entre 0 (falló),
// después se corrigió la función para que lance un error claro.
function divide(a, b){
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// Tarea 1: se agregan divide y multiply al export para poder probarlas
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};
