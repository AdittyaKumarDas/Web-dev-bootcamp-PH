const car = {
    model : "Tesla",
    color:"Black", 
    price : 25000000,
    origin:"US"
}

// console.log(car);

// Dot notation:- Print result using dot sign

console.log(car.color);
console.log(car.price);

const country = car.origin;
console.log(country);

// Bracket notation:- Access object by using third bracket

const carPrice = car["price"];

console.log(carPrice);