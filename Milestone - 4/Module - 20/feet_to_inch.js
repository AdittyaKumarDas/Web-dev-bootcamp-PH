function feetToInch(feet, inch) {
  let feetValue = feet*12;
  let inchValue = inch;

  return (feetValue+inchValue)+" Inch";
}

console.log(feetToInch(5, 6));
