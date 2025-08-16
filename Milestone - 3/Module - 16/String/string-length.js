const capital = "Bangladesh";

console.log(capital);
console.log("Length of Capital:- ", capital.length);

console.log(capital[0]);
console.log(capital[1]);
console.log(capital[2]);
console.log(capital[3]);

// It's not working in String, but Works in Number Array.
capital[0] = "D"; 

console.log(capital);

const thana = "Thana para";

console.log(thana.length); //Length 10 because there is a space and in string that will count.That why Space is a character.