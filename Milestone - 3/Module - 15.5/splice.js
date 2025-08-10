const arr = [10,40,30,59,43,3,33,990,320];

console.log(arr.splice(1,3, 'a', 'b'));
console.log(arr);
/*
[ 40, 30, 59 ]
[
  10,  'a', 'b', 'c',
  43,  3,   33,  990,
  320
]
*/