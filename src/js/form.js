const username = document.getElementById("username");
const password = document.getElementById("password");
username.value = localStorage.getItem("username");
password.value = localStorage.getItem("password");

document.getElementById("formApp").addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.setItem("username", username.value);
  localStorage.setItem("password", password.value);
});