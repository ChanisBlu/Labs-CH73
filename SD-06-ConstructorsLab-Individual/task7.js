// task7.js (extra, sin evaluación automática)
function Car(brand, model, year, color, doors, mileage, engineType) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
  this.doors = doors;
  this.mileage = mileage;
  this.engineType = engineType;
}

const myCar = new Car("Toyota", "Corolla", 2022, "rojo", 4, 15000, "combustión");

console.log(myCar);