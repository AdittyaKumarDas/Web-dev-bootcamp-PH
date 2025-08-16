const str = "Hello , my name is adittya kumar das";

let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (i === 0) {
    // প্রথম অক্ষর capitalize
    newStr += str[i].toUpperCase();
  } else if (str[i - 1] === " ") {
    // স্পেসের পরের অক্ষর capitalize
    newStr += str[i].toUpperCase();
  } else {
    // বাকি সব যেমন আছে তেমন রাখা
    newStr += str[i];
  }
}

console.log(newStr);
// Output: Hello , My Name Is Adittya Kumar Das
