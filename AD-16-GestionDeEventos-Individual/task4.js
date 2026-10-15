// Tarea 4 (extra): selección y modificación del DOM

// 1. Seleccionar la sección con id "container"
const contenedor = document.getElementById("container");
console.log("1. Sección:", contenedor);

// 2. Seleccionar todos los li con clase "second" (devuelve una lista)
const segundos = document.querySelectorAll(".second");
console.log("2. Elementos .second:", segundos);

// 3. Seleccionar el li con clase "third", pero solo el que está dentro del ol
const terceroDelOl = document.querySelector("ol .third");
console.log("3. .third dentro del ol:", terceroDelOl);

// 4. Darle el texto "¡Hola!" a la sección
// Se usa prepend en lugar de textContent: textContent borraría las listas
// y después ya no existiría el ul para el paso 9
contenedor.prepend("¡Hola!");

// 5. Agregar la clase "main" al div con clase "footer"
const footer = document.querySelector(".footer");
footer.classList.add("main");
console.log("5. Footer con main:", footer.className);

// 6. Quitar la clase "main" del mismo div
footer.classList.remove("main");
console.log("6. Footer sin main:", footer.className);

// 7. Crear un nuevo li
const nuevoLi = document.createElement("li");

// 8. Darle el texto "cuatro"
nuevoLi.textContent = "cuatro";

// 9. Agregarlo al ul
document.querySelector("ul").appendChild(nuevoLi);
