const form = document.querySelector(".login-form");
const submitForm = form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  //console.log(event.currentTarget)
   const {
    elements: { login, password }
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  
  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
    
  
}

