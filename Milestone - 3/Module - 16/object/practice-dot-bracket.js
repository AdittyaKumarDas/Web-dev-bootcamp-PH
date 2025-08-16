const bike = {
    model: "Honda hornet 2.0",
    color:"Ash Dark",
    price : 289000,
    "mileage" : "50 km",
    "light" : 'LED',
    "model year": 2024
}


// First:- Access outside the object using dot and bracket notation



console.log(bike.model);
console.log(bike["price"]);

// Second:- Change the value of key using Dot and Bracket notation

bike.color = "Dark+light Blue";
bike["light"] = "LED but have not fogg light";


// Third store key/property in a new variable then change the value

const newPrice = "price";

bike[newPrice] = 279000;


const newModel = "model year";

bike[newModel] = 2025;


const newName = "model";

bike[newName] = "Honda Hornet 2.O 2025"

console.log(bike);