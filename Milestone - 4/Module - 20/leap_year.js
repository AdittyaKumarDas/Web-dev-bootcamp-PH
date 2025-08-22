function leapYearChecker(year) {
  /**
   * A year that is divisible by 4 is leap year
   * And Those year which is divisible by 4 but not divisible by 100 is a leap year
   * And final which is divisible by 100 and divisible by 400 is a leap year.
   */
  if (year % 4 === 0 && year % 100 !== 0) {
    return year + " THis iS LeAp YEar";
  } else if (year % 400 === 0) {
    return year + " THIS IS LEAP YEAR";
  } else {
    return year + " This is not Leap Year";
  }
}

console.log(leapYearChecker(1900));
console.log(leapYearChecker(2000));
console.log(leapYearChecker(2016));
console.log(leapYearChecker(2100));
console.log(leapYearChecker(1700));
console.log(leapYearChecker(1800));
console.log(leapYearChecker(2004));
console.log(leapYearChecker(2012));
console.log(leapYearChecker(2020));
console.log(leapYearChecker(2024));
console.log(leapYearChecker(2032));
console.log(leapYearChecker(2038));
