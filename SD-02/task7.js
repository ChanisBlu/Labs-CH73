// Tarea 7: cada palabra del array le corresponde a un primo, en el mismo orden
let buzzWords = [
  "Fizz",
  "Buzz",
  "Woof",
  "Bark",
  "Awoo",
  "Bang"
];

let primos = [3, 5, 7, 11, 13, 17];

for (let i = 1; i <= 105; i++) {
  let resultado = "";
  for (let j = 0; j < primos.length; j++) {
    if (i % primos[j] === 0) {
      resultado += buzzWords[j];
    }
  }
  console.log(resultado || i);
}