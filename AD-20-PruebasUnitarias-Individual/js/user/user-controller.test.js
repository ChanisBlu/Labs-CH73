const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// ---------- Tarea 2: pruebas de UserController ----------
// Cada prueba crea su propio controlador para empezar con la lista vacía

test('add a user that is not in the list', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@generation.org");
  expect(controller.getUsers()).not.toContain(user);
  controller.add(user);
  expect(controller.getUsers()).toContain(user);
  expect(controller.getUsers().length).toBe(1);
});

test('remove a user that is not in the list', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@generation.org");
  const other = new User(2, "Luis", "luis@generation.org");
  controller.add(user);
  controller.remove(other);
  expect(controller.getUsers()).toContain(user);
  expect(controller.getUsers().length).toBe(1);
});

test('findByEmail returns the user with that email', () => {
  const controller = new UserController();
  const user = new User(1, "Ana", "ana@generation.org");
  controller.add(user);
  expect(controller.findByEmail("ana@generation.org")).toBe(user);
});

test('findByEmail returns undefined if the email does not exist', () => {
  const controller = new UserController();
  controller.add(new User(1, "Ana", "ana@generation.org"));
  expect(controller.findByEmail("nadie@generation.org")).toBeUndefined();
});

test('findById returns the user with that id', () => {
  const controller = new UserController();
  const user = new User(7, "Isaac", "isaac@generation.org");
  controller.add(user);
  expect(controller.findById(7)).toBe(user);
});

test('findById returns undefined if the id does not exist', () => {
  const controller = new UserController();
  controller.add(new User(7, "Isaac", "isaac@generation.org"));
  expect(controller.findById(99)).toBeUndefined();
});
