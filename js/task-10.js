function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type=number]');
const inputListener = input.addEventListener("click", onClick);

//const create =  document.querySelector("button[data-create]");
//const createListener = create.addEventListener("click", onClick);

function onClick(event) {
  console.log(event.currentTarget.value);
}

// function createBoxes(amount) {

// }