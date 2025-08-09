let num = 81;
let numEven = 206;
let sumOdd = 0,
  sumEven = 0;

while (num <= 131) {
  if (num % 2 !== 0) {
    console.log("Odd number is: ", num);
    sumOdd = sumOdd + num;
  }
  num++;
}

console.log(sumOdd);

while (numEven <= 311) {
  if (numEven % 2 !== 1) {
    console.log("Even Number is: ", numEven);
    sumEven = sumEven + numEven;
  }
  numEven++;
}

console.log(sumEven);
