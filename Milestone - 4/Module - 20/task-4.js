function longestString(string) {
  let arrayItem = string[0].length;
  let str = "";

  for (let item of string) {
    if (item.length > arrayItem) {
      arrayItem = item.length;
      str = item;
    }
  }
  return str;
}

const str = "I love my country";
const str2 = "I am learning Programming to become a programmer";

console.log(longestString(str.split(" ")));
console.log(longestString(str2.split(" ")));
