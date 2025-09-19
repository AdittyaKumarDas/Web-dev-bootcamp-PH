var numbers = ["Tom", "Tim", "Tin", "Tik"];
let newStr = "";
for (let str of numbers) {
  newStr += str;
}

// console.log(newStr);

for (let str2 of numbers) {
  newStr.concat(str2);
}

console.log(newStr);
