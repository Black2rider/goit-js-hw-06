const textinput = document.getElementById("validation-input");
const removeFocus = textinput.addEventListener("blur", onBlur);
const maxLength = Number(textinput.dataset.length);

function onBlur(evt) {
  if (evt.target.value.length === maxLength) {
    evt.currentTarget.classList.add("valid");
    evt.currentTarget.classList.remove("invalid");
  } else {
    evt.currentTarget.classList.remove("valid");
    evt.currentTarget.classList.add("invalid");
  };
};
