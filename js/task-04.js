
const refs = {
   counter: document.querySelector("#value"),
   buttonDecrement: document.querySelector("button[data-action = decrement"),
   buttonIncrement: document.querySelector("button[data-action = increment"),
};

let counterValue = 0;

const decrement = refs.buttonDecrement.addEventListener("click", decreClick);
const increment = refs.buttonIncrement.addEventListener("click", increClick);

function decreClick() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

function increClick() {
  counterValue += 1;
  refs.counter.textContent = counterValue
}
