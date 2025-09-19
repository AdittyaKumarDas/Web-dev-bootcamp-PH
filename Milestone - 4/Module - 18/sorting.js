const numbers = [2, 4, 7, 8, 9, 2, 1, 6];

console.log(numbers.sort());

const name = ["Adi", "Babu", "dipto", "Billu", "Dilip", "Shanda"];

console.log(name.sort());
console.log(name.sort().reverse());

const num = [10, 23, 14, 45, 98, 43, 454, 133, 334, 232, 1999];

console.log(num.sort());

// Asending order
console.log(
  num.sort(function (a, b) {
    return a - b;
  })
);

// Desending Order

console.log(
  num.sort(function (a, b) {
    return b - a;
  })
);
