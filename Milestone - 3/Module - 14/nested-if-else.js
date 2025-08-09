let totalScore = 90;
let classAttendence = 50;

if (totalScore >= 90) {
  if (classAttendence >= 95) {
    console.log("You are Got A+");
  } else if (classAttendence >= 80 && classAttendence <= 94) {
    console.log("You Got Grade A");
  } else {
    console.log("You Got Grade A-");
  }
} else if (totalScore >= 75 && totalScore <= 89) {
  if (classAttendence >= 85) {
    console.log("You Got B+");
  } else if (classAttendence >= 70 && classAttendence <= 85) {
    console.log("You Got B");
  } else {
    console.log("You Got B-");
  }
} else if (totalScore >= 60 && totalScore <= 74) {
  if (classAttendence >= 50) {
    console.log("You Got Grade C");
  } else {
    console.log("Grade is F");
  }
} else {
  console.log("You are fail ---> Grade F");
}
