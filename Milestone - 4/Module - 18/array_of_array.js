const numbers = [
  [10, 20, 40, 50, 60, 60, 70],
  ["adi", "dipto", "babu", "jojo", "tutu", "tata", "archer"],
  [2.45, 5.45, 3.54, 6.56, 2.32, 9.54, 8.45],
];

numbers[1][2] = "babluuuuu";
console.log(numbers);
// let i = 0;
// for (let num of numbers){
//   console.log(num[1]);
// }

numbers[1].pop();
numbers[1].push("WEbDev");

console.log(numbers);
