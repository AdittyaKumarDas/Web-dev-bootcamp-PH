//problem-1
function totalFine(fare) {
  // You have to write your code here
  //Check Validation
  if (typeof fare !== "number") {
    return "Invalid";
  } else if (fare <= 0) {
    return "Invalid";
  }
  let fine = fare + fare * 0.2 + 30;
  return fine;
}

// problem-2
function onlyCharacter(str) {
  // You have to write your code here
  //Validation Checking

  if (typeof str !== "string") {
    return "Invalid";
  }

  let newStr = "";
  for (let item of str) {
    if (item !== " ") {
      newStr += item;
    }
  }

  return newStr.toUpperCase();
}

//problem-3
function bestTeam(player1, player2) {
  // You have to write your code here
  //Validation check

  if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    Array.isArray(player1) !== false ||
    typeof player2 !== "object" ||
    typeof player1 !== "object" ||
    Array.isArray(player2) !== false
  ) {
    return "Invalid";
  }

  let teamOne = player1.foul + player1.cardY + player1.cardR;
  let teamtwo = player2.foul + player2.cardY + player2.cardR;

  if (teamOne < teamtwo) {
    return player1.name;
  } else if (teamOne > teamtwo) {
    return player2.name;
  } else {
    return "Tie";
  }
}

//problem-4
function isSame(arr1, arr2) {
  // You have to write your code here
  //   Validation Check
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  }

  let isBool = false;
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isBool = true;
      } else {
        return false;
      }
    }
    if (isBool) {
      return true;
    }
  }
}

//problem-5
function resultReport(marks) {
  // You have to write your code here

  //Validation Check
  if (Array.isArray(marks) !== true) {
    return "Invalid";
  }

  //   Variable declared
  let score = 0,
    averageScore;
  let isPass = 0,
    isFail = 0;

  //for empty array checking
  if (marks.length === 0) {
    return { finalScore: 0, pass: isPass, fail: isFail };
  }

  //If array is not empty then
  for (let mark of marks) {
    //if array is a string array then
    if (typeof mark === "string") {
      return "Invalid";
    } else {
      score += mark;

      if (mark < 40) {
        isFail++;
      } else {
        isPass++;
      }
    }
  }

  //final result return
  averageScore = Math.round(score / marks.length);
  return { finalScore: averageScore, pass: isPass, fail: isFail };
}
