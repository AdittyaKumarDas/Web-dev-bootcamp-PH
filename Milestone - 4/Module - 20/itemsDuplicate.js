function itemDuplicate(array) {
  newArray = [];

  for (const item of array) {
    if (newArray.includes(item) === false) {
      newArray.push(item);
    }
  }

  return newArray;
}

const numbers = [1, 2, 5, 4, 3, 2, 1, 6, 5, 7, 6, 5, 8, 9, 8, 7, 6, 5];

console.log(itemDuplicate(numbers));

const names = [
  "Adittya",
  "babu",
  "jitu",
  "dipto",
  "jitu",
  "dipto",
  "Adittya",
  "babu",
  "dipto",
];

console.log(itemDuplicate(names));
