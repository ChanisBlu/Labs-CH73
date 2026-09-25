class Producto {
  constructor(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }

  mostrarInfo() {
    return `${this.nombre} cuesta $${this.precio}, disponible: ${this.disponible}`;
  }

  cambiarDisponibilidad() {
    this.disponible = !this.disponible;
  }
}


class Maquillaje extends Producto {
  constructor(nombre, precio, disponible, tono) {
    super(nombre, precio, disponible);
    this.tono = tono;
  }

  mostrarInfo() {
    return `${super.mostrarInfo()}, tono: ${this.tono}`;
  }
}

const p5 = new Maquillaje("Sombra", 200, true, "Dorado");


const p1 = new Producto("Labial", 150, true);
const p2 = new Producto("Rímel", 180, false);
const p3 = new Producto("Base", 250, true);
const p4 = new Producto("Rubor", 120, true);

const catalogo = [p1, p2, p3, p4, p5];
catalogo.forEach(producto => console.log(producto.mostrarInfo()));