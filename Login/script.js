const form = document.querySelector("form");
const emailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Please enter all the credentials");
    return;
  }

  console.log("Submitted Email:", email);
  console.log("Submitted Password:", password);

  form.reset();
});
