const str =
  "My name is Adittya Kumar DAs Dipto. I Am A student of NationAl University, Gazipur.But currently studied in RAngAmati Govt collage";

let cnt_A = 0;
let cnt_a = 0;

for (const i of str) {
  if (i === "A") {
    cnt_A++;
  } else if (i === "a") {
    cnt_a++;
  }
}

console.log("Count of A is: ", cnt_A);
console.log("Count of a is: ", cnt_a);
