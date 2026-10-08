// Arreglo con los 3 colores permitidos
const colors = ["green", "blue", "red"];

// Función que selecciona un color aleatorio del arreglo
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Selección de todos los elementos h5
const h5Elements = document.querySelectorAll("h5");

// Agregar un eventListener a cada h5 para cambiar su color al hacer clic
h5Elements.forEach(element => {
    element.style.cursor = "pointer"; // Opcional: cambia el cursor a mano para saber que es cliqueable
    element.addEventListener("click", () => {
        element.style.color = getRandomColor();
    });
});