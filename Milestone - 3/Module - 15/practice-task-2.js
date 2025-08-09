let num = 1;

while (num <= 100) {
  if (num >= 61 && num % 2 === 0) {
    console.log("Even number: ", num);
  } else if (num >= 78 && num <= 98 && num % 2 === 1) {
    console.log("Odd Number: ", num);
  }

  num++;
}
