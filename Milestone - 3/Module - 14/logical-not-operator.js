// First type
const isANumber = true;

if (isANumber == true) {
  console.log("This is a number");
} else {
  console.log("It's a String");
}

// We can write above program by this style

if (isANumber) {
  console.log("WOW,Is this a number");
} else {
  console.log("Oh no! This is not a number bro");
}

// Now Logical Not Operator

const isString = false;

if (isString === false) {
  console.log("Yes, Found this");
} else {
  console.log("There is no string available");
}

// Now using Logical Not operator

if (!isString) {
  console.log("Yes, Found this");
} else {
  console.log("There is no string available");
}
