// Single program using normal if else and ternary
const age = 18;

// if (age >= 18) {
//   console.log("You are eligible for Vote");
// } else {
//   console.log("You are not");
// }

// Using ternary for above program

age >= 18
  ? console.log("You are eligible for Vote")
  : console.log("You are not");

//   Using Another program something different
let price = 400;
const age18 = true;

if (age18 == false) {
  price += 200;
  console.log(price);
} else {
  price -= 200;
  console.log(price);
}

// using ternary

price = age18 == true ? console.log(price) : console.log(price);

// using nested if else using ternary
const validAge18 = false;
let Age = 10;

if (validAge18 == true) {
  if (Age >= 18) {
    console.log("Welcome to ghost world");
  } else {
    console.log("You are a baccha now");
  }
} else {
  console.log("Boyos bara tar pore aai");
}

// Using ternary

validAge18 == true
  ? Age >= 18
    ? console.log("Welcome to ghost world")
    : console.log("You are a baccha now")
  : console.log("Boyos bara tar pore aai");

const num1 = 40,
  num2 = 50;

result =
  num1 > num2
    ? console.log("Result is: ", num1 * 2)
    : console.log("Result is: ", num1 + num2);
