// Object literal method-->commonly used
const bike = {
  model: "Honda hornet 2.0",
  color: "Ash Dark",
  price: 289000,
};

console.log(bike);

// Using new Object() constructor
const bike2 = new Object();
bike2.model = "Honda hornet 2.0";
bike2.color = "Ash Dark";
bike2.price = 289000;

console.log(bike2);

// Using object.create()

const prototypeBike = {
  type: "motorcycle",
};

const bike3 = Object.create(prototypeBike);
bike3.model = "Honda hornet 2.0";
bike3.color = "Ash Dark";

console.log(bike3);

// Using own custom constructor function

function Bike1(model, color, price) {
  this.model = model;
  this.color = color;
  this.price = price;
}

const bike4 = new Bike1("Honda hornet 2.0", "Ash Dark", 289000);

console.log(bike4);

//Using ES6 classes

class Bike2 {
  constructor(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
  }
}

const bike5 = new Bike2("Honda hornet 2.0", "Ash Dark", 289000);

console.log(bike5);
