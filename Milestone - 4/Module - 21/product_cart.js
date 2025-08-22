const product = [
  { name: "Andriod phone", price: 30000, quantity: 50 },
  { name: "Neckband", price: 3200, quantity: 10 },
  { name: "Charger", price: 2500, quantity: 20 },
  { name: "glass", price: 200, quantity: 100 },
  { name: "phone cover", price: 400, quantity: 50 },
];

function productFinalPrice(product) {
  let price = 0;

  for (let item of product) {
    price += item.price * item.quantity;
  }

  return price;
}

console.log("Your Final Payment is: "+productFinalPrice(product));
