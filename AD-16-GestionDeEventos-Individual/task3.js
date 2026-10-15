function mostrarLinks() {
  const links = document.querySelectorAll("a");
  const primero = links[0].href;
  const ultimo = links[links.length - 1].href;

  alert(
    "Número de links: " + links.length +
    "\nPrimer link: " + primero +
    "\nÚltimo link: " + ultimo
  );
}