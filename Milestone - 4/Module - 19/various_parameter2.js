function createAccount(username, password, isAdmin) {
  if (password.length < 6) {
    return "passWord is too short";
  } else if (isAdmin) {
    return "Account created for Admin:- " + username;
  } else if (isAdmin !== true) {
    return "Account created for User: " + username;
  } else {
    return "You have already an Account";
  }
}

console.log(createAccount("Adittya", "hdehiouru", true));
