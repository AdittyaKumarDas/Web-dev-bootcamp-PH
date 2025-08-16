const str =
  "My name is Adittya Kumar DAs Dipto. I Am A student of NationAl University, Gazipur.But currently studied in RAngAmati Govt collage";

let cntVowel = 0;

for (const i of str) {
  if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
    cntVowel++;
  }
}

console.log(cntVowel);
