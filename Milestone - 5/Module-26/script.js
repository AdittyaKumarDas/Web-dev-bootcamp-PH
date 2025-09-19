document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();

  //   Now Set the mobile number and pin for authenticaton

  const mobileNumber = 8801591135435;

  const pinNumber = 13579;

  //   Now get the input field value

  const mobileNumbervalue = document.getElementById("number-input").value;

  const pinNumberValue = document.getElementById("pin-input").value;

  if (mobileNumbervalue === mobileNumber && pinNumberValue === pinNumber) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credintials");
  }
});
