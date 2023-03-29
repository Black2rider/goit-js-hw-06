function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const input = document.querySelector('input[type=number]');
// const inputListener = input.addEventListener("input", onClick);
// const create =  document.querySelector("button[data-create]");
 const box = document.getElementById("boxes");
// function onClick(event) {
  
// }



box.addEventListener('click', olk()) 

function olk() {
  let div = document.createElement('div');
  div.style.width = "30px";
  div.style.height = "30px";
  div.style.backgroundColor = getRandomHexColor();

  box.appendChild(div);
}

for(let i = 0; i < el; i+=1){
  
}

console.dir(box)

// function createBoxes(amount) {

// }