function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type=number]');


function divBox(element) {
  const box = document.getElementById("boxes");
  let divString = "";
  for(let i = 0; i < element; i+=1){
    divString += `<div class="js-box" 
    style="width: ${30 + i * 10}px; 
    height: ${30 + i * 10}px; 
    background-color: ${getRandomHexColor()}"></div>`;
  }
  box.innerHTML = divString;
  
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
  destroyBoxes();
  input.value =0;
}
