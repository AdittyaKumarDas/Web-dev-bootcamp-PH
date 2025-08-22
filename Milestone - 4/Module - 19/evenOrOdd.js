function evenOrOdd(numbers) {
  if (numbers % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const arr = [3, 29, 34, 23, 33, 55, 4, 98, 32, 10];

for (let num of arr) {
  console.log(evenOrOdd(num));
}
