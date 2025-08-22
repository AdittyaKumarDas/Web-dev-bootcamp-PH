function smallLargeName(nameArray) {
  let LowestnameLength = nameArray[0].length;
  let highestNameLength = nameArray[0].length;
  let lowestNameReserve = nameArray[0];
  let highestNameReserve = nameArray[0];

  for (let name of nameArray) {
    if (name.length < LowestnameLength) {
      LowestnameLength = name.length;
      lowestNameReserve = name;
    }
    if (name.length > highestNameLength) {
      highestNameLength = name.length;
      highestNameReserve = name;
    }
  }

  return [highestNameReserve, lowestNameReserve];
}

const name = ["adittya", "babu", "Adittya kumar", "lili", "hi"];

const [largeName, shortName] = smallLargeName(name);

console.log(largeName);
console.log(shortName);
