function inchToFeet(value){
    let heightValue = value / 12;
    let feetValue = parseInt(heightValue);
    let inchValue = value - feetValue * 12;

    return finalValue = feetValue +" Ft "+inchValue+" inch ";
}


console.log(inchToFeet(75));
console.log(inchToFeet(98));
console.log(inchToFeet(66));