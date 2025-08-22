function lowestHighestNumber(array) {
  let setValueLowest = array[0];
  let setValueHighest = array[0];

  for (let item of array) {
    if (item < setValueLowest) {
      setValueLowest = item;
    }
    if (item > setValueHighest) {
      setValueHighest = item;
    }
  }

  return { highestValue: setValueHighest, lowestValue: setValueLowest };
}

const array = [-11,2, 5, 10, -4, -2, -1, -10, 50];

console.log(lowestHighestNumber(array).highestValue);
console.log(lowestHighestNumber(array).lowestValue);
