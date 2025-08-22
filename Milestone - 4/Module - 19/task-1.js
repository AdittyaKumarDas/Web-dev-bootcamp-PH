function oddOrEven(arr) {
  let isEven = [];
  let isOdd = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      isEven.push(num);
    } else {
      isOdd.push(num);
    }
  }

  return { evens: isEven, odds: isOdd };
}

const arr = [19, 20, 36, 56, 76, 898, 37, 29];

const evenOrOdd = oddOrEven(arr);

console.log(evenOrOdd.evens, evenOrOdd.odds);
