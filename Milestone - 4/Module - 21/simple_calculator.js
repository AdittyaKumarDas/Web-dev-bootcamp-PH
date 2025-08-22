function calculator(value1, value2, equation) {
  if (equation === "add" || equation === "Add" || equation === "+") {
    return value1 + value2;
  } else if (equation === "sub" || equation === "Sub" || equation === "-") {
    return value1 - value2;
  } else if (equation === "mul" || equation === "Mul" || equation === "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

console.log(calculator(10, 20, "add"));
console.log(calculator(10, 20, "Add"));
console.log(calculator(10, 20, "sub"));
console.log(calculator(10, 20, "mul"));
console.log(calculator(10, 20, "+"));
console.log(calculator(10, 20, "-"));
console.log(calculator(10, 20, "*"));
console.log(calculator(10, 20, "/"));
