// Tarea 2: obtener Nombre y Apellido del formulario y mostrarlos en la consola

function getFormvalue(event) {
  // Sin esto, el formulario recarga la página al enviarse y la consola se borra
  event.preventDefault();

  const formulario = document.getElementById("form1");
  const nombre = formulario.elements["fname"].value;
  const apellido = formulario.elements["lname"].value;

  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
}
