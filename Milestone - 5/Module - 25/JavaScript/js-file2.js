document.getElementById("btn-id").addEventListener("click", function () {
  const pageElements = document.getElementById("heading1");
  pageElements.innerText = "New Event Handler Text";
});

document.getElementById("login-btn").addEventListener("click", function () {
  const forLogin = document.getElementById("main-login");
  forLogin.innerText = "Logged In";
});
