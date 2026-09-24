// task6.js (extra, sin evaluación automática)
function ShoppingListItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
}

function ShoppingList() {
  this.items = [];
}

const shoppingList = new ShoppingList();
shoppingList.items.push(new ShoppingListItem("leche", 2));
shoppingList.items.push(new ShoppingListItem("huevo", 12));

console.log(shoppingList.items);