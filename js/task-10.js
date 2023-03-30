function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type=number]');
const box = document.getElementById("boxes");

function divBox(element) {
  for(let i = 0; i < element; i+=1){
    let div = document.createElement("div");
    div.classList.add("js-box");
    div.style.width = 30 + i * 10 + "px";
    div.style.height = 30 + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    box.append(div);
  }
}

const create =  document.querySelector("button[data-create]");
const buttonCreate = create.addEventListener("click", onClick);

function onClick(event) {
  event.currentTarget.value = input.value;
  divBox(input.value);
  
}

const destroy =  document.querySelector("button[data-destroy]");
const buttonDestroy = destroy.addEventListener("click", onReset);

function destroyBoxes() {
  boxes.innerHTML = '';
}

function onReset() {
  destroyBoxes()
}


