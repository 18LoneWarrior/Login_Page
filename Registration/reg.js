const form = document.querySelector("form");
const firstNameInput = document.getElementById("formGroupExampleInput");
const lastNameInput = document.getElementById("formGroupExampleInput2");
const emailInput = document.getElementById("exampleInputEmail1");
const passwordInput = document.getElementById("exampleInputPassword1");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    alert("Please enter all the credentials");
    return;
  }

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Password:", password);

  form.reset();
});
