function calculate_bill(product_name, price, quantity, discout, day) {
  if (day <= 10) {
    const finalPrice = price * quantity - price * quantity * discout;
    return product_name + "----> " + finalPrice;
  }

  return product_name + "--->" + price * quantity;
}

console.log(calculate_bill("Samsung S21 fe", 52000, 10, 0.05, 10));
