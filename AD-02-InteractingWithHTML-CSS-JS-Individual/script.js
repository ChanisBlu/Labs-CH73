const firstHeader = document.getElementById("red");
firstHeader.textContent = "GoodBye";

const orangeHeader = document.getElementById("orange-header");
orangeHeader.style.color = "orange";

const clickableHeader = document.getElementById("clickable-header");

clickableHeader.addEventListener("click", function () {
  clickableHeader.style.color = "brown";
});