const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
const inputListener = input.addEventListener("input", onClick);

function onClick(event){
  if(event.currentTarget.value !== ""){
    output.textContent = event.currentTarget.value.trim();
  } else
    output.textContent = "Anonymous";
};