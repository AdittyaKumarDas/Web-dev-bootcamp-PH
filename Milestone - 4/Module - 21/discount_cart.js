const product = [
  { name: "Andriod phone", price: 30000, quantity: 5 },
  { name: "Neckband", price: 3200, quantity: 5 },
  { name: "Charger", price: 2500, quantity: 10 },
  { name: "glass", price: 200, quantity: 10 },
  { name: "phone cover", price: 400, quantity: 10 },
];

function phone(product) {
  let newPrice = 0;
  for (let item of product) {
    if (item.name === "Andriod phone") {
      newPrice = item.price * item.quantity - item.price * item.quantity * 0.05;
    }
  }

  return newPrice;
}

function neckband(product) {
  let newPrice = 0;
  for (let item of product) {
    if (item.name === "Neckband") {
      newPrice = item.price * item.quantity - item.price * item.quantity * 0.02;
    }
  }

  return newPrice;
}

function discountCart(product) {
  let andriod_neckband = neckband(product) + phone(product);
  let discountPrice = 0;

  for (let item of product) {
    if (item.name !== "Andriod phone" && item.name !== "Neckband") {
      discountPrice += item.price * item.quantity;
    }
  }

  if (andriod_neckband + discountPrice <= 5000) {
    return andriod_neckband + discountPrice;
  } else {
    return (
      andriod_neckband +
      discountPrice -
      (andriod_neckband + discountPrice) * 0.05
    );
  }
}

console.log(discountCart(product));
