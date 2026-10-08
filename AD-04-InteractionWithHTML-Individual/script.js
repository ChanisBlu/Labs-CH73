// Make
// Tarea 2: Imprimir mensaje en la consola al hacer clic en "Burger Town!"
function logBurgerTown() {
    console.log("Someone click on BURGER TOWN!");
}

// Tarea 4: Cambiar el texto del encabezado "A picture of a BURGER!" a rojo al hacer clic en "RICE!!"
function turnRed() {
    const headline = document.getElementById("burger-headline");
    if (headline) {
        headline.style.color = "red";
    }
}