// task4.js
function Journey(from, to) {
  this.start = from;
  this.end = to;
}

let from, to;

if (process.argv[3] && process.argv[4]) {
  from = process.argv[3];
  to = process.argv[4];
} else {
  const prompt = require('prompt-sync')();
  from = prompt("¿De dónde vienes?: ");
  to = prompt("¿Hacia dónde vas?: ");
}

// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")