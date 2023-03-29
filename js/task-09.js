function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanWidget = document.querySelector(".color");
const butClick = button.addEventListener("click", onClick);

function onClick() {
  body.style.backgroundColor = getRandomHexColor();
  spanWidget.textContent = body.style.backgroundColor;
}