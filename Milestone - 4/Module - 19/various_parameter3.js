function checkEligibility(age, hasID, isStudent) {
  if (age < 18) {
    return "Not eligible, Sorry!";
  } else if (hasID !== true) {
    return "No eligible, NO ID";
  } else if (age >= 18 && isStudent) {
    return "you are eligible for discount";
  } else {
    return "Eligible for Regular Entry";
  }
}

console.log(checkEligibility(17, false, false));
console.log(checkEligibility(20, true, true));
