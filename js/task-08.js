const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
    const { elements: { email, password },
    } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені");
  }
console.log(`Email: ${email.value}
Password: ${password.value}`);
event.currentTarget.reset();
}
