const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
const inputListener = input.addEventListener("input", onInput);

function onInput(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}