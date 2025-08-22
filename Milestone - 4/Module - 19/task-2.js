function oddAndEven(numbers) {
  if (numbers % 2 === 0) {
    return numbers / 2;
  } else {
    return numbers * 2;
  }
}

const arr = [10, 8, 49, 38, 29, 34, 20, 3, 998, 35,65,77,23,21,67];

for (let items of arr) {
  console.log(oddAndEven(items));
}
