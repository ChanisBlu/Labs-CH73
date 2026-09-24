// task5.js
function FriendsList() {
  this.names = [];
}

let count;
let providedNames = [];

if (process.argv[3]) {
  count = parseInt(process.argv[3]);
  providedNames = process.argv.slice(4);
} else {
  const prompt = require('prompt-sync')();
  count = parseInt(prompt("¿Cuántos amigos quieres agregar?: "));
}

const friendsList = new FriendsList();

for (let i = 0; i < count; i++) {
  let name;
  if (providedNames[i]) {
    name = providedNames[i];
  } else {
    const prompt = require('prompt-sync')();
    name = prompt("Nombre del amigo " + (i + 1) + ": ");
  }
  friendsList.names.push(name);
}

console.log(friendsList.names)