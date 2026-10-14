// Tarea 2: alerta dinámica de Bootstrap
// Cada clic en "El Botón" crea una alerta que se puede cerrar con la "x"

const contenedorAlertas = document.getElementById('contenedorAlertas')
const boton = document.getElementById('elBoton')

function mostrarAlerta(mensaje, tipo) {
  const alerta = document.createElement('div')
  alerta.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `
  contenedorAlertas.append(alerta)
}

boton.addEventListener('click', () => {
  mostrarAlerta('Alerta, alguien presionó el botón', 'warning')
})
