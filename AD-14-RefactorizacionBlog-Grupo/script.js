// Chanis FX - AD-14
// Formulario de contacto: al enviar, muestra una alerta de Bootstrap que se puede cerrar.

const form = document.getElementById("formContacto");
const alertas = document.getElementById("alertas");

if (form) {
  form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    alertas.innerHTML = `
      <div class="alert alert-info alert-dismissible fade show" role="alert">
        Mensaje enviado
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>
    `;

    form.reset(); // limpia los campos
  });
}