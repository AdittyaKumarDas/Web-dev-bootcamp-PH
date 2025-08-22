const phone = [
  { name: "Samsung", price: 24000, model: "A34" },
  { name: "Oppo", price: 44000, model: "F45" },
  { name: "Xioami", price: 32000, model: "Note 9" },
  { name: "iQoo", price: 38000, model: "z-9 turbo" },
  { name: "realme", price: 10000, model: "realme c71" },
  {name:"iPhone", price:120000, model:"iPhone 14 pro max"}
];

function cheapPhone(phone) {
  let phonePrice = phone[0];
  let highPhonePrice = phone[0];

  for (let item of phone) {
    if (item.price < phonePrice.price) {
      phonePrice = item;
    }

    if (item.price > highPhonePrice.price) {
      highPhonePrice = item;
    }
  }

  return [phonePrice, highPhonePrice];
}

const [lowPrice, highPrice] = cheapPhone(phone);

console.log(lowPrice, highPrice);