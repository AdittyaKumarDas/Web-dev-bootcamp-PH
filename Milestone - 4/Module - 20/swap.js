let a = 10;
let b = 20;

console.log("a is: " + a, "b is: " + b);
let temp = b;

b = a;

a = temp;

console.log("a is: " + a, "b is: " + b);



console.log("----------------------")

// Destructing method

let x = 50.40;
let y = 60;

[x,y] = [y,x];

console.log(x,y);