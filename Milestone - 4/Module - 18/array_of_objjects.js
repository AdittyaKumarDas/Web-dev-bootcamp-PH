const customers = [
  { name: "Adittya", product: "iphone", price: 140000, color: "blue" },
  { name: "Atanu", product: "iPad", price: 150000, color: "Dard Ash" },
  { name: "Anik", product: "MacBook", price: 250000, color: "Black" },
];

// console.log(customers);

// console.log(customers[0]);
// console.log(customers[1]);
// console.log(customers[1].price);

// for(let i = 0; i<customers.length; i++){
//   console.log(customers[i]);
// }

for (let details of customers) {
  console.log(details.name, "--->", details.product, "--->", details.price);
}
