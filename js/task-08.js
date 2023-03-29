const form = document.querySelector(".login-form");
const submitForm = form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  //console.log(event.currentTarget)
   const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
    
  
}
