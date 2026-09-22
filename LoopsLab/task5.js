// Tarea 5: en vez de siempre hacer hasta el 105, le pregunto al usuario cuantas lineas quiere
const prompt = require("prompt-sync")();

let limite = parseInt(prompt("Cuantas lineas quieres generar? "));

for (let i = 1; i <= limite; i++) {
  let resultado = "";
  if (i % 3 === 0) resultado += "Fizz";
  if (i % 5 === 0) resultado += "Buzz";
  if (i % 7 === 0) resultado += "Woof";
  console.log(resultado || i);
}