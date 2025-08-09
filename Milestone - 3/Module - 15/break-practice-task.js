// let i = 1;

// while (i <= 200) {
//   console.log(i);
//   if (i === 100) {
//     break;
//   }
//   i++;
// }

let i = 1,
  sum = 0;

while (i <= 200) {
  sum = sum + i;
  if (sum >= 100) {
    console.log("Break");
    break;
  }
  i++;
}

console.log("Sum is: ", sum);

let num = 1;

while (num <= 100) {
  if (num * num == 49) {
    console.log("break");
    break;
  }
  num++;
}
