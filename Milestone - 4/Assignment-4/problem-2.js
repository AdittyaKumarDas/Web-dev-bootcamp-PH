function onlyCharacter(str) {
  // You have to write your code here
  //Validation Checking

  if (typeof str !== "string") {
    return "Invalid";
  }

  let newStr = "";
  for (let item of str) {
    if (item !== " ") {
      newStr += item;
    }
  }

  return newStr.toUpperCase();
}

console.log(onlyCharacter("i love bd"));
console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Cy   bar- At  tac k  "));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter("Serv er : : Do wn"));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));
console.log(onlyCharacter({name:"Adittya", age:25}));
console.log(onlyCharacter(400));
