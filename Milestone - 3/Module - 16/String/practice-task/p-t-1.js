const str =
  "My country name is Bangladesh.It is a mostly populated country in indian sub continent";

let count = 0;

for (const i of str) {
  if (i === "a") {
    count++;
  }
}

console.log(count);
