function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create =  document.querySelector("button[data-create]");
const createListener = create.addEventListener("click", onClick);

function onClick(event) {
  console.dir(event.currentTarget)
}

function createBoxes(amount) {

}