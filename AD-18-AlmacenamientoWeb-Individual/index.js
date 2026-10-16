const itemsContainer = document.querySelector("#list-items")

// Clave con la que guardamos la lista en localStorage
const STORAGE_KEY = "colorsList"

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

// Quita todas las tarjetas de la pantalla (para no duplicar la lista)
function clearList() {
  itemsContainer.innerHTML = ""
}

// Pinta en pantalla una lista de colores usando addItem()
function renderColors(colors) {
  clearList()
  colors.forEach(addItem)
}

// Tareas 1, 2 y 3
function fetchColorsList() {
  // Tarea 1: descargar la lista con la API Fetch
  // (reqres.in ahora pide la clave gratuita "reqres-free-v1" en el encabezado)
  fetch("https://reqres.in/api/unknown", {
    headers: { "x-api-key": "reqres-free-v1" }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("La API respondió con estado " + response.status)
      }
      return response.json()
    })
    // Respaldo: si la API no responde, usamos la copia local que trae el lab
    .catch((error) => {
      console.warn("No se pudo usar la API, se carga js/data.json:", error.message)
      return fetch("js/data.json").then((response) => response.json())
    })
    .then((json) => {
      const colors = json.data

      // Tarea 3: guardar la lista en localStorage (como texto, con JSON.stringify)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(colors))

      // Tarea 2: conectar con addItem() para mostrar la lista
      renderColors(colors)
    })
    .catch((error) => console.error("No se pudo cargar la lista:", error))
}

// Tarea 4: cargar los colores desde localStorage
function loadColorsFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved) {
    // JSON.parse convierte el texto guardado de vuelta en un arreglo
    const colors = JSON.parse(saved)
    renderColors(colors)
  }
}

// Tarea 5: botón "Borrar" que elimina todos los elementos de la lista
document.querySelector("#btn-borrar").addEventListener("click", () => {
  clearList()
  localStorage.removeItem(STORAGE_KEY)
})

// Tarea 6: botón "Cargar" que vuelve a llamar a fetchColorsList()
document.querySelector("#btn-cargar").addEventListener("click", fetchColorsList)

fetchColorsList()
loadColorsFromStorage()
