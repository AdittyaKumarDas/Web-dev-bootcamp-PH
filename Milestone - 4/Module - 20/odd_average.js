function oddAverage(arr) {
  inOdd = [];

  for (let items of arr) {
    if (items % 2 === 1) {
      inOdd.push(items);
    }
  }

  let sum = 0;

  for (let items of inOdd) {
    sum += items;
  }

  console.log("Odd numbers: ", inOdd);
  let avg = sum / inOdd.length;

  return avg;
}

const numbers = [10, 2, 44, 45, 65, 76, 89, 99, 23, 43, 22, 13, 21];

console.log(oddAverage(numbers));
