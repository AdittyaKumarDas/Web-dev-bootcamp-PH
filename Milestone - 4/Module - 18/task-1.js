const colors = ["red", "blue", "green", "yellow", "orange"];

// Using method 1
const newColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
  newColors.push(colors[i]);
}

// console.log(newColors);

// Using method -2

const toColors = [];

for (const col of colors) {
  toColors.unshift(col);
}

// console.log(toColors);

// Using method - 3

const forColors = [];

const copyColors = [...colors];

for (let i = 0; i < copyColors.length; i++) {
  let popColors = colors.pop();
  forColors.push(popColors);
}

console.log(forColors);
