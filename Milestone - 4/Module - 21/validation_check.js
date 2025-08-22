// Check Validation of a String
// if user send a number instead of string, then validation is must be needed

function validationString(str1, str2) {
  // Validation checking
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Please enter a string data";
  }
  return str1 + " " + str2;
}

// console.log(validationString("Adittya", "Das"));
// console.log(validationString("Adittya", 20));

// Check Validation of number

function validationNumber(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return "please enter a valid number";
  }
  return number1 + number2;
}

// console.log(validationNumber(33, 23));
// console.log(validationNumber(33, 90));

//Object Validation

function validationObject(data) {
  if (typeof data !== "object") {
    return "Oh!! take a object please";
  }

  return data;
}

const data = {
  name: "Aditya",
  Bike_model: "Hornet 2.0",
  color: "blue",
};

const number = 100;

// console.log(validationObject(data));
// console.log(validationObject(number));

// Array Validation

function validationArray(array) {
  if (Array.isArray(array) !== true) {
    return "Please enter a array please";
  }

  return array;
}

const array = [1, 2, 3, 43, 41, 54, 67, 56];

console.log(validationArray(array));

const object = {
  name: "Aditya",
  Bike_model: "Hornet 2.0",
  color: "blue",
};

console.log(validationArray(object));
