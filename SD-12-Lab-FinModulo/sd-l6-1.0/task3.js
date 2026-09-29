// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from './task1.js';

export function addUser(first_name, last_name, email) {
  fetch(getServerURL() + "/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ first_name, last_name, email })
  });
}
