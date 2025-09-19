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

const array = [98, 87, 67, 91, 92, 33, 87];
// const array = [99, 87, 67, 12, 87];
// const array = [99];
// const array = 100;
// const array = "";
// const array = "Adittya";
// const array  = [];
// const array = [56, 54, 66, 43, 78, 55, 43, 79, "a", "dipto", "adittya"];

console.log(resultReport(array));
