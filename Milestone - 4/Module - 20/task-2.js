function repeatNumber(array, number) {
  let cnt = 0;

  for (i = 0; i < array.length; i++) {
    if(array[i] === number){
        cnt++;
    }
  }

  return cnt;
}

const array = [
  10, 2, 3, 4, 5, 4, 3, 6, 5, 3, 4, 5, 6, 5, 4, 3, 6, 7, 7, 8, 9, 3, 2, 9, 8, 7,
  6,
];

console.log(repeatNumber(array, 6));
console.log(repeatNumber(array, 10));
console.log(repeatNumber(array, 23));
console.log(repeatNumber(array, 5));
console.log(repeatNumber(array,7));
