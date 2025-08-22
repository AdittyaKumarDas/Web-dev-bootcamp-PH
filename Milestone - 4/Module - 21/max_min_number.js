function maxMinNumber(number) {
  let max = number[0];
  let min = number[0];

  for (let item of number) {
    if (item > max) {
      max = item;
    }
    if (min > item) {
      min = item;
    }
  }

  // Return as a object
    // return {max,min};

  //   Return as a array
  return [max, min];
}

const arr = [23, 34, 65, 12, 98, 89, 67, 100];

// Return as a object
// console.log(maxMinNumber(arr).max);
// console.log(maxMinNumber(arr).min);

// Return as a array

const [max, min] = maxMinNumber(arr);

console.log("max: ", max);
console.log("min: ", min);
