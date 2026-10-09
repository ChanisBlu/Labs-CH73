// Chanis FX - AD-07
// Pequenas mejoras: menu hamburguesa en pantallas chicas y envio simulado del formulario de contacto.

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("abierto");
    });
  }

  var form = document.getElementById("formContacto");
  var mensaje = document.getElementById("mensaje-envio");

  if (form && mensaje) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      mensaje.textContent = "Gracias, tu mensaje quedo registrado (demo, no se envia a ningun servidor).";
      form.reset();
    });
  }
});
