// task2.js
function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }

  // Type your code below this line!

  let subj, msg;

  if (process.argv[3] && process.argv[4]) {
    subj = process.argv[3];
    msg = process.argv[4];
  } else {
    const prompt = require('prompt-sync')();
    subj = prompt("Ingresa el asunto: ");
    msg = prompt("Ingresa el mensaje: ");
  }

  const newMail = new Mail(subj, msg)

  // Type your code above this line!

  console.log(newMail.subject + ": " + newMail.message)