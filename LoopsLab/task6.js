// Tarea 6: aqui en vez de hacer console.log directo, primero guardo cada resultado en un array
let resultados = [];

for (let i = 1; i <= 105; i++) {
  let resultado = "";
  if (i % 3 === 0) resultado += "Fizz";
  if (i % 5 === 0) resultado += "Buzz";
  if (i % 7 === 0) resultado += "Woof";
  resultados.push(resultado || i);
}

// y hasta el final recorro el array para imprimir todo
for (let i = 0; i < resultados.length; i++) {
  console.log(resultados[i]);
}