const statement = "I am a hard working person";

const words = statement.split(" "); // ⁡⁢⁣⁡⁢⁣⁣Split items is like array["I," "am", "a", "hard", "working", "person"]⁡

const wordArray = [...words];

let emptyArray = [];

for (let i = 0; i < wordArray.length; i++) {
  let popValue = words.pop();

  emptyArray.push(popValue);
}

console.log(emptyArray.join(" "));
