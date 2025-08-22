function countVowel(string) {
  string.split("");

  let cnt = 0;

  for (let item of string) {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      cnt++;
    }
  }

  return cnt;
}

console.log(countVowel("programming is a creative thing"));
